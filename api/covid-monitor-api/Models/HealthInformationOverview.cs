using System;
using System.ComponentModel.DataAnnotations;

namespace covid_monitor_api.Models
{
    public class HealthInformationOverview
    {
        public int Id { get; set; }
        public string OwnerId { get; set; }
        [Required]
        public DateTime CovidPositiveSince { get; set; }
        [Required]
        public DateTime BirthDate { get; set; }
        [Required]
        public string Gender { get; set; }
        [Required]
        public int Height { get; set; }
        [Required]
        public int Weight { get; set; }
        [Required]
        public string BloodType { get; set; }
        [Required]
        public Boolean IsNotifOn { get; set; }


    }
}
