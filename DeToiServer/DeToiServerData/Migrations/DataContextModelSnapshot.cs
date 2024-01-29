﻿// <auto-generated />
using System;
using DeToiServerData;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace DeToiServerData.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("DeToiServerCore.Models.Accounts.Account", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Avatar")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateOnly>("DateOfBirth")
                        .HasColumnType("date");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("FullName")
                        .IsRequired()
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("PasswordHash")
                        .IsRequired()
                        .HasMaxLength(512)
                        .HasColumnType("nvarchar(512)");

                    b.Property<string>("PasswordResetToken")
                        .IsRequired()
                        .HasMaxLength(512)
                        .HasColumnType("nvarchar(512)");

                    b.Property<string>("PasswordSalt")
                        .IsRequired()
                        .HasMaxLength(512)
                        .HasColumnType("nvarchar(512)");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasMaxLength(12)
                        .HasColumnType("nvarchar(12)");

                    b.Property<string>("RefreshToken")
                        .IsRequired()
                        .HasMaxLength(512)
                        .HasColumnType("nvarchar(512)");

                    b.Property<DateTime>("ResetTokenExpires")
                        .HasColumnType("datetime2");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasMaxLength(12)
                        .HasColumnType("nvarchar(12)");

                    b.Property<DateTime>("TokenCreated")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("TokenExpires")
                        .HasColumnType("datetime2");

                    b.HasKey("Id")
                        .HasName("pk_accounts");

                    b.ToTable("Accounts", (string)null);
                });

            modelBuilder.Entity("DeToiServerCore.Models.Accounts.Address", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("AddressLine")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("CustomerAccountId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CustomerAccountId");

                    b.ToTable("Addresses");
                });

            modelBuilder.Entity("DeToiServerCore.Models.Accounts.CustomerAccount", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("AccountId")
                        .HasColumnType("int");

                    b.Property<DateTime>("DateOfBirth")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("AccountId");

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("DeToiServerCore.Models.Accounts.FreelanceAccount", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("AccountId")
                        .HasColumnType("int");

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Balance")
                        .HasColumnType("float");

                    b.Property<DateTime>("DateOfBirth")
                        .HasColumnType("datetime2");

                    b.Property<string>("IdentityNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsTeam")
                        .HasColumnType("bit");

                    b.Property<double>("Rating")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.HasIndex("AccountId");

                    b.ToTable("Freelancers");
                });

            modelBuilder.Entity("DeToiServerCore.Models.Accounts.Skill", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Skills");
                });

            modelBuilder.Entity("DeToiServerCore.Models.Infos.DeviceInfo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Size")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("DeviceInfo");
                });

            modelBuilder.Entity("DeToiServerCore.Models.Infos.HomeInfo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Size")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("HomeInfo");
                });

            modelBuilder.Entity("DeToiServerCore.Models.Infos.ShoppingInfo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("ShoppingInfo");
                });

            modelBuilder.Entity("DeToiServerCore.Models.Order", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("CreatedTime")
                        .HasColumnType("datetime2");

                    b.Property<int>("CustomerId")
                        .HasColumnType("int");

                    b.Property<double>("EstimatedPrice")
                        .HasColumnType("float");

                    b.Property<int>("FreelancerId")
                        .HasColumnType("int");

                    b.Property<double>("Rating")
                        .HasColumnType("float");

                    b.Property<DateTime>("ScheduleTime")
                        .HasColumnType("datetime2");

                    b.Property<int>("ServiceCategoryId")
                        .HasColumnType("int");

                    b.Property<int>("ServiceStatusId")
                        .HasColumnType("int");

                    b.Property<DateTime>("StartTime")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("CustomerId");

                    b.HasIndex("FreelancerId");

                    b.HasIndex("ServiceCategoryId");

                    b.HasIndex("ServiceStatusId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("DeToiServerCore.Models.ServiceCategory", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Image")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("ServiceCategories");
                });

            modelBuilder.Entity("DeToiServerCore.Models.Services.OrderService", b =>
                {
                    b.Property<int>("OrderId")
                        .HasColumnType("int");

                    b.Property<int>("ServiceId")
                        .HasColumnType("int");

                    b.HasKey("OrderId", "ServiceId");

                    b.HasIndex("ServiceId");

                    b.ToTable("OrderService", (string)null);
                });

            modelBuilder.Entity("DeToiServerCore.Models.Services.Service", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<double>("BasePrice")
                        .HasColumnType("float");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Discriminator")
                        .IsRequired()
                        .HasMaxLength(21)
                        .HasColumnType("nvarchar(21)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Note")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ServiceCategoryId")
                        .HasColumnType("int");

                    b.Property<string>("ServiceType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("ServiceCategoryId");

                    b.ToTable("Services");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Service");

                    b.UseTphMappingStrategy();
                });

            modelBuilder.Entity("DeToiServerCore.Models.Services.ServiceStatus", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("ServiceStatuses");
                });

            modelBuilder.Entity("FreelanceAccountSkill", b =>
                {
                    b.Property<int>("FreelancersId")
                        .HasColumnType("int");

                    b.Property<int>("SkillsId")
                        .HasColumnType("int");

                    b.HasKey("FreelancersId", "SkillsId");

                    b.HasIndex("SkillsId");

                    b.ToTable("FreelanceAccountSkill");
                });

            modelBuilder.Entity("DeToiServerCore.Models.Services.CleaningService", b =>
                {
                    b.HasBaseType("DeToiServerCore.Models.Services.Service");

                    b.Property<int>("Floor")
                        .HasColumnType("int");

                    b.Property<double>("Height")
                        .HasColumnType("float");

                    b.Property<int?>("HomeInfoId")
                        .HasColumnType("int");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<double>("Width")
                        .HasColumnType("float");

                    b.HasIndex("HomeInfoId");

                    b.ToTable("Services", t =>
                        {
                            t.Property("Price")
                                .HasColumnName("CleaningService_Price");
                        });

                    b.HasDiscriminator().HasValue("CleaningService");
                });

            modelBuilder.Entity("DeToiServerCore.Models.Services.RepairingService", b =>
                {
                    b.HasBaseType("DeToiServerCore.Models.Services.Service");

                    b.Property<int?>("DeviceInfoId")
                        .HasColumnType("int");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<int>("Quantity")
                        .HasColumnType("int");

                    b.HasIndex("DeviceInfoId");

                    b.HasDiscriminator().HasValue("RepairingService");
                });

            modelBuilder.Entity("DeToiServerCore.Models.Services.ShoppingService", b =>
                {
                    b.HasBaseType("DeToiServerCore.Models.Services.Service");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<int?>("ShoppingInfoId")
                        .HasColumnType("int");

                    b.HasIndex("ShoppingInfoId");

                    b.ToTable("Services", t =>
                        {
                            t.Property("Price")
                                .HasColumnName("ShoppingService_Price");
                        });

                    b.HasDiscriminator().HasValue("ShoppingService");
                });

            modelBuilder.Entity("DeToiServerCore.Models.Accounts.Address", b =>
                {
                    b.HasOne("DeToiServerCore.Models.Accounts.CustomerAccount", "CustomerAccount")
                        .WithMany("Addresses")
                        .HasForeignKey("CustomerAccountId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CustomerAccount");
                });

            modelBuilder.Entity("DeToiServerCore.Models.Accounts.CustomerAccount", b =>
                {
                    b.HasOne("DeToiServerCore.Models.Accounts.Account", "Account")
                        .WithMany()
                        .HasForeignKey("AccountId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Account");
                });

            modelBuilder.Entity("DeToiServerCore.Models.Accounts.FreelanceAccount", b =>
                {
                    b.HasOne("DeToiServerCore.Models.Accounts.Account", "Account")
                        .WithMany()
                        .HasForeignKey("AccountId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Account");
                });

            modelBuilder.Entity("DeToiServerCore.Models.Order", b =>
                {
                    b.HasOne("DeToiServerCore.Models.Accounts.CustomerAccount", "Customer")
                        .WithMany("Orders")
                        .HasForeignKey("CustomerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DeToiServerCore.Models.Accounts.FreelanceAccount", "Freelance")
                        .WithMany("Orders")
                        .HasForeignKey("FreelancerId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("DeToiServerCore.Models.ServiceCategory", "ServiceCategory")
                        .WithMany("Orders")
                        .HasForeignKey("ServiceCategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DeToiServerCore.Models.Services.ServiceStatus", "ServiceStatus")
                        .WithMany("Orders")
                        .HasForeignKey("ServiceStatusId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Customer");

                    b.Navigation("Freelance");

                    b.Navigation("ServiceCategory");

                    b.Navigation("ServiceStatus");
                });

            modelBuilder.Entity("DeToiServerCore.Models.Services.OrderService", b =>
                {
                    b.HasOne("DeToiServerCore.Models.Order", "Order")
                        .WithMany("OrderServices")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("DeToiServerCore.Models.Services.Service", "Service")
                        .WithMany("OrderServices")
                        .HasForeignKey("ServiceId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("Order");

                    b.Navigation("Service");
                });

            modelBuilder.Entity("DeToiServerCore.Models.Services.Service", b =>
                {
                    b.HasOne("DeToiServerCore.Models.ServiceCategory", "ServiceCategory")
                        .WithMany("Services")
                        .HasForeignKey("ServiceCategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ServiceCategory");
                });

            modelBuilder.Entity("FreelanceAccountSkill", b =>
                {
                    b.HasOne("DeToiServerCore.Models.Accounts.FreelanceAccount", null)
                        .WithMany()
                        .HasForeignKey("FreelancersId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DeToiServerCore.Models.Accounts.Skill", null)
                        .WithMany()
                        .HasForeignKey("SkillsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("DeToiServerCore.Models.Services.CleaningService", b =>
                {
                    b.HasOne("DeToiServerCore.Models.Infos.HomeInfo", "HomeInfo")
                        .WithMany()
                        .HasForeignKey("HomeInfoId");

                    b.Navigation("HomeInfo");
                });

            modelBuilder.Entity("DeToiServerCore.Models.Services.RepairingService", b =>
                {
                    b.HasOne("DeToiServerCore.Models.Infos.DeviceInfo", "DeviceInfo")
                        .WithMany()
                        .HasForeignKey("DeviceInfoId");

                    b.Navigation("DeviceInfo");
                });

            modelBuilder.Entity("DeToiServerCore.Models.Services.ShoppingService", b =>
                {
                    b.HasOne("DeToiServerCore.Models.Infos.ShoppingInfo", "ShoppingInfo")
                        .WithMany()
                        .HasForeignKey("ShoppingInfoId");

                    b.Navigation("ShoppingInfo");
                });

            modelBuilder.Entity("DeToiServerCore.Models.Accounts.CustomerAccount", b =>
                {
                    b.Navigation("Addresses");

                    b.Navigation("Orders");
                });

            modelBuilder.Entity("DeToiServerCore.Models.Accounts.FreelanceAccount", b =>
                {
                    b.Navigation("Orders");
                });

            modelBuilder.Entity("DeToiServerCore.Models.Order", b =>
                {
                    b.Navigation("OrderServices");
                });

            modelBuilder.Entity("DeToiServerCore.Models.ServiceCategory", b =>
                {
                    b.Navigation("Orders");

                    b.Navigation("Services");
                });

            modelBuilder.Entity("DeToiServerCore.Models.Services.Service", b =>
                {
                    b.Navigation("OrderServices");
                });

            modelBuilder.Entity("DeToiServerCore.Models.Services.ServiceStatus", b =>
                {
                    b.Navigation("Orders");
                });
#pragma warning restore 612, 618
        }
    }
}
