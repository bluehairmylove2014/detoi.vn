using DeToiServerCore.Models.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DeToiServerData.Repositories.ServiceRepo
{
    public interface IServiceRepo : IRepository<Service>
    {
        Task<IEnumerable<Service>> AddMultipleAsync(IEnumerable<Service> services);
    }
}
