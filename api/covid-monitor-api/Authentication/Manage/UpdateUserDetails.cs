using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace covid_monitor_api.Authentication.Manage
{
    public class UpdateUserDetails
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }

        public string Address { get; set; }
        public string City { get; set; }
        public string PostalCode { get; set; }
    }
}
