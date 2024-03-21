using DeToiServerCore.Models.SevicesUIElement;
using Microsoft.EntityFrameworkCore;

namespace DeToiServerData.Repositories.UIElementServiceRequirementRepo
{
    public class UIElementServiceRequirementRepo(DataContext context) 
        : RepositoryBase<UIElementServiceRequirement>(context), IUIElementServiceRequirementRepo
    {
        private readonly DataContext _context = context;

        public async Task<IEnumerable<UIElementServiceRequirement>> GetAllWithDetail()
        {
            var query = _context.UIElementServiceRequirements.AsSplitQuery(); // perfomance
            return await query
                .Include(fl => fl.InputMethod)
                .Include(fl => fl.InputMethod.Validation)
                .Include(fl => fl.InputMethod.Method)
                .Include(fl => fl.InputMethod.Method.Options)
                .ToListAsync();
        }
    }

    public class UIElementAdditionServiceRequirementRepo(DataContext context) 
        : RepositoryBase<UIElementAdditionServiceRequirement>(context), IUIElementAdditionServiceRequirementRepo
    {
        private readonly DataContext _context = context;

        public async Task<IEnumerable<UIElementAdditionServiceRequirement>> GetAllWithDetailByServiceTypeId()
        {
            await Task.Delay(10);

            return new List<UIElementAdditionServiceRequirement>();
        }
    }
}
