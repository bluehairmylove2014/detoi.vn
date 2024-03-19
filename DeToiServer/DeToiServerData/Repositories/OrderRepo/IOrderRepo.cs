using DeToiServerCore.Models;

namespace DeToiServerData.Repositories.OrderRepo
{
    public interface IOrderRepo : IRepository<Order>
    {
        Task<IEnumerable<Order>> GetAllOrderWithDetailAsync();
        Task<Order> GetOrderDetailByIdAsync(Guid id);
        Task<IEnumerable<Order>> GetCustomerOrders(Guid customerId);
        Task<IEnumerable<Order>> GetFreelancerSuitableOrders(Guid freelancerId);
        Task<Order> GetLatestCustomerOrders(Guid customerId);
    }
}
