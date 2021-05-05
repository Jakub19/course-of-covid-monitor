using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace covid_monitor_api.Models
{
    public class HealthInformationOverviewContext : DbContext
    {
        public HealthInformationOverviewContext(DbContextOptions<HealthInformationOverviewContext> options)
            : base(options)
        {
        }

        public DbSet<HealthInformationOverview> HealthInformationOverview { get; set; }
    }
}
