using DeToiServerCore.Models.FreelanceQuiz;

namespace DeToiServerData.Repositories.FreelancerQuizRepo
{
    public interface IFreelanceQuizRepo : IRepository<FreelanceQuiz>
    {
        Task<IEnumerable<FreelanceQuiz>> GetPreDefinedQuizzesAsync();
        Task<IEnumerable<FreelanceQuizResult>> GetAllQuizResultAsync();
    }
}
