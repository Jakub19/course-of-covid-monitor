using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace covid_monitor_api.Models
{
    public class DailyInformationForm
    {
        public int Id { get; set; }
        public string OwnerId { get; set; }
        [Required]
        public int Temperature { get; set; }
        [Required]
        public string BloodPressure { get; set; }
        [Required]
        [Range(1, 100, ErrorMessage = "Saturation level invalid (1-100).")]
        public int Saturation { get; set; }
        [Required]
        public int Pulse { get; set; }
        [Required]
        [Range(1, 5, ErrorMessage = "Headache level invalid (1-5).")]
        public int Headache { get; set; }
        [Required]
        public Boolean RunningNose { get; set; }
        [Required]
        [Range(1, 5, ErrorMessage = "Muscle Pain level invalid (1-5).")]
        public int MusclePain { get; set; }
        [Required]
        public Boolean DryCough { get; set; }
        [Required]
        [Range(1, 5, ErrorMessage = "Fatigue level invalid (1-5).")]
        public int Fatigue { get; set; }
        [Required]
        public Boolean LossOfTaste { get; set; }
        [Required]
        [Range(1, 5, ErrorMessage = "Difficult Breathing level invalid (1-5).")]
        public int DiffBreathing { get; set; }
        [Required]
        [Range(1, 5, ErrorMessage = "Chest Pain level invalid (1-5).")]
        public int ChestPain { get; set; }

    }
}
