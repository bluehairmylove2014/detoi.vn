using DeToiServerData.Repositories;
using DeToiServerData.Repositories.AccountCustomerRepo;
using DeToiServerData.Repositories.AccountFreelanceRepo;
using DeToiServerData.Repositories.AddressRepo;
using DeToiServerData.Repositories.FreelanceQuizRepo;
using DeToiServerData.Repositories.FreelancerQuizRepo;
using DeToiServerData.Repositories.OrderRepo;
using DeToiServerData.Repositories.PromotionRepo;
using DeToiServerData.Repositories.ServiceCategoryRepo;
using DeToiServerData.Repositories.ServiceRepo;
using DeToiServerData.Repositories.ServiceStatusRepo;
using DeToiServerData.Repositories.ServiceTypeRepo;
using DeToiServerData.Repositories.UIElementServiceRequirementRepo;
using DeToiServerData.Repositories.UserRepo;
using System.Transactions;

namespace DeToiServerData
{
    public class UnitOfWork
    {
        readonly DataContext _dataContext;
        public UnitOfWork(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        #region Account
        private IAccountRepo _accountRepo;
        public IAccountRepo AccountRepo
        {
            get
            {
                _accountRepo ??= new AccountRepo(_dataContext);
                return _accountRepo;
            }
        }
        #endregion

        #region CustomerAccount
        private ICustomerAccountRepo _customerAccountRepo;
        public ICustomerAccountRepo CustomerAccountRepo
        {
            get
            {
                _customerAccountRepo ??= new CustomerAccountRepo(_dataContext);
                return _customerAccountRepo;
            }
        }
        #endregion

        #region FreelanceAccount
        private IFreelanceAccountRepo _freelanceAccountRepo;
        public IFreelanceAccountRepo FreelanceAccountRepo
        {
            get
            {
                _freelanceAccountRepo ??= new FreelanceAccountRepo(_dataContext);
                return _freelanceAccountRepo;
            }
        }
        #endregion

        #region User
        private IUserRepo _userRepo;
        public IUserRepo UserRepo
        {
            get
            {
                _userRepo ??= new UserRepo(_dataContext);
                return _userRepo;
            }
        }
        #endregion

        #region Service
        private IServiceTypeRepo _serviceTypeRepo;
        public IServiceTypeRepo ServiceTypeRepo
        {
            get
            {
                _serviceTypeRepo ??= new ServiceTypeRepo(_dataContext);
                return _serviceTypeRepo;
            }
        }
        #endregion

        #region ServiceCategory
        private IServiceCategoryRepo _serviceCategoryRepo;
        public IServiceCategoryRepo ServiceCategoryRepo
        {
            get
            {
                _serviceCategoryRepo ??= new ServiceCategoryRepo(_dataContext);
                return _serviceCategoryRepo;
            }
        }
        #endregion

        #region Promotion
        private IPromotionRepo _promotionRepo;
        public IPromotionRepo PromotionRepo
        {
            get
            {
                _promotionRepo ??= new PromotionRepo(_dataContext);
                return _promotionRepo;
            }
        }
        #endregion

        #region Order
        private IOrderRepo _orderRepo;
        public IOrderRepo OrderRepo
        {
            get
            {
                _orderRepo ??= new OrderRepo(_dataContext);
                return _orderRepo;
            }
        }
        #endregion

        #region Service Repo
        private IServiceRepo _serviceRepo;
        public IServiceRepo ServiceRepo
        {
            get
            {
                _serviceRepo ??= new ServiceRepo(_dataContext);
                return _serviceRepo;
            }
        }
        #endregion

        #region UI Element Repo
        private IUIElementServiceRequirementRepo _uIElementServiceRequirementRepo;
        public IUIElementServiceRequirementRepo UIElementServiceRequirementRepo
        {
            get
            {
                _uIElementServiceRequirementRepo ??= new UIElementServiceRequirementRepo(_dataContext);
                return _uIElementServiceRequirementRepo;
            }
        }

        private IUIElementAdditionServiceRequirementRepo _uIElementAdditionServiceRequirementRepo;
        public IUIElementAdditionServiceRequirementRepo UIElementAdditionServiceRequirementRepo
        {
            get
            {
                _uIElementAdditionServiceRequirementRepo ??= new UIElementAdditionServiceRequirementRepo(_dataContext);
                return _uIElementAdditionServiceRequirementRepo;
            }
        }
        #endregion

        #region Service Proven Repo
        private IServiceProvenRepo _serviceProvenRepo;
        public IServiceProvenRepo ServiceProvenRepo
        {
            get
            {
                _serviceProvenRepo ??= new ServiceProvenRepo(_dataContext);
                return _serviceProvenRepo;
            }
        }
        #endregion

        #region Address Repo
        private IAddressRepo _addressRepo;
        public IAddressRepo AddressRepo
        {
            get
            {
                _addressRepo ??= new AddressRepo(_dataContext);
                return _addressRepo;
            }
        }
        #endregion

        #region Favorite Repo
        private IFavoriteRepo _favoriteRepo;
        public IFavoriteRepo FavoriteRepo
        {
            get
            {
                _favoriteRepo ??= new FavoriteRepo(_dataContext);
                return _favoriteRepo;
            }
        }
        #endregion

        #region Service Status Repo
        private IServiceStatusRepo _serviceStatusRepo;
        public IServiceStatusRepo ServiceStatusRepo
        {
            get
            {
                _serviceStatusRepo ??= new ServiceStatusRepo(_dataContext);
                return _serviceStatusRepo;
            }
        }
        #endregion

        #region Freelance Quiz Repo
        private IFreelanceQuizRepo _freelanceQuizRepo;
        public IFreelanceQuizRepo FreelanceQuizRepo
        {
            get
            {
                _freelanceQuizRepo ??= new FreelanceQuizRepo(_dataContext);
                return _freelanceQuizRepo;
            }
        }
        #endregion


        public async Task<bool> SaveChangesAsync()
        {
            using var scope = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled);
            try
            {
                var result = await _dataContext.SaveChangesAsync();
                scope.Complete();
                return result > 0;
            }
            catch (Exception)
            {
                scope.Dispose();
                return false;
            }
        }

        public List<string> SaveChanges()
        {
            var errors = new List<string>();
            try
            {
                _dataContext.SaveChanges();
                return errors;
            }
            catch (Exception ex)
            {
                var currentEx = ex;
                do
                {
                    errors.Add(currentEx.Message);
                    if (currentEx.InnerException == null)
                        break;
                    currentEx = currentEx.InnerException;
                } while (true);
                return errors;
            }
        }
    }
}
