using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace covid_monitor_api.Models
{
    public class DailyInformationFormContext : DbContext
    {
        public DailyInformationFormContext(DbContextOptions<DailyInformationFormContext> options)
            : base(options)
        {
        }

        public DbSet<DailyInformationForm> DailyInformations { get; set; }
    }
}
