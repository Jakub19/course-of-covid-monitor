using System;

namespace covid_monitor_api.Models
{
    public class HealthInformationOverview
    {
        public int Id { get; set; }

        public string OwnerId { get; set; }
        public DateTime CovidPositiveSince { get; set; }

        public DateTime BirthDate { get; set; }

        public string Gender { get; set; }

        public float Height { get; set; }
        public float Weight { get; set; }

        public string BloodType { get; set; }
        public Boolean IsNotifOn { get; set; }


    }
}
