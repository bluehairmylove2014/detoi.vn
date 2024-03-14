using DeToiServerCore.Models.Payment;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DeToiServerData.Configurations
{
    internal class PaymentConfiguration : EntityTypeConfigurationBase<PaymentHistory>
    {
        protected override void OnConfigure(EntityTypeBuilder<PaymentHistory> builder)
        {
            builder.Property(b => b.Timestamp)
                .ValueGeneratedOnAddOrUpdate()
                .HasDefaultValueSql("GETDATE()");
        }
    }
}
