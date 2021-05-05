﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using covid_monitor_api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using covid_monitor_api.Authentication;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace covid_monitor_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HealthInformationOverviewsController : ControllerBase
    {
        private readonly HealthInformationOverviewContext _context;

        private readonly UserManager<ApplicationUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly IConfiguration _configuration;


        public HealthInformationOverviewsController(HealthInformationOverviewContext context, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration)
        {
            _context = context;
            this.userManager = userManager;
            this.roleManager = roleManager;
            _configuration = configuration;
        }


        // GET: api/HealthInformationOverviews
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HealthInformationOverview>>> GetHealthInformationOverviews()
        {
            return await _context.HealthInformationOverview.ToListAsync();
        }


        // POST: api/HealthInformationOverviews
        [HttpPost]
        public async Task<ActionResult<HealthInformationOverview>> PostHealthInformationOverview(HealthInformationOverview HealthInformationOverview)
        {
            _context.HealthInformationOverview.Add(HealthInformationOverview);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetHealthInformationOverview", new { id = HealthInformationOverview.Id }, HealthInformationOverview);
            return CreatedAtAction(nameof(GetHealthInformationOverviews), new { id = HealthInformationOverview.Id }, HealthInformationOverview);
        }


        

        private bool HealthInformationOverviewExists(long id)
        {
            return _context.HealthInformationOverview.Any(e => e.Id == id);
        }
    }
}