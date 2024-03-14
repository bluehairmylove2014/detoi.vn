namespace DeToiServerCore.Common.Constants
{
    public static class GlobalConstant
    {
        public const string Customer = "Customer";
        public const string Freelancer = "Freelancer";
        public const string Admin = "Admin";

        public static readonly List<string> Roles =
        [
            Customer,
            Freelancer,
            Admin
        ];

        public const string CustomerAvtMale = "https://detoivn.sirv.com/customer_avt/user-avt%20(2).png";
        public const int InMeters = 1000;
        public const int InKilometers = 1;

        public static class Payment
        {
            public static readonly string CoD = "CoD";
        }
    }

    public static class StatusConst
    {
        public static Guid Waiting = Guid.Parse("8a9f22f1-3c67-49f7-bd84-ec290e4a37fd");
        public static Guid OnMoving = Guid.Parse("0815e9cf-98c7-4a6a-b27b-43d9b8d1f5a2");
        public static Guid OnDoingService = Guid.Parse("3f98b502-7245-4e86-b7b4-7db05357a1f8");
        public static Guid Completed = Guid.Parse("a7d1f0e8-2a6f-4b9d-aa1c-10f58a1d5d32");
    }

    public static class CustomerRankConst
    {
        public const string Unranked = "Unranked";
        public const string Bronze = "Bronze";

        public static readonly List<string> Ranks = [
            Bronze
        ];
    }

    public static class DiscountTypeConst
    {
        public const string Direct = "Direct";
        public const string Percentage = "Percentage";

        public static readonly List<string> Types = [
            Direct,
            Percentage
        ];
    }

    public static class LoginProviders
    {
        public const string Google = "GOOGLE";
        public const string Facebook = "FACEBOOK";
    }
}
