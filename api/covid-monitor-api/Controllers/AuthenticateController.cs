using covid_monitor_api.Authentication;
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

        /// <summary>
        /// Signs in.
        /// </summary>
        /// <param name="model"></param>
        /// <returns>Returns user name, surname and JWT token with expiration time</returns>
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

        /// <summary>
        /// Creates new user.
        /// </summary>
        /// <param name="model"></param>
        /// <returns>Returns status code and message</returns>
        /// <response code="200">New user added</response>
        /// <response code="409">User already exists!</response>
        /// <response code="400">User creation failed!</response>
        [HttpPost]
        [Route("register")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status409Conflict)]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            var userExists = await userManager.FindByNameAsync(model.Email);
            if (userExists != null)
                return StatusCode(StatusCodes.Status409Conflict, new Response { Status = "Error", Message = "User already exists!" });

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
                return StatusCode(StatusCodes.Status400BadRequest, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });

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

        /// <summary>
        /// Updates user deatils.
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("UpdateUserDetails")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<UpdateUserDetails>> UpdateUserDetails([FromBody] UpdateUserDetails model)
        {
            var userExists = await userManager.GetUserAsync(HttpContext.User);
            if (userExists == null)
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error", Message = "User does not exsist!" });

            // If we have a first name...
            if (model.Name == null)
            {
                model.Name = userExists.Name;
            }
            else
            {
                userExists.Name = model.Name;
            }

            if (model.Surname == null)
            {
                model.Surname = userExists.Surname;
            }
            else
            {
                userExists.Surname = model.Surname;
            }

            if (model.Email != null && !string.Equals(model.Email.Replace(" ", ""), userExists.NormalizedEmail))
            {
                userExists.Email = model.Email;   
            }
            else
            {
                model.Email = userExists.Email;
            }

            if (model.PhoneNumber == null)
            {
                model.PhoneNumber = userExists.PhoneNumber;
            }
            else
            {
                userExists.PhoneNumber = model.PhoneNumber;
            }

            if (model.Address == null)
            {
                model.Address = userExists.Address;
            }
            else
            {
                userExists.Address = model.Address;
            }
            if (model.City == null)
            {
                model.City = userExists.City;
            }
            else
            {
                userExists.City = model.City;
            }

            if (model.PostalCode == null)
            {
                model.PostalCode = userExists.PostalCode;
            }
            else
            {
                userExists.PostalCode = model.PostalCode;
            }


            // Attempt to commit changes to data store
            var result = await userManager.UpdateAsync(userExists);

            // If successful, send out email verification
            if (result.Succeeded)
            {
                // Send email verification
                return Ok(new Response { Status = "Success", Message = "User details updated!" });
            }
            else
            {
                return StatusCode(StatusCodes.Status400BadRequest, new Response { Status = "Error", Message = "Something went wrong! Check your data." });
            }

        }

        /// <summary>
        /// Updates user password.
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("UpdateUserPassword")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<UpdateUserPassword>> UpdateUserPassword([FromBody] UpdateUserPassword model)
        {
            var userExists = await userManager.GetUserAsync(HttpContext.User);

            if (userExists == null)
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error", Message = "User does not exsist!" });


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
                return StatusCode(StatusCodes.Status400BadRequest, new Response { Status = "Error", Message = "Something went wrong! Check your data." });
            }

        }
        [HttpPost]
        [Route("SearchUsers")]
        public async Task<ActionResult<SearchUser>> SearchUsers([FromBody] SearchUser model)
        {

            var userExists = await userManager.GetUserAsync(HttpContext.User);
            if (userExists == null)
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error", Message = "User does not exsist!" });

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
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error", Message = "Data not found!" });

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
                        PostalCode = u.PostalCode,

                    }));
                }
            }

            return Ok(results);
        }

        /// <summary>
        /// Gets user details.
        /// </summary>
        /// <returns>Returns user details</returns>
        [HttpGet]
        [Route("Profile/ProfileDetails")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetProfileDetails()
        {
            var userExists = await userManager.GetUserAsync(HttpContext.User);
            if (userExists == null)
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error", Message = "User not found!" });

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


