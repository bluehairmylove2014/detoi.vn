using DeToiServer.Models;
using DeToiServerCore.Models;
using DeToiServerCore.Models.Accounts;
using DeToiServerCore.Models.Payment;
using DeToiServerCore.Models.Services;
using DeToiServerCore.Models.SevicesUIElement;
using DeToiServerData.Configurations;
using Microsoft.EntityFrameworkCore;

namespace DeToiServerData
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Account
            modelBuilder.ApplyConfiguration(new AccountConfiguration());
            modelBuilder.ApplyConfiguration(new FreelanceConfiguration());
            modelBuilder.ApplyConfiguration(new AddressConfiguration());

            modelBuilder.ApplyConfiguration(new FavoriteConfiguration());
            modelBuilder.ApplyConfiguration(new PaymentConfiguration());
            modelBuilder.ApplyConfiguration(new FreelancerSkillConfiguration());

            // Service
            modelBuilder.ApplyConfiguration(new ServiceConfiguration());
            modelBuilder.ApplyConfiguration(new ServiceTypeConfiguration());
            modelBuilder.ApplyConfiguration(new ServiceCategoryConfiguration());
            modelBuilder.ApplyConfiguration(new ServiceStatusConfiguration());
            modelBuilder.ApplyConfiguration(new OrderConfiguration());
            modelBuilder.ApplyConfiguration(new OrderServiceConfiguration());

            modelBuilder.ApplyConfiguration(new OrderServiceTypeConfiguration());

            // Blogs
            modelBuilder.ApplyConfiguration(new TermOfServiceConfiguration());
            modelBuilder.ApplyConfiguration(new FrequentlyAskedQuestionConfiguration());
            modelBuilder.ApplyConfiguration(new BlogPostConfiguration());

            // Promotion
            modelBuilder.ApplyConfiguration(new PromotionConfiguration());
            modelBuilder.ApplyConfiguration(new CustomerPromotionConfiguration());

            #region UI_Element_Config
            modelBuilder.ApplyConfiguration(new UIElementInputMethodTypeConfiguration());
            modelBuilder.ApplyConfiguration(new UIElementInputOptionConfiguration());
            modelBuilder.ApplyConfiguration(new UIElementServiceRequirementInputMethodConfiguration());
            modelBuilder.ApplyConfiguration(new UIElementValidationTypeConfiguration());
            modelBuilder.ApplyConfiguration(new UIElementServiceRequirementConfiguration());
            modelBuilder.ApplyConfiguration(new UIElementAdditionServiceRequirementConfiguration());
            #endregion

            #region Realtime config
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            #endregion
        }

        // Account related models
        public DbSet<Account> Accounts { get; set; }
        public DbSet<FreelanceAccount> Freelancers { get; set; }
        public DbSet<CustomerAccount> Customers { get; set; }
        public DbSet<Skill> Skills { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public DbSet<PaymentHistory> PaymentHistories { get; set; }

        // Service related models
        public DbSet<Order> Orders { get; set; }
        public DbSet<ServiceStatus> ServiceStatuses { get; set; }
        public DbSet<Service> Services { get; set; }
        public DbSet<ServiceType> ServiceTypes { get; set; }
        public DbSet<ServiceCategory> ServiceCategories { get; set; }

        #region Service_UI_Element
        public DbSet<UIElementValidationType> UIElementValidationTypes { get; set; }
        public DbSet<UIElementInputOption> UIElementInputOptions { get; set; }
        public DbSet<UIElementInputMethodType> UIElementInputMethodTypes { get; set; }
        public DbSet<UIElementServiceRequirementInputMethod> UIElementServiceRequirementInputMethods { get; set; }
        public DbSet<UIElementServiceRequirement> UIElementServiceRequirements { get; set; }
        public DbSet<UIElementAdditionServiceRequirement> UIElementAdditionServiceRequirements { get; set; }
        #endregion

        #region Content_related_models
        public DbSet<TermOfService> TermOfServices { get; set; }
        public DbSet<BlogPost> BlogPosts { get; set; }
        public DbSet<FrequentlyAskedQuestion> FrequentlyAskedQuestions { get; set; }
        #endregion

        #region Promotion_models
        public DbSet<Promotion> Promotions { get; set; }
        public DbSet<CustomerPromotion> CustomerPromotions { get; set; }
        #endregion

        #region Realtime
        public DbSet<User> Users { get; set; }
        public DbSet<Connection> Connections { get; set; }
        #endregion
    }
}