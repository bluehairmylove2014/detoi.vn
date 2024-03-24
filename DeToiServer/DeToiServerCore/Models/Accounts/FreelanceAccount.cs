using DeToiServerCore.Models.FreelanceQuiz;
using DeToiServerCore.Models.Services;

namespace DeToiServerCore.Models.Accounts
{
    public class FreelanceAccount : ModelBase
    {
        public required Account Account { get; set; }
        public required Guid AccountId { get; set; }
        public double Rating { get; set; }
        public double Balance { get; set; }
        public int OrderCount { get; set; }
        public int LoveCount { get; set; }
        public int PositiveReviewCount { get; set; }
        public int TotalReviewCount { get; set; }
        public ICollection<Address>? Address { get; set; }
        public string IdentityNumber { get; set; } = string.Empty;
        public bool IsTeam { get; set; } = false;
        public string Description { get; set; } = string.Empty;
        public int TeamMemberCount { get; set; } = 1;
        public ICollection<FreelanceSkill>? FreelanceSkills { get; set; }
        public ICollection<Order>? Orders { get; set; }
        public ICollection<ServiceProven>? ServiceProven { get; set; }
        public ICollection<Favorite>? FavoriteBy { get; set; }
        public ICollection<FreelanceQuizResult>? QuizHistory { get; set; }
    }
}
