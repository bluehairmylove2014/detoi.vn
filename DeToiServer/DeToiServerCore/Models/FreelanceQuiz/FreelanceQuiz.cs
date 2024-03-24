using DeToiServerCore.Common.Constants;
using DeToiServerCore.Models.Accounts;

namespace DeToiServerCore.Models.FreelanceQuiz
{
    public class FreelanceQuizAnswer : ModelBase // Trả lời
    {
        public string Answer { get; set; } = string.Empty;
        public bool IsCorrect { get; set; } = true;
        public required Guid QuestionId { get; set; }
        public required FreelanceQuizQuestion Question { get; set; }
    }

    public class FreelanceQuizQuestion : ModelBase // Câu hỏi
    {
        public required string Type { get; set; } = GlobalConstant.Quiz.QuestionType.SingleChoice;
        public required string OfSkills { get; set; } = string.Empty;
        public required string Question { get; set; } = string.Empty;
        public int Point { get; set; } = 1;
        public required ICollection<FreelanceQuizAnswer> Answers { get; set; }
        public required ICollection<QuizQuestion> QuizQuestions { get; set; }

        public ICollection<FreelanceCorrectQuestion>? FreelanceCorrectQuestions { get; set; }
    }

    public class QuizQuestion
    {
        public required Guid QuizId { get; set; }
        public required FreelanceQuiz Quiz { get; set; }

        public required Guid QuestionId { get; set; }
        public required FreelanceQuizQuestion Question { get; set; }
    }

    public class FreelanceQuiz : ModelBase // Bộ đề
    {
        public int TotalTime { get; set; }
        public int TotalQuestion { get; set; }
        public required ICollection<QuizQuestion> QuizQuestions { get; set; }
    }

    public class FreelanceCorrectQuestion // Chi tiết kết quả kiểm tra
    {
        public required Guid ResultId { get; set; }
        public required FreelanceQuizResult Result { get; set; }

        public required Guid QuestionId { get; set; }
        public required FreelanceQuizQuestion Question { get; set; }
    }

    public class FreelanceQuizResult : ModelBase // Kết quả kiểm tra
    {
        public DateTime CompletedAt { get; set; }
        public int TotalCorrect { get; set; }
        public required ICollection<FreelanceCorrectQuestion> CorrectQuestions { get; set; }

        public required Guid FreelanceId { get; set; }
        public required FreelanceAccount Freelance { get; set; }
    }
}
