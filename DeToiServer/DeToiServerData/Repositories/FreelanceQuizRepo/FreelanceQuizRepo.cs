using DeToiServerCore.Models.FreelanceQuiz;
using DeToiServerData.Repositories.FreelancerQuizRepo;
using Microsoft.EntityFrameworkCore;

namespace DeToiServerData.Repositories.FreelanceQuizRepo
{
    public class FreelanceQuizRepo(DataContext context)
        : RepositoryBase<FreelanceQuiz>(context), IFreelanceQuizRepo
    {
        private readonly DataContext _context = context;

        public async Task<IEnumerable<FreelanceQuiz>> GetPreDefinedQuizzesAsync()
        {
            var query = _context.FreelanceQuizzes.AsSplitQuery().AsNoTracking();
            return await query
                .Include(fq => fq.QuizQuestions)
                    .ThenInclude(qq => qq.Question)
                        .ThenInclude(qz => qz.Answers)
                .ToListAsync();
        }

        public async Task<IEnumerable<FreelanceQuizResult>> GetAllQuizResultAsync()
        {
            var query = _context.FreelanceQuizResults.AsSplitQuery().AsNoTracking();
            return await query
                .Include(fq => fq.CorrectQuestions)
                    .ThenInclude(qq => qq.Question)
                        .ThenInclude(qz => qz.Answers)
                .ToListAsync();
        }
    }
}
