namespace DeToiServer.Services.FavoriteService
{
    public interface IFavoriteService
    {
        Task<Favorite> AddFavorite(Guid customerId, Guid freelanceId);
    }
}