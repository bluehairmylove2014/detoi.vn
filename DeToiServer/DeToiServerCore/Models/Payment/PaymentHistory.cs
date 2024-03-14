using DeToiServerCore.Common.Constants;
using DeToiServerCore.Models.Accounts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DeToiServerCore.Models.Payment
{
    public class PaymentHistory : ModelBase
    {
        public double Value { get; set; }
        public string Method { get; set; } = GlobalConstant.Payment.CoD;
        public DateTime Timestamp { get; set; }

        public Guid? FreelanceAccountId { get; set; }
        public FreelanceAccount? FreelanceAccount { get; set; }

        //public Guid? CustomerAccountId { get; set; }
        //public CustomerAccount? CustomerAccount { get; set; }
    }
}
