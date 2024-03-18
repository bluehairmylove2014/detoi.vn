using DeToiServerCore.Models;
using DeToiServerData.Repositories.OrderRepo;

namespace DeToiServerData.Repositories.PromotionRepo
{
    public class FavoriteRepo : RepositoryBase<Favorite>, IFavoriteRepo
    {
        private readonly DataContext _context;

        public FavoriteRepo(DataContext context) : base(context)
        {
            _context = context;
        }
    }
}