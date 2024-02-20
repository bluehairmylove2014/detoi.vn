using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DeToiServerCore.Models.Accounts
{
    public class Address : ModelBase
    {
        public required CustomerAccount CustomerAccount { get; set; }
        public required int CustomerAccountId { get; set; }
        public string AddressLine { get; set; } = string.Empty; // thêm lat lon

            //ward: string;
            //district: string;
            //province: string;
            //country: string;
    }
}
