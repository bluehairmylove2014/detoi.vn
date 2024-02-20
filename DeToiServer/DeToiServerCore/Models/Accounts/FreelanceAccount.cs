namespace DeToiServerCore.Models.Accounts
{
    public class FreelanceAccount : ModelBase
    {
        public required Account Account { get; set; }
        public required int AccountId { get; set; }
        public double Rating { get; set; }
        public double Balance { get; set; }
        public string Address { get; set; } = string.Empty;

        //ward: string;
        //district: string;
        //province: string;
        //country: string;
        // orderCount tổng số đơn
        // description mô tả ngắn.
        // loveCount tổng yêu thích
        // positiveReviewCount tổng đánh giá ôk.
        public string IdentityNumber { get; set; } = string.Empty;
        public bool IsTeam { get; set; } = false;
        public ICollection<Skill>? Skills { get; set; }
        public ICollection<Order>? Orders { get; set; }
    }
}
