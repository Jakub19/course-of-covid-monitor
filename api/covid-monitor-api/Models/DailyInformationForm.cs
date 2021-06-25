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
        public float Temperature { get; set; }
        [Required]
        public string BloodPressure { get; set; }
        [Required]
        [Range(1, 100, ErrorMessage = "Saturation level invalid (1-100).")]
        public int Saturation { get; set; }
        [Required]
        public int Pulse { get; set; }
        [Required]
        [Range(1, 3, ErrorMessage = "Headache level invalid (1-3).")]
        public int Headache { get; set; }
        [Required]
        [Range(1, 3, ErrorMessage = "Running Nose level invalid (1-3).")]
        public int RunningNose { get; set; }
        [Required]
        [Range(1, 3, ErrorMessage = "Muscle Pain level invalid (1-3).")]
        public int MusclePain { get; set; }
        [Required]
        [Range(1, 3, ErrorMessage = "Dry Cough level invalid (1-3).")]
        public int DryCough { get; set; }
        [Required]
        [Range(1, 3, ErrorMessage = "Fatigue level invalid (1-3).")]
        public int Fatigue { get; set; }
        [Required]
        [Range(1, 3, ErrorMessage = "Loss Of Taste level invalid (1-3).")]
        public int LossOfTaste { get; set; }
        [Required]
        [Range(1, 3, ErrorMessage = "Difficult Breathing level invalid (1-3).")]
        public int DiffBreathing { get; set; }
        [Required]
        [Range(1, 3, ErrorMessage = "Chest Pain level invalid (1-3).")]
        public int ChestPain { get; set; }
        public DateTime FilledDate { get; set; }

    }
}
