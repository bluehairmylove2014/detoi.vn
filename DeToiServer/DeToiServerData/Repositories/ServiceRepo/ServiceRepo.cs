using DeToiServerCore.Models.Services;

namespace DeToiServerData.Repositories.ServiceRepo
{
    public class ServiceRepo(DataContext context)
        : RepositoryBase<Service>(context), IServiceRepo
    {
        private readonly DataContext _context = context;

        public async Task<IEnumerable<Service>> AddMultipleAsync(IEnumerable<Service> services)
        {
            await _context.Services.AddRangeAsync(services);

            return services;
        }
    }
}
