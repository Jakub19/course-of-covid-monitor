using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace covid_monitor_api.Authentication
{
    public class SearchUser
    {
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
    }
}
