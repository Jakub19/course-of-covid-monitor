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

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace covid_monitor_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DailyInformationFormController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        private readonly UserManager<ApplicationUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly IConfiguration _configuration;


        public DailyInformationFormController(ApplicationDbContext context, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration)
        {
            _context = context;
            this.userManager = userManager;
            this.roleManager = roleManager;
            _configuration = configuration;
        }


        /// <summary>
        /// Gets forms of all users.
        /// </summary>
        /// <returns>Returns all forms from database</returns>
        [HttpGet]
        [Produces("application/json")]
        public async Task<ActionResult<IEnumerable<DailyInformationForm>>> GetAllDailyForms()
        {
            return await _context.DailyInformationForm.ToListAsync();
        }

        /// <summary>
        /// Adds new form to database.
        /// </summary>
        /// <remarks>
        /// Sample request:
        /// 
        ///     POST /api/DailyInformationForm
        ///     {
        ///         "temperature": 36.6,
        ///         "bloodPressure": "130",
        ///         "saturation": 100,
        ///         "pulse": 75,
        ///         "headache": 2,
        ///         "runningNose": 0,
        ///         "musclePain": 2,
        ///         "dryCough": 1,
        ///         "fatigue": 3,
        ///         "lossOfTaste": 1,
        ///         "diffBreathing": 2,
        ///         "chestPain": 0
        ///     }
        /// </remarks>
        /// <param name="model"></param>
        /// <returns>Returns the newly created form.</returns>
        /// <response code="200">Created. Returns the newly created form.</response>
        [Authorize]
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [Produces("application/json")]
        public async Task<ActionResult<DailyInformationForm>> PostDailyForm([FromBody] DailyInformationForm model)
        {

            DailyInformationForm form = new DailyInformationForm()
            {
                OwnerId = userManager.GetUserId(User),
                Temperature = model.Temperature,
                BloodPressure = model.BloodPressure,
                Saturation = model.Saturation,
                Pulse = model.Pulse,
                Headache = model.Headache,
                RunningNose = model.RunningNose,
                MusclePain = model.MusclePain,
                DryCough = model.DryCough,
                Fatigue = model.Fatigue,
                LossOfTaste = model.LossOfTaste,
                DiffBreathing = model.DiffBreathing,
                ChestPain = model.ChestPain,
                FilledDate = DateTime.Now
            };
            _context.DailyInformationForm.Add(form);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAllDailyForms), new { id = form.Id }, form);
        }

        /// <summary>
        /// Gets forms for specific user.
        /// </summary>
        /// <returns>Returns specific user forms</returns>
        /// <response code="200">Returns specific user forms</response>
        /// <response code="404">If user forms are not found</response>
        [HttpGet]
        [Route("GetCurrentUserDailyForm")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [Produces("application/json")]
        public async Task<ActionResult<DailyInformationForm>> GetHio()
        {
            var userExists = await userManager.GetUserAsync(HttpContext.User);
            if (userExists == null)
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error", Message = "User not exists!" });

            var OwnerId = userExists.Id;
            var dif = _context.DailyInformationForm.Where (p => p.OwnerId == OwnerId);

            if (dif == null)
            {
                return StatusCode(StatusCodes.Status404NotFound, new Response { Status = "Error", Message = "Daily information form not found for this user" });
            }

            return Ok(dif);
        }


        private bool DailyInformationFormExists(long id)
        {
            return _context.DailyInformationForm.Any(e => e.Id == id);
        }
    }
}