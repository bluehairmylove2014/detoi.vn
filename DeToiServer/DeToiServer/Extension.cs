using DeToiServer.Services.AccountService;
using DeToiServer.Services.CustomerAccountService;
using DeToiServer.Services.FavoriteService;
using DeToiServer.Services.FreelanceAccountService;
using DeToiServer.Services.FreelanceQuizService;
using DeToiServer.Services.MessageQueueService;
using DeToiServer.Services.OrderManagementService;
using DeToiServer.Services.ServiceCategoryService;
using DeToiServer.Services.ServiceProvenService;
using DeToiServer.Services.ServiceStatusService;
using DeToiServer.Services.ServiceTypeService;
using DeToiServer.Services.UIElementService;
using DeToiServer.Services.UserService;
using DeToiServerCore.Common.Constants;
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
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;
using System.Text;

namespace DeToiServerData
{
    public static class Extension
    {
        public static void AddCustomSwagger(this IServiceCollection services)
        {
            services.AddSwaggerGen(options =>
            {
                options.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
                {
                    Description = "Standard Authorization header using the Bearer scheme (\"bearer {token}\")",
                    In = ParameterLocation.Header,
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey
                });

                options.OperationFilter<SecurityRequirementsOperationFilter>();
            });
        }

        public static void AddJwtBearerAuthentication(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8
                            .GetBytes(configuration.GetSection("AppSettings:Token").Value!)),
                        ValidateIssuer = false,
                        ValidateAudience = false
                    };
                });
        }

        public static IServiceCollection AddUnitOfWork(this IServiceCollection services, Action<DbContextOptionsBuilder> optionsAction)
        {
            services.AddDbContext<DataContext>(optionsAction);
            services.AddScoped<IAccountRepo, AccountRepo>();
            services.AddScoped<ICustomerAccountRepo, CustomerAccountRepo>();
            services.AddScoped<IFreelanceAccountRepo, FreelanceAccountRepo>();
            services.AddScoped<IServiceTypeRepo, ServiceTypeRepo>();
            services.AddScoped<IServiceStatusRepo, ServiceStatusRepo>();
            services.AddScoped<IServiceCategoryRepo, ServiceCategoryRepo>();
            services.AddScoped<IServiceProvenRepo, ServiceProvenRepo>();
            services.AddScoped<IPromotionRepo, PromotionRepo>();
            services.AddScoped<IOrderRepo, OrderRepo>();
            services.AddScoped<IServiceRepo, ServiceRepo>();
            services.AddScoped<IUserRepo, UserRepo>();
            services.AddScoped<IFavoriteRepo, FavoriteRepo>();

            services.AddScoped<IUIElementServiceRequirementRepo, UIElementServiceRequirementRepo>();
            services.AddScoped<IUIElementAdditionServiceRequirementRepo, UIElementAdditionServiceRequirementRepo>();

            services.AddScoped<IFreelanceQuizRepo, FreelanceQuizRepo>();

            services.AddScoped<IAddressRepo, AddressRepo>();


            services.AddScoped<UnitOfWork>();
            return services;
        }

        public static IServiceCollection AddServicesData(this IServiceCollection services)
        {
            services.AddScoped<IAccountService, AccountService>();
            services.AddScoped<IFreelanceAccountService, FreelanceAccountService>();
            services.AddScoped<ICustomerAccountService, CustomerAccountService>();
            services.AddScoped<IServiceTypeService, ServiceTypeService>();
            services.AddScoped<IServiceStatusService, ServiceStatusService>();
            services.AddScoped<IServiceCategoryService, ServiceCategoryService>();
            services.AddScoped<IServiceProvenService, ServiceProvenService>();
            services.AddScoped<IOrderManagementService, OrderManagementService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IMessageQueueService, MessageQueueService>();
            services.AddScoped<IFavoriteService, FavoriteService>();
            services.AddScoped<IUIElementServiceRequirementService, UIElementServiceRequirementService>();
            services.AddScoped<IFreelanceQuizService, FreelanceQuizService>();
            return services;
        }

        public static void ApplyDatabaseMigrations(this IApplicationBuilder app, IWebHostEnvironment env)
        {
            var filePath = Path.Combine(env.ContentRootPath, GlobalConstant.SqlFiles.DataFile);

            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                var dbContext = serviceScope.ServiceProvider.GetRequiredService<DataContext>();

                try
                {
                    var databaseCreator = dbContext.Database.GetService<IDatabaseCreator>() as RelationalDatabaseCreator;
                    if (dbContext.Database.GetPendingMigrations().Any() || !databaseCreator!.CanConnect() || !databaseCreator!.HasTables())
                    {
                        dbContext.Database.Migrate();
                        ExecuteSqlFromFile(dbContext, filePath);
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }
        }

        private static void ExecuteSqlFromFile(DataContext dbContext, string filePath)
        {
            var sql = System.IO.File.ReadAllText(filePath);
            dbContext.Database.ExecuteSqlRaw(sql);
        }
    }
}
