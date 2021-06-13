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


        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DailyInformationForm>>> GetAllDailyForms()
        {
            return await _context.DailyInformationForm.ToListAsync();
        }


        
        [Authorize]
        [HttpPost]
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
                ChestPain = model.ChestPain
            };
            _context.DailyInformationForm.Add(form);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetHealthInformationOverview", new { id = HealthInformationOverview.Id }, HealthInformationOverview);
            return CreatedAtAction(nameof(GetAllDailyForms), new { id = form.Id }, form);
        }


        [HttpGet]
        [Route("GetCurrentUserDailyForm")]
        public async Task<ActionResult<HealthInformationOverview>> GetHio()
        {
            var userExists = await userManager.GetUserAsync(HttpContext.User);
            var OwnerId = userExists.Id;
            var hio = _context.DailyInformationForm.Where (p => p.OwnerId == OwnerId);

            if (hio == null)
            {
                return NotFound();
            }

            return Ok(hio);
        }


        private bool HealthInformationOverviewExists(long id)
        {
            return _context.DailyInformationForm.Any(e => e.Id == id);
        }
    }
}