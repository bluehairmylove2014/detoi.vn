using DeToiServerCore.Models.Services;
using DeToiServerCore.Models.SevicesUIElement;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DeToiServerData.Configurations
{
    internal class UIElementInputMethodTypeConfiguration : EntityTypeConfigurationBase<UIElementInputMethodType>
    {
        protected override void OnConfigure(EntityTypeBuilder<UIElementInputMethodType> builder)
        {
            builder.HasMany(mt => mt.InputMethods)
                .WithOne(input => input.Method)
                .HasForeignKey(input => input.MethodId)
                .IsRequired();

            builder.HasData(new List<UIElementInputMethodType>
            {
                new() { Id = new Guid("7bb50f83-c17c-48e2-a755-d51c397e06f4"), Name = "input" },
                new() { Id = new Guid("49affbf6-08cb-4de7-a78c-b7ef741862ed"), Name = "input" },
                new() { Id = new Guid("89e6f2f5-15cc-470c-a363-427ee8646609"), Name = "select" }
            });
        }
    }

    internal class UIElementInputOptionConfiguration : EntityTypeConfigurationBase<UIElementInputOption>
    {
        protected override void OnConfigure(EntityTypeBuilder<UIElementInputOption> builder)
        {
            builder.HasOne(option => option.InputMethodType)
                .WithMany(mt => mt.Options)
                .HasForeignKey(option => option.InputMethodTypeId)
                .IsRequired();

            builder.HasData(new List<UIElementInputOption> {
                new()
                {
                    Id = Guid.NewGuid(),
                    Name = "Dọn trọn gói",
                    Description = "Tất cả dịch vụ, dọn toàn bộ nhà / phòng",
                    InputMethodTypeId = new Guid("89e6f2f5-15cc-470c-a363-427ee8646609"),
                    InputMethodType = null!
                },
                new()
                {
                    Id = Guid.NewGuid(),
                    Name = "Dọn theo phòng",
                    Description = "Trung bình 50.000đ / phòng, tiết kiệm và nhanh chóng",
                    InputMethodTypeId = new Guid("89e6f2f5-15cc-470c-a363-427ee8646609"),
                    InputMethodType = null!
                },
            });
        }
    }

    internal class UIElementServiceRequirementInputMethodConfiguration : EntityTypeConfigurationBase<UIElementServiceRequirementInputMethod>
    {
        protected override void OnConfigure(EntityTypeBuilder<UIElementServiceRequirementInputMethod> builder)
        {
            builder.HasMany(input => input.ServiceRequirements)
                .WithOne(req => req.InputMethod)
                .HasForeignKey(req => req.InputMethodId);

            //builder.HasOne(input => input.Method)
            //    .WithMany(mt => mt.InputMethods)
            //    .HasForeignKey(input => input.MethodId)
            //    .IsRequired(true);

            builder.HasMany(input => input.Validation)
                .WithOne(val => val.InputMethod)
                .HasForeignKey(val => val.InputMethodId)
                .IsRequired();

            builder.HasData(new List<UIElementServiceRequirementInputMethod>
            {
                new()
                { 
                    Id = new Guid("95b69f6f-c8a5-4b94-824b-214bb7435c4f"), 
                    DataType = "text", 
                    MethodId = new Guid("7bb50f83-c17c-48e2-a755-d51c397e06f4"), 
                    Method = null!,
                    Validation = null!
                },
                new()
                {
                    Id = new Guid("0ad2fdde-73c5-433c-99f8-95e9c9df32a4"),
                    DataType = "text",
                    MethodId = new Guid("89e6f2f5-15cc-470c-a363-427ee8646609"),
                    Method = null!,
                    Validation = null!
                },
                new()
                {
                    Id = new Guid("42b3fce8-5392-4bfd-97a2-0b84532a4b67"),
                    DataType = "number",
                    MethodId = new Guid("7bb50f83-c17c-48e2-a755-d51c397e06f4"),
                    Method = null!,
                    Validation = null!
                },
            });
        }
    }

    internal class UIElementValidationTypeConfiguration : EntityTypeConfigurationBase<UIElementValidationType>
    {
        protected override void OnConfigure(EntityTypeBuilder<UIElementValidationType> builder)
        {
            builder.HasData(new List<UIElementValidationType>
            {
                new()
                {
                    Id = Guid.NewGuid(),
                    Name = "required",
                    Value = null,
                    Message = "Thông báo valid input 1 custom 1.",
                    InputMethodId = new Guid("95b69f6f-c8a5-4b94-824b-214bb7435c4f"),
                    InputMethod = null!
                },
                new()
                {
                    Id = Guid.NewGuid(),
                    Name = "min",
                    Value = "0",
                    Message = "Thông báo valid input 1 custom 2.",
                    InputMethodId = new Guid("95b69f6f-c8a5-4b94-824b-214bb7435c4f"),
                    InputMethod = null!
                },
                new()
                {
                    Id = Guid.NewGuid(),
                    Name = "max",
                    Value = "255",
                    Message = "Thông báo valid input 1 custom 3.",
                    InputMethodId = new Guid("95b69f6f-c8a5-4b94-824b-214bb7435c4f"),
                    InputMethod = null!
                },
                // =======
                new()
                {
                    Id = Guid.NewGuid(),
                    Name = "required",
                    Value = null,
                    Message = "Thông báo valid input 2 custom 1.",
                    InputMethodId = new Guid("0ad2fdde-73c5-433c-99f8-95e9c9df32a4"),
                    InputMethod = null!
                },
                // =======
                new()
                {
                    Id = Guid.NewGuid(),
                    Name = "required",
                    Value = null,
                    Message = "Thông báo valid input 3 custom 1.",
                    InputMethodId = new Guid("42b3fce8-5392-4bfd-97a2-0b84532a4b67"),
                    InputMethod = null!
                },
                new()
                {
                    Id = Guid.NewGuid(),
                    Name = "min",
                    Value = "0",
                    Message = "Thông báo valid input 3 custom 2.",
                    InputMethodId = new Guid("42b3fce8-5392-4bfd-97a2-0b84532a4b67"),
                    InputMethod = null!
                },
                new()
                {
                    Id = Guid.NewGuid(),
                    Name = "max",
                    Value = "10",
                    Message = "Thông báo valid input 3 custom 3.",
                    InputMethodId = new Guid("42b3fce8-5392-4bfd-97a2-0b84532a4b67"),
                    InputMethod = null!
                },
            });
        }
    }

    internal class UIElementServiceRequirementConfiguration : EntityTypeConfigurationBase<UIElementServiceRequirement>
    {
        protected override void OnConfigure(EntityTypeBuilder<UIElementServiceRequirement> builder)
        {
            builder.HasOne(req => req.ServiceType)
                .WithMany(s => s.Requirements)
                .HasForeignKey(req => req.ServiceTypeId)
                .IsRequired();

            builder.HasData(new List<UIElementServiceRequirement>
            {
                new()
                { 
                    Id = Guid.NewGuid(),
                    InputMethodId = new Guid("95b69f6f-c8a5-4b94-824b-214bb7435c4f"),
                    InputMethod = null!,
                    Key = "addressLine",
                    Label = "Số nhà, số phòng, hẻm (ngõ)",
                    LabelIcon = null,
                    Placeholder = "Ví dụ: 257/43 Phòng 2014 Căn hộ Sunrise Continent",
                    ServiceTypeId = new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603"),
                    ServiceType = null!
                },
                new()
                {
                    Id = Guid.NewGuid(),
                    InputMethodId = new Guid("0ad2fdde-73c5-433c-99f8-95e9c9df32a4"),
                    InputMethod = null!,
                    Key = "cleanningType",
                    Label = "Bạn muốn chúng tôi dọn như thế nào?",
                    LabelIcon = "faFlag",
                    Placeholder = "Giúp nhân viên biết thêm về công việc cần làm",
                    ServiceTypeId = new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603"),
                    ServiceType = null!
                },
                new()
                {
                    Id = Guid.NewGuid(),
                    InputMethodId = new Guid("42b3fce8-5392-4bfd-97a2-0b84532a4b67"),
                    InputMethod = null!,
                    Key = "roomNumber",
                    Label = "Số lượng phòng",
                    LabelIcon = "faPersonShelter",
                    Placeholder = "Lưu ý: Nếu bạn chọn dịch vụ dọn theo phòng, vui lòng bổ sung số phòng cần dọn ở đây",
                    ServiceTypeId = new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603"),
                    ServiceType = null!
                },
            });
        }
    }

    internal class UIElementAdditionServiceRequirementConfiguration : EntityTypeConfigurationBase<UIElementAdditionServiceRequirement>
    {
        protected override void OnConfigure(EntityTypeBuilder<UIElementAdditionServiceRequirement> builder)
        {
            builder.HasOne(aReq => aReq.ServiceType)
                .WithMany(s => s.AdditionalRequirements)
                .HasForeignKey(aReq => aReq.ServiceTypeId)
                .IsRequired();

            builder.HasData(new List<UIElementAdditionServiceRequirement>
            {
                new()
                {
                    Id = Guid.NewGuid(),
                    Key = "hasPets",
                    Icon = "faDog",
                    Label = "Nhà có thú cưng",
                    AutoSelect = true,
                    ServiceTypeId = new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603"),
                    ServiceType = null!
                },
                new()
                {
                    Id = Guid.NewGuid(),
                    Key = "hasElectronics",
                    Icon = "faComputer",
                    Label = "Nhà có nhiều đồ điện tử",
                    AutoSelect = false,
                    ServiceTypeId = new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603"),
                    ServiceType = null!
                },
                new()
                {
                    Id = Guid.NewGuid(),
                    Key = "freelancerBringTools",
                    Icon = "faBroom",
                    Label = "Nhân viên tự mang theo dụng cụ",
                    AutoSelect = false,
                    ServiceTypeId = new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603"),
                    ServiceType = null!
                },
            });
        }
    }
}
