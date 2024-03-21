using DeToiServerCore.Common.Constants;
using DeToiServerCore.Models;
using DeToiServerCore.Models.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Reflection.Emit;

namespace DeToiServerData.Configurations
{
    internal class ServiceConfiguration : EntityTypeConfigurationBase<Service>
    {
        protected override void OnConfigure(EntityTypeBuilder<Service> builder)
        {
            builder.HasOne(s => s.ServiceType)
                .WithMany(st => st.Services)
                .HasForeignKey(s => s.ServiceTypeId);
        }
    }

    internal class OrderConfiguration : EntityTypeConfigurationBase<Order>
    {
        protected override void OnConfigure(EntityTypeBuilder<Order> builder)
        {
            builder.HasOne(o => o.Customer)
                .WithMany(c => c.Orders)
                .HasForeignKey(o => o.CustomerId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(o => o.Freelance)
                .WithMany(c => c.Orders)
                .HasForeignKey(o => o.FreelancerId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(o => o.ServiceStatus)
                .WithMany(ss => ss.Orders)
                .HasForeignKey(o => o.ServiceStatusId);

            builder.HasMany(o => o.ServiceProven)
                .WithOne(sp => sp.Order)
                .HasForeignKey(sp => sp.OrderId);

            builder.HasOne(o => o.Address)
                .WithMany(a => a.Orders)
                .HasForeignKey(o => o.AddressId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }

    internal class OrderServiceConfiguration : EntityTypeConfigurationBaseClass<OrderService>
    {
        protected override void OnConfigure(EntityTypeBuilder<OrderService> builder)
        {
            builder.HasKey(os => new { os.OrderId, os.ServiceId });

            builder.HasOne(os => os.Order)
                .WithMany(o => o.OrderServices)
                .HasForeignKey(os => os.OrderId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(os => os.Service)
                .WithMany(s => s.OrderServices)
                .HasForeignKey(os => os.ServiceId)
                .OnDelete(DeleteBehavior.NoAction);

            // Optionally, set the table name for the joint table
            builder.ToTable("OrderService");
        }
    }

    internal class OrderServiceTypeConfiguration : EntityTypeConfigurationBaseClass<OrderServiceType>
    {
        protected override void OnConfigure(EntityTypeBuilder<OrderServiceType> builder)
        {
            builder.HasKey(ost => new { ost.OrderId, ost.ServiceTypeId });

            builder.HasOne(ost => ost.Order)
                .WithMany(o => o.OrderServiceTypes)
                .HasForeignKey(os => os.OrderId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(ost => ost.ServiceType)
                .WithMany(st => st.OrderServiceTypes)
                .HasForeignKey(ost => ost.ServiceTypeId)
                .OnDelete(DeleteBehavior.Cascade);

            // Optionally, set the table name for the joint table
            builder.ToTable("OrderServiceType");
        }
    }

    internal class ServiceStatusConfiguration : EntityTypeConfigurationBaseClass<ServiceStatus>
    {
        protected override void OnConfigure(EntityTypeBuilder<ServiceStatus> builder)
        {
            builder.HasData(
                new List<ServiceStatus>
                {
                    new ServiceStatus { Id = StatusConst.Waiting, Name = "Chưa đến giờ hoạt động" },
                    new ServiceStatus { Id = StatusConst.OnMoving, Name = "Đang di chuyển, hãy kiên nhẫn" },
                    new ServiceStatus { Id = StatusConst.OnDoingService, Name = "Đang làm việc" },
                    new ServiceStatus { Id = StatusConst.Completed, Name = "Đã hoàn thành nhiệm vụ" },
                    new ServiceStatus { Id = StatusConst.Canceled, Name = "Đơn đã hủy" },
                }
            );
        }
    }

    internal class ServiceCategoryConfiguration : EntityTypeConfigurationBaseClass<ServiceCategory>
    {
        protected override void OnConfigure(EntityTypeBuilder<ServiceCategory> builder)
        {
            builder.HasData(
                new List<ServiceCategory>
                {
                    new ServiceCategory { 
                        Id = new Guid("d17ad87c-9f80-4f0e-bfd4-53138d900a6e"), 
                        Name = "Dọn dẹp", 
                        Description = "Bao gồm lau nhà, quét nhà, hút bụi, và nhiều dịch vụ khác", 
                        Image = "https://detoivn.sirv.com/services/dondep/category.png", 
                        ServiceClassName = "CleaningService"
                    },
                    new ServiceCategory { 
                        Id = new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f"), 
                        Name = "Mua sắm", 
                        Description = "Bao gồm đi chợ, siêu thị, nhà sách, và nhiều dịch vụ khác", 
                        Image = "https://detoivn.sirv.com/services/dicho/category.png",
                        ServiceClassName = "ShoppingService"
                    },
                    new ServiceCategory { 
                        Id = new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a"), 
                        Name = "Sửa chữa", 
                        Description = "Bao gồm sửa máy lạnh, tủ lạnh, và nhiều dịch vụ khác", 
                        Image = "https://detoivn.sirv.com/services/suachua/category.png",
                        ServiceClassName = "RepairingService"
                    },
                    new ServiceCategory { 
                        Id = new Guid("0f6f1894-3ee7-46a8-9939-842e3c620231"), 
                        Name = "Vệ sinh thiết bị", 
                        Description = "Bao gồm vệ sinh máy lạnh, tủ lạnh, ...", 
                        Image = "https://detoivn.sirv.com/services/vesinhmaylanh/category.png",
                        ServiceClassName = "ElectronicsCleaningService"
                    },
                    new ServiceCategory { 
                        Id = new Guid("1b1a6ebd-2838-4b3d-a1f1-1818305df2d6"), 
                        Name = "Chuyển nhà, phòng trọ", 
                        Description = "Chuyển nhà phòng trọ", 
                        Image = "https://detoivn.sirv.com/services/chuyennhaphongtro/category.png",
                        ServiceClassName = "MovingService"
                    },
                }
            );
        }
    }

    internal class ServiceTypeConfiguration : EntityTypeConfigurationBaseClass<ServiceType>
    {
        protected override void OnConfigure(EntityTypeBuilder<ServiceType> builder)
        {
            builder.HasMany(st => st.ServiceProven)
                .WithOne(sp => sp.ServiceType)
                .HasForeignKey(sp => sp.ServiceTypeId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasData(
                new List<ServiceType>
                {
                    new ServiceType { Id = new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603"), Name = "Phòng trọ", BasePrice = 30000, Description = "Dọn dẹp Phòng trọ", Image="https://detoivn.sirv.com/services/dondep/phongtro.png", ServiceCategoryId = new Guid("d17ad87c-9f80-4f0e-bfd4-53138d900a6e") },
                    new ServiceType { Id = new Guid("49a42267-d9dc-4e11-87a5-36525d4254d9"), Name = "Biệt thự", BasePrice = 55000, Description = "Dọn dẹp Biệt thự", Image="https://detoivn.sirv.com/services/dondep/bietthu.png", ServiceCategoryId = new Guid("d17ad87c-9f80-4f0e-bfd4-53138d900a6e") },
                    new ServiceType { Id = new Guid("ef2632f0-47bd-4bbe-a46f-628a28f03d8b"), Name = "Nhà / Nhà phố", BasePrice = 50000, Description = "Dọn dẹp Nhà / Nhà phố", Image="https://detoivn.sirv.com/services/dondep/n%C3%A2-nhapho.png", ServiceCategoryId = new Guid("d17ad87c-9f80-4f0e-bfd4-53138d900a6e") },
                    new ServiceType { Id = new Guid("dbb78597-043d-47c1-8810-93d392fd09ba"), Name = "Căn hộ chung cư", BasePrice = 40000, Description = "Dọn dẹp Căn hộ chung cư", Image="https://detoivn.sirv.com/services/dondep/chungcu.jpg", ServiceCategoryId = new Guid("d17ad87c-9f80-4f0e-bfd4-53138d900a6e") },

                    new ServiceType { Id = new Guid("c82954a1-39d4-4012-86b3-6cad42c2b399"), Name = "Đi chợ hộ", BasePrice = 40000, Description = "Mua sắm hộ siêu nhanh", ServiceCategoryId = new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f") },
                    new ServiceType { Id = new Guid("96d250d4-0c0e-4521-b94e-05f3cafca3f3"), Name = "Đi siêu thị hộ", BasePrice = 50000, Description = "Mua sắm hộ siêu nhanh", ServiceCategoryId = new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f") },
                    new ServiceType { Id = new Guid("73bf981f-1cfd-483d-80ee-14ab6d2e55ef"), Name = "Đi siêu thị sang trọng", BasePrice = 100000, Description = "Mua sắm hộ siêu nhanh", ServiceCategoryId = new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f") },
                    new ServiceType { Id = new Guid("3779d349-abcb-4dbc-abf1-25ba9e94a695"), Name = "Đi mua quần áo", BasePrice = 60000, Description = "Mua sắm hộ siêu nhanh", ServiceCategoryId = new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f") },
                    new ServiceType { Id = new Guid("3361bc88-9f58-4be8-ac37-561606430f8a"), Name = "Đi mua giày camping", BasePrice = 300000, Description = "Mua sắm hộ siêu nhanh", ServiceCategoryId = new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f") },
                    new ServiceType { Id = new Guid("07cb166a-4b4e-4637-b224-6277a69003d9"), Name = "Đi mua vé concert", BasePrice = 4000000, Description = "Mua sắm hộ siêu nhanh", ServiceCategoryId = new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f") },
                    new ServiceType { Id = new Guid("a5677de0-a6a7-42c0-ab77-f34b75beb63d"), Name = "Đi mua vé xem phim", BasePrice = 20000, Description = "Mua sắm hộ siêu nhanh", ServiceCategoryId = new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f") },

                    new ServiceType { Id = new Guid("63ce2ebf-ef36-4b4a-891e-abbde2a75b38"), Name = "Sửa máy giặt", BasePrice = 200000, Description = "Sửa máy giặt", ServiceCategoryId = new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a") },
                    new ServiceType { Id = new Guid("f1b832b2-49f3-456f-bacb-b1f8da766bea"), Name = "Sửa máy lạnh", BasePrice = 200000, Description = "Sửa chữa để tôi lo", ServiceCategoryId = new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a") },
                    new ServiceType { Id = new Guid("b9f74f9e-f792-4c48-b1b6-b6f0bc402d07"), Name = "Sửa bàn ủi", BasePrice = 200000, Description = "Sửa chữa để tôi lo", ServiceCategoryId = new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a") },
                    new ServiceType { Id = new Guid("88006a8c-d757-4b85-8b91-c88e6078fe9c"), Name = "Sửa tivi", BasePrice = 200000, Description = "Sửa chữa để tôi lo", ServiceCategoryId = new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a") },
                    new ServiceType { Id = new Guid("662a64be-f7ea-4419-8978-dbf8f19159dc"), Name = "Sửa ống nước", BasePrice = 200000, Description = "Sửa chữa để tôi lo", ServiceCategoryId = new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a") },
                    new ServiceType { Id = new Guid("ef2034c1-7f44-4d07-b9c0-e2a497999a9d"), Name = "Sửa bình gas", BasePrice = 50000000, Description = "Hãy yên tâm không nổ đâu", ServiceCategoryId = new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a") },
                    new ServiceType { Id = new Guid("cca752d4-c17c-4c31-906f-f33cb8a18e48"), Name = "Sửa máy tính laptop", BasePrice = 200000, Description = "Hãy yên tâm không nổ đâu", ServiceCategoryId = new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a") },
                }
            );
        }
    }
}
