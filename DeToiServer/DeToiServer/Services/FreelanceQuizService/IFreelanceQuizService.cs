using DeToiServer.Dtos.QuizDtos;

namespace DeToiServer.Services.FreelanceQuizService
{
    public interface IFreelanceQuizService
    {
        Task<IEnumerable<GetPreDefinedQuizDto>> GetAllPreDefinedQuiz();
        Task<IEnumerable<FreelanceQuizResultDto>> GetAllQuizResult();
    }
}
