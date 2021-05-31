using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace covid_monitor_api.Authentication.Manage
{
    public class UpdateUserPassword
    {
        public string CurrentPassword { get; set; }


        public string NewPassword { get; set; }
    }
}
