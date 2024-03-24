using AutoMapper;
using DeToiServer.Dtos.QuizDtos;

namespace DeToiServer.Services.FreelanceQuizService
{
    public class FreelanceQuizService : IFreelanceQuizService
    {
        private readonly UnitOfWork _uow;
        private readonly IMapper _mapper;

        public FreelanceQuizService(UnitOfWork uow, IMapper mapper)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public async Task<IEnumerable<GetPreDefinedQuizDto>>  GetAllPreDefinedQuiz()
        {
            return _mapper.Map<IEnumerable<GetPreDefinedQuizDto>>(await _uow.FreelanceQuizRepo.GetPreDefinedQuizzesAsync());
        }

        public async Task<IEnumerable<FreelanceQuizResultDto>> GetAllQuizResult()
        {
            return _mapper.Map<IEnumerable<FreelanceQuizResultDto>>(await _uow.FreelanceQuizRepo.GetAllQuizResultAsync());
        }
    }
}
