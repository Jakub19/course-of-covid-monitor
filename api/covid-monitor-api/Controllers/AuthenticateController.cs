﻿using covid_monitor_api.Authentication;
using covid_monitor_api.Authentication.Manage;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace covid_monitor_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly IConfiguration _configuration;

        public AuthenticateController(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration)
        {
            this.userManager = userManager;
            this.roleManager = roleManager;
            _configuration = configuration;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            var user = await userManager.FindByEmailAsync(model.Email);
            if (user != null && await userManager.CheckPasswordAsync(user, model.Password))
            {
                var userRoles = await userManager.GetRolesAsync(user);

                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Email, user.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(ClaimTypes.NameIdentifier, user.Id),
                    new Claim(ClaimTypes.Surname, user.Surname),
                    new Claim(ClaimTypes.Name, user.Name)
                };

                foreach (var userRole in userRoles)
                {
                    authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                }

                var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

                var token = new JwtSecurityToken(
                    issuer: _configuration["JWT:ValidIssuer"],
                    audience: _configuration["JWT:ValidAudience"],
                    expires: DateTime.Now.AddHours(3),
                    claims: authClaims,
                    signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                    );

                return Ok(new
                {
                    user.Name,
                    user.Surname,
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo
                });
            }
            return Unauthorized();
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            var userExists = await userManager.FindByNameAsync(model.Email);
            if (userExists != null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists!" });

            ApplicationUser user = new ApplicationUser()
            {
                Name = model.Name,
                Surname = model.Surname,
                Email = model.Email,
                UserName = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                PhoneNumber = model.PhoneNumber,
                Address = model.Address,
                City = model.City,
                PostalCode = model.PostalCode
            };
            var result = await userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });

            return Ok(new Response { Status = "Success", Message = "User created successfully!" });
        }

        [HttpPost]
        [Route("register-admin")]
        public async Task<IActionResult> RegisterAdmin([FromBody] RegisterModel model)
        {
            var userExists = await userManager.FindByNameAsync(model.Email);
            if (userExists != null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists!" });

            ApplicationUser user = new ApplicationUser()
            {
                Name = model.Name,
                Surname = model.Surname,
                Email = model.Email,
                UserName = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                PhoneNumber = model.PhoneNumber,
                Address = model.Address,
                City = model.City,
                PostalCode = model.PostalCode
            };
            var result = await userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });

            if (!await roleManager.RoleExistsAsync(UserRoles.Admin))
                await roleManager.CreateAsync(new IdentityRole(UserRoles.Admin));
            if (!await roleManager.RoleExistsAsync(UserRoles.User))
                await roleManager.CreateAsync(new IdentityRole(UserRoles.User));

            if (await roleManager.RoleExistsAsync(UserRoles.Admin))
            {
                await userManager.AddToRoleAsync(user, UserRoles.Admin);
            }

            return Ok(new Response { Status = "Success", Message = "User created successfully!" });
        }
        [HttpPut]
        [Route("UpdateUserDetails")]
        public async Task<ActionResult<UpdateUserDetails>> UpdateUserDetails([FromBody] UpdateUserDetails model)
        {
            var userExists = await userManager.GetUserAsync(HttpContext.User);
            var emailChanged = false;
            if (userExists == null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User does not exsist!" });

            // If we have a first name...
            if (model.FirstName != null)
                // Update the profile details
                userExists.Name = model.FirstName;

            // If we have a last name...
            if (model.LastName != null)
                // Update the profile details
                userExists.Surname = model.LastName;

            // If we have a email...
            if (model.Email != null &&
                // And it is not the same...
                !string.Equals(model.Email.Replace(" ", ""), userExists.NormalizedEmail))
            {
                // Update the email
                userExists.Email = model.Email;

                // Un-verify the email
                userExists.EmailConfirmed = false;

                // Flag we have changed email
                emailChanged = true;
            }
            if (model.PhoneNumber != null)
                // Update the profile details
                userExists.PhoneNumber = model.PhoneNumber;

            if (model.Address != null)
                // Update the profile details
                userExists.Address = model.Address;

            if (model.City != null)
                // Update the profile details
                userExists.City = model.City;


            // Attempt to commit changes to data store
            var result = await userManager.UpdateAsync(userExists);

            // If successful, send out email verification
            if (result.Succeeded && emailChanged)
            {
                // Send email verification
                return Ok(new Response { Status = "Success", Message = "User details updated!" });
            }
            else
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Something went wrong! Check your data." });
            }

        }
        [HttpPut]
        [Route("UpdateUserPassword")]
        public async Task<ActionResult<UpdateUserPassword>> UpdateUserPassword([FromBody] UpdateUserPassword model)
        {
            var userExists = await userManager.GetUserAsync(HttpContext.User);

            if (userExists == null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User does not exsist!" });


            // Attempt to commit changes to data store
            var result = await userManager.ChangePasswordAsync(userExists, model.CurrentPassword, model.NewPassword);

            // If successful, send out email verification
            if (result.Succeeded)
            {
                // Send email verification
                return Ok(new Response { Status = "Success", Message = "Password changed!" });
            }
            else
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Something went wrong! Check your data." });
            }

        }
        [HttpGet]
        [Route("SearchUsers")]
        public async Task<ActionResult<SearchUser>> SearchUsers([FromBody] SearchUser model)
        {

            var userExists = await userManager.GetUserAsync(HttpContext.User);
            if (userExists == null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User does not exsist!" });

            var firstOrLastNameMissing = string.IsNullOrEmpty(model?.FirstName) || string.IsNullOrEmpty(model?.LastName) || string.IsNullOrEmpty(model?.Email);
            var notEnoughSearchDetails =
                // First and last name
                firstOrLastNameMissing &&
                // Username
                string.IsNullOrEmpty(model?.Address) &&
                // Phone number
                string.IsNullOrEmpty(model?.PhoneNumber) &&
                // Email
                string.IsNullOrEmpty(model?.Email);

            if (notEnoughSearchDetails)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Data not found!" });

            var foundUser = default(ApplicationUser);


            // If we have an email...
            if (foundUser == null && !string.IsNullOrEmpty(model.Email))
                // Find the user by email
                foundUser = await userManager.FindByEmailAsync(model.Email);

            // If we have a phone number...
            if (foundUser == null && !string.IsNullOrEmpty(model.PhoneNumber))
            {
                // Find the user by phone number
                foundUser = userManager.Users.FirstOrDefault(u =>
                                // Phone number is confirmed
                                u.PhoneNumberConfirmed &&
                                // Phone number must match exactly 
                                // including country code if provided
                                u.PhoneNumber == model.PhoneNumber);
            }

            // If we found a user...
            if (foundUser != null)
            {
                // Return that users details
                return Ok(new
                {
                    FirstName = foundUser.Name,
                    LastName = foundUser.Surname,
                    Email = foundUser.Email,
                    foundUser.Address,
                    foundUser.City,
                    foundUser.PhoneNumber,
                    foundUser.PostalCode


                });
            }

            var results = new SearchUsersResult();

            // If we have a first and last name...
            if (!firstOrLastNameMissing)
            {
                // Search for users...
                var foundUsers = userManager.Users.Where(u =>
                                    // With the same first name
                                    u.Name == model.FirstName &&
                                    // And same last name
                                    u.Surname == model.LastName)
                                    // And for now, limit to 100 results
                                    // TODO: Add pagination
                                    .Take(100);

                // If we found any users...
                if (foundUsers.Any())
                {
                    // Add each users details
                    results.AddRange((IEnumerable<SearchUsersResult>)foundUsers.Select(u => new SearchUser
                    {
                        Email = u.Email,
                        FirstName = u.Name,
                        LastName = u.Surname,
                        PhoneNumber = u.PhoneNumber,
                        Address = u.Address,
                        City = u.City,

                    }));
                }
            }

            return Ok(results);
        }


        [HttpGet]
        [Route("Profile")]
        public async Task<ActionResult<SearchUser>> ProfileDetails([FromBody] SearchUser model)
        {

            var userExists = await userManager.GetUserAsync(HttpContext.User);
            if (userExists == null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User does not exsist!" });




            return Ok(new
            {
                userExists.Name,
                userExists.Surname,
                userExists.Email,
                userExists.Address,
                userExists.City,
                userExists.PostalCode,
                userExists.PhoneNumber
                
            });

        }
    }
}


