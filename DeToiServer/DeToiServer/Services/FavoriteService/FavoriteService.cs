using AutoMapper; // Add this using directive

namespace DeToiServer.Services.FavoriteService
{
    public class FavoriteService : IFavoriteService
    {
        private readonly UnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public FavoriteService(UnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }


        public async Task<Favorite> AddFavorite(Guid customerId, Guid freelanceId)
        {
            var favorite = new Favorite
            {
                CustomerId = customerId,
                FreelancerId = freelanceId
            };

            var added = await _unitOfWork.FavoriteRepo.CreateAsync(favorite);
            await _unitOfWork.SaveChangesAsync();

            return added;
        }
    }
}