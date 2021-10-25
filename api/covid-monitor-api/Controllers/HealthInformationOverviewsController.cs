using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using covid_monitor_api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using covid_monitor_api.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;

namespace covid_monitor_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HealthInformationOverviewsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly IConfiguration _configuration;

        public HealthInformationOverviewsController(ApplicationDbContext context, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration)
        {
            _context = context;
            this.userManager = userManager;
            this.roleManager = roleManager;
            _configuration = configuration;
        }

        /// <summary>
        /// Gets all initial forms.
        /// </summary>
        /// <returns>All initial forms.</returns>
        [Authorize]
        [HttpGet]
        [Produces("application/json")]
        public async Task<ActionResult<IEnumerable<HealthInformationOverview>>> GetAllHealthInformationOverviews()
        {
            return await _context.HealthInformationOverview.ToListAsync();
        }

        /// <summary>
        /// Adds initial form.
        /// </summary>
        /// <remarks>
        /// Sample request:
        /// 
        ///     POST /api/HealthInformationOverviews
        ///     {
        ///         "covidPositiveSince":"2021-06-30T21:00:06.817Z",
        ///         "birthDate":"1998-06-15T21:00:06.817Z",
        ///         "gender":"male",
        ///         "height":186,
        ///         "weight":85,
        ///         "bloodType":"A+",
        ///         "isNotifOn":true
        ///     }
        /// </remarks>
        /// <param name="model"></param>
        /// <returns>Returns newly added form</returns>
        [Authorize]
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status406NotAcceptable)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<HealthInformationOverview>> PostHealthInformationOverview([FromBody] HealthInformationOverview model)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            HealthInformationOverview form = new HealthInformationOverview()
            {
                OwnerId = userManager.GetUserId(User),
                CovidPositiveSince = model.CovidPositiveSince,
                BirthDate = model.BirthDate,
                Gender = model.Gender,
                Height = model.Height,
                Weight = model.Weight,
                BloodType = model.BloodType,
                IsNotifOn = model.IsNotifOn
            };
            var userExists = await userManager.GetUserAsync(HttpContext.User);
            var OwnerId = userExists.Id;
            var hio = _context.HealthInformationOverview.Any(p => p.OwnerId == OwnerId);
            if(!hio)
            {
                _context.HealthInformationOverview.Add(form);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetAllHealthInformationOverviews), new { id = form.Id }, form);
            }
            else
            {
                return StatusCode(StatusCodes.Status406NotAcceptable, new Response { Status = "Error", Message = "User already filled this form!" });
            }      
        }

        /// <summary>
        /// Updates notifications (true/false)
        /// </summary>
        /// <remarks>
        /// Sample request:
        /// 
        ///     PUT /api/HealthInformationOverviews/UpdateNotifications
        ///     {
        ///         isNotIfOn = true
        ///     }
        /// </remarks>
        /// <param name="model"></param>
        /// <returns></returns>
        [Authorize]
        [HttpPut]
        [Route("UpdateNotifications")]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<HealthInformationOverview>> UpdateNotifications([FromBody] NotificationUpdate model)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            var userExists = await userManager.GetUserAsync(HttpContext.User);
            if (userExists == null)
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error", Message = "User does not exsist!" });

            var OwnerId = userExists.Id;
            HealthInformationOverview hio = _context.HealthInformationOverview.Where(p => p.OwnerId == OwnerId).FirstOrDefault<HealthInformationOverview>();
            if (hio == null)
            {
                return NotFound();
            }
            else
            {
                hio.IsNotifOn = model.isNotIfOn;

                _context.HealthInformationOverview.Update(hio);
                await _context.SaveChangesAsync();
                return Ok(new Response { Status = "Success", Message = "Notifications updated!" });
            }
        }

        /// <summary>
        /// Gets current user initial form data.
        /// </summary>
        /// <returns>Returns user initial form data.</returns>
        [HttpGet]
        [Route("GetCurrentUserHio")]
        [Produces("application/json")]
        public async Task<ActionResult<HealthInformationOverview>> GetHio()
        {
            var userExists = await userManager.GetUserAsync(HttpContext.User);
            var OwnerId = userExists.Id;
            var hio = _context.HealthInformationOverview.Where (p => p.OwnerId == OwnerId);

            if (hio == null)
            {
                return NotFound();
            }

            return Ok(hio);
        }

        private bool HealthInformationOverviewExists(long id)
        {
            return _context.HealthInformationOverview.Any(e => e.Id == id);
        }
    }
}