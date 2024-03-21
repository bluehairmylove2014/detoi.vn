using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace DeToiServerData.Migrations
{
    /// <inheritdoc />
    public partial class V167_NewServiceRequirementStructure : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CleaningServices");

            migrationBuilder.DropTable(
                name: "RepairingServices");

            migrationBuilder.DropTable(
                name: "ShoppingServices");

            migrationBuilder.DeleteData(
                table: "UIElementAdditionServiceRequirements",
                keyColumn: "Id",
                keyValue: new Guid("03dbec9f-9a4b-46a0-8330-352029773c7e"));

            migrationBuilder.DeleteData(
                table: "UIElementAdditionServiceRequirements",
                keyColumn: "Id",
                keyValue: new Guid("4f235eaa-4b25-4f02-8fc9-8bd2d8857065"));

            migrationBuilder.DeleteData(
                table: "UIElementAdditionServiceRequirements",
                keyColumn: "Id",
                keyValue: new Guid("eb5060b8-960d-4c46-8636-016386121c49"));

            migrationBuilder.DeleteData(
                table: "UIElementInputOptions",
                keyColumn: "Id",
                keyValue: new Guid("a832659f-fbc0-4993-8c1d-6fbdf3b850f0"));

            migrationBuilder.DeleteData(
                table: "UIElementInputOptions",
                keyColumn: "Id",
                keyValue: new Guid("c340e9e5-16f6-4631-a276-eba34768a1e7"));

            migrationBuilder.DeleteData(
                table: "UIElementServiceRequirements",
                keyColumn: "Id",
                keyValue: new Guid("4fb74a10-a23a-457a-9776-a279c5c3df91"));

            migrationBuilder.DeleteData(
                table: "UIElementServiceRequirements",
                keyColumn: "Id",
                keyValue: new Guid("cfd1bd30-2f2d-4134-a9bc-ee05696a2e80"));

            migrationBuilder.DeleteData(
                table: "UIElementServiceRequirements",
                keyColumn: "Id",
                keyValue: new Guid("e81456c6-3e66-47ad-b0e3-f69385a3631b"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("0885d284-0aa1-40be-a3a0-036b17dd55ad"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("27e804d3-e8bc-4cf0-870c-39b8125602b3"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("29f926d7-abbb-4355-b2c3-f5ee30af0522"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("2e9b0527-01bf-40ea-90a9-b748873febb8"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("7ead3fc4-1e3b-46d6-aeb9-0c28acf2aff1"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("878a0fcf-6ce4-4d00-84a3-853aeaee0d32"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("8a49e1e5-f594-47f3-b380-8936dd9863c4"));

            migrationBuilder.AddColumn<string>(
                name: "AdditionalRequirement",
                table: "Services",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Requirement",
                table: "Services",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "ServiceClones",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Requirement = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AdditionalRequirement = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceClones", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "ServiceStatuses",
                columns: new[] { "Id", "Name" },
                values: new object[] { new Guid("0774e101-f1a3-4186-af1e-af95a26e9ead"), "Đơn đã hủy" });

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("3361bc88-9f58-4be8-ac37-561606430f8a"),
                columns: new[] { "BasePrice", "Name" },
                values: new object[] { 300000.0, "Đi mua giày camping" });

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("3779d349-abcb-4dbc-abf1-25ba9e94a695"),
                columns: new[] { "BasePrice", "Name" },
                values: new object[] { 60000.0, "Đi mua quần áo" });

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("63ce2ebf-ef36-4b4a-891e-abbde2a75b38"),
                columns: new[] { "Description", "Name" },
                values: new object[] { "Sửa máy giặt", "Sửa máy giặt" });

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("662a64be-f7ea-4419-8978-dbf8f19159dc"),
                columns: new[] { "BasePrice", "Description", "Name" },
                values: new object[] { 200000.0, "Sửa chữa để tôi lo", "Sửa ống nước" });

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("73bf981f-1cfd-483d-80ee-14ab6d2e55ef"),
                columns: new[] { "BasePrice", "Name" },
                values: new object[] { 100000.0, "Đi siêu thị sang trọng" });

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("96d250d4-0c0e-4521-b94e-05f3cafca3f3"),
                columns: new[] { "BasePrice", "Name" },
                values: new object[] { 50000.0, "Đi siêu thị hộ" });

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("a5677de0-a6a7-42c0-ab77-f34b75beb63d"),
                columns: new[] { "BasePrice", "Description", "Name", "ServiceCategoryId" },
                values: new object[] { 20000.0, "Mua sắm hộ siêu nhanh", "Đi mua vé xem phim", new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f") });

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("b9f74f9e-f792-4c48-b1b6-b6f0bc402d07"),
                columns: new[] { "BasePrice", "Description", "Name", "ServiceCategoryId" },
                values: new object[] { 200000.0, "Sửa chữa để tôi lo", "Sửa bàn ủi", new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a") });

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("c82954a1-39d4-4012-86b3-6cad42c2b399"),
                columns: new[] { "BasePrice", "Description", "Name", "ServiceCategoryId" },
                values: new object[] { 40000.0, "Mua sắm hộ siêu nhanh", "Đi chợ hộ", new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f") });

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("cca752d4-c17c-4c31-906f-f33cb8a18e48"),
                columns: new[] { "BasePrice", "Description", "Name", "ServiceCategoryId" },
                values: new object[] { 200000.0, "Hãy yên tâm không nổ đâu", "Sửa máy tính laptop", new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a") });

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("ef2034c1-7f44-4d07-b9c0-e2a497999a9d"),
                columns: new[] { "BasePrice", "Description", "Name" },
                values: new object[] { 50000000.0, "Hãy yên tâm không nổ đâu", "Sửa bình gas" });

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("f1b832b2-49f3-456f-bacb-b1f8da766bea"),
                columns: new[] { "Description", "Name" },
                values: new object[] { "Sửa chữa để tôi lo", "Sửa máy lạnh" });

            migrationBuilder.InsertData(
                table: "UIElementAdditionServiceRequirements",
                columns: new[] { "Id", "AutoSelect", "Icon", "Key", "Label", "ServiceTypeId" },
                values: new object[,]
                {
                    { new Guid("2442392a-20f6-403f-9d16-fc77553a5cef"), false, "faBroom", "freelancerBringTools", "Nhân viên tự mang theo dụng cụ", new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603") },
                    { new Guid("655c2497-9f5a-40ca-a659-fc129893ec4f"), false, "faComputer", "hasElectronics", "Nhà có nhiều đồ điện tử", new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603") },
                    { new Guid("7415683a-c434-47ca-b913-0b98432a3307"), true, "faDog", "hasPets", "Nhà có thú cưng", new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603") }
                });

            migrationBuilder.InsertData(
                table: "UIElementInputOptions",
                columns: new[] { "Id", "Description", "InputMethodTypeId", "Name" },
                values: new object[,]
                {
                    { new Guid("408174fe-eedd-46c0-9800-b77445d18e23"), "Tất cả dịch vụ, dọn toàn bộ nhà / phòng", new Guid("89e6f2f5-15cc-470c-a363-427ee8646609"), "Dọn trọn gói" },
                    { new Guid("f93fa429-1cd1-432c-89cb-5b8f81e4d697"), "Trung bình 50.000đ / phòng, tiết kiệm và nhanh chóng", new Guid("89e6f2f5-15cc-470c-a363-427ee8646609"), "Dọn theo phòng" }
                });

            migrationBuilder.InsertData(
                table: "UIElementServiceRequirements",
                columns: new[] { "Id", "InputMethodId", "Key", "Label", "LabelIcon", "Placeholder", "ServiceTypeId" },
                values: new object[,]
                {
                    { new Guid("04b710c1-b3da-4593-b64a-4c2a4c97da9d"), new Guid("95b69f6f-c8a5-4b94-824b-214bb7435c4f"), "addressLine", "Số nhà, số phòng, hẻm (ngõ)", null, "Ví dụ: 257/43 Phòng 2014 Căn hộ Sunrise Continent", new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603") },
                    { new Guid("3a995894-8685-459c-a619-2e3622d390d8"), new Guid("42b3fce8-5392-4bfd-97a2-0b84532a4b67"), "roomNumber", "Số lượng phòng", "faPersonShelter", "Lưu ý: Nếu bạn chọn dịch vụ dọn theo phòng, vui lòng bổ sung số phòng cần dọn ở đây", new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603") },
                    { new Guid("eed48235-238c-4281-ab1f-04e66fb4b84e"), new Guid("0ad2fdde-73c5-433c-99f8-95e9c9df32a4"), "cleanningType", "Bạn muốn chúng tôi dọn như thế nào?", "faFlag", "Giúp nhân viên biết thêm về công việc cần làm", new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603") }
                });

            migrationBuilder.InsertData(
                table: "UIElementValidationTypes",
                columns: new[] { "Id", "InputMethodId", "Message", "Name", "Value" },
                values: new object[,]
                {
                    { new Guid("3b6a4ec0-a67c-4086-9808-aabbde67b3d9"), new Guid("95b69f6f-c8a5-4b94-824b-214bb7435c4f"), "Thông báo valid input 1 custom 3.", "max", "255" },
                    { new Guid("4d24e5c5-1fab-4bd6-8fa6-253bc88e7894"), new Guid("42b3fce8-5392-4bfd-97a2-0b84532a4b67"), "Thông báo valid input 3 custom 3.", "max", "10" },
                    { new Guid("7be23889-f6d2-445e-ad4a-270f68523cf6"), new Guid("0ad2fdde-73c5-433c-99f8-95e9c9df32a4"), "Thông báo valid input 2 custom 1.", "required", null },
                    { new Guid("81feed3a-b24e-4ff6-94ab-51cdb3da2147"), new Guid("42b3fce8-5392-4bfd-97a2-0b84532a4b67"), "Thông báo valid input 3 custom 2.", "min", "0" },
                    { new Guid("853f4e96-384b-4f1c-93bc-f80010a387c4"), new Guid("42b3fce8-5392-4bfd-97a2-0b84532a4b67"), "Thông báo valid input 3 custom 1.", "required", null },
                    { new Guid("99b34594-bbd7-4e16-8bb2-79fac59e135c"), new Guid("95b69f6f-c8a5-4b94-824b-214bb7435c4f"), "Thông báo valid input 1 custom 1.", "required", null },
                    { new Guid("e383e057-7122-4382-9c78-3e0375da9d28"), new Guid("95b69f6f-c8a5-4b94-824b-214bb7435c4f"), "Thông báo valid input 1 custom 2.", "min", "0" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ServiceClones");

            migrationBuilder.DeleteData(
                table: "ServiceStatuses",
                keyColumn: "Id",
                keyValue: new Guid("0774e101-f1a3-4186-af1e-af95a26e9ead"));

            migrationBuilder.DeleteData(
                table: "UIElementAdditionServiceRequirements",
                keyColumn: "Id",
                keyValue: new Guid("2442392a-20f6-403f-9d16-fc77553a5cef"));

            migrationBuilder.DeleteData(
                table: "UIElementAdditionServiceRequirements",
                keyColumn: "Id",
                keyValue: new Guid("655c2497-9f5a-40ca-a659-fc129893ec4f"));

            migrationBuilder.DeleteData(
                table: "UIElementAdditionServiceRequirements",
                keyColumn: "Id",
                keyValue: new Guid("7415683a-c434-47ca-b913-0b98432a3307"));

            migrationBuilder.DeleteData(
                table: "UIElementInputOptions",
                keyColumn: "Id",
                keyValue: new Guid("408174fe-eedd-46c0-9800-b77445d18e23"));

            migrationBuilder.DeleteData(
                table: "UIElementInputOptions",
                keyColumn: "Id",
                keyValue: new Guid("f93fa429-1cd1-432c-89cb-5b8f81e4d697"));

            migrationBuilder.DeleteData(
                table: "UIElementServiceRequirements",
                keyColumn: "Id",
                keyValue: new Guid("04b710c1-b3da-4593-b64a-4c2a4c97da9d"));

            migrationBuilder.DeleteData(
                table: "UIElementServiceRequirements",
                keyColumn: "Id",
                keyValue: new Guid("3a995894-8685-459c-a619-2e3622d390d8"));

            migrationBuilder.DeleteData(
                table: "UIElementServiceRequirements",
                keyColumn: "Id",
                keyValue: new Guid("eed48235-238c-4281-ab1f-04e66fb4b84e"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("3b6a4ec0-a67c-4086-9808-aabbde67b3d9"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("4d24e5c5-1fab-4bd6-8fa6-253bc88e7894"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("7be23889-f6d2-445e-ad4a-270f68523cf6"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("81feed3a-b24e-4ff6-94ab-51cdb3da2147"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("853f4e96-384b-4f1c-93bc-f80010a387c4"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("99b34594-bbd7-4e16-8bb2-79fac59e135c"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("e383e057-7122-4382-9c78-3e0375da9d28"));

            migrationBuilder.DropColumn(
                name: "AdditionalRequirement",
                table: "Services");

            migrationBuilder.DropColumn(
                name: "Requirement",
                table: "Services");

            migrationBuilder.CreateTable(
                name: "CleaningServices",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    AddressLine = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CleanningType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FreelancerBringTools = table.Column<bool>(type: "bit", nullable: false),
                    HasElectronics = table.Column<bool>(type: "bit", nullable: false),
                    HasPets = table.Column<bool>(type: "bit", nullable: false),
                    RoomNumber = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CleaningServices", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CleaningServices_Services_Id",
                        column: x => x.Id,
                        principalTable: "Services",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RepairingServices",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false),
                    Quantity = table.Column<int>(type: "int", nullable: false),
                    Size = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RepairingServices", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RepairingServices_Services_Id",
                        column: x => x.Id,
                        principalTable: "Services",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ShoppingServices",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false),
                    ShoppingItems = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShoppingServices", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ShoppingServices_Services_Id",
                        column: x => x.Id,
                        principalTable: "Services",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("3361bc88-9f58-4be8-ac37-561606430f8a"),
                columns: new[] { "BasePrice", "Name" },
                values: new object[] { 20000.0, "Đi mua vé xem phim" });

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("3779d349-abcb-4dbc-abf1-25ba9e94a695"),
                columns: new[] { "BasePrice", "Name" },
                values: new object[] { 100000.0, "Đi siêu thị sang trọng" });

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("63ce2ebf-ef36-4b4a-891e-abbde2a75b38"),
                columns: new[] { "Description", "Name" },
                values: new object[] { "Sửa chữa để tôi lo", "Sửa bàn ủi" });

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("662a64be-f7ea-4419-8978-dbf8f19159dc"),
                columns: new[] { "BasePrice", "Description", "Name" },
                values: new object[] { 50000000.0, "Hãy yên tâm không nổ đâu", "Sửa bình gas" });

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("73bf981f-1cfd-483d-80ee-14ab6d2e55ef"),
                columns: new[] { "BasePrice", "Name" },
                values: new object[] { 60000.0, "Đi mua quần áo" });

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("96d250d4-0c0e-4521-b94e-05f3cafca3f3"),
                columns: new[] { "BasePrice", "Name" },
                values: new object[] { 300000.0, "Đi mua giày camping" });

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("a5677de0-a6a7-42c0-ab77-f34b75beb63d"),
                columns: new[] { "BasePrice", "Description", "Name", "ServiceCategoryId" },
                values: new object[] { 200000.0, "Sửa chữa để tôi lo", "Sửa máy lạnh", new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a") });

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("b9f74f9e-f792-4c48-b1b6-b6f0bc402d07"),
                columns: new[] { "BasePrice", "Description", "Name", "ServiceCategoryId" },
                values: new object[] { 40000.0, "Mua sắm hộ siêu nhanh", "Đi chợ hộ", new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f") });

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("c82954a1-39d4-4012-86b3-6cad42c2b399"),
                columns: new[] { "BasePrice", "Description", "Name", "ServiceCategoryId" },
                values: new object[] { 200000.0, "Sửa máy giặt", "Sửa máy giặt", new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a") });

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("cca752d4-c17c-4c31-906f-f33cb8a18e48"),
                columns: new[] { "BasePrice", "Description", "Name", "ServiceCategoryId" },
                values: new object[] { 50000.0, "Mua sắm hộ siêu nhanh", "Đi siêu thị hộ", new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f") });

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("ef2034c1-7f44-4d07-b9c0-e2a497999a9d"),
                columns: new[] { "BasePrice", "Description", "Name" },
                values: new object[] { 200000.0, "Sửa chữa để tôi lo", "Sửa ống nước" });

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("f1b832b2-49f3-456f-bacb-b1f8da766bea"),
                columns: new[] { "Description", "Name" },
                values: new object[] { "Hãy yên tâm không nổ đâu", "Sửa máy tính laptop" });

            migrationBuilder.InsertData(
                table: "UIElementAdditionServiceRequirements",
                columns: new[] { "Id", "AutoSelect", "Icon", "Key", "Label", "ServiceTypeId" },
                values: new object[,]
                {
                    { new Guid("03dbec9f-9a4b-46a0-8330-352029773c7e"), false, "faBroom", "freelancerBringTools", "Nhân viên tự mang theo dụng cụ", new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603") },
                    { new Guid("4f235eaa-4b25-4f02-8fc9-8bd2d8857065"), true, "faDog", "hasPets", "Nhà có thú cưng", new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603") },
                    { new Guid("eb5060b8-960d-4c46-8636-016386121c49"), false, "faComputer", "hasElectronics", "Nhà có nhiều đồ điện tử", new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603") }
                });

            migrationBuilder.InsertData(
                table: "UIElementInputOptions",
                columns: new[] { "Id", "Description", "InputMethodTypeId", "Name" },
                values: new object[,]
                {
                    { new Guid("a832659f-fbc0-4993-8c1d-6fbdf3b850f0"), "Trung bình 50.000đ / phòng, tiết kiệm và nhanh chóng", new Guid("89e6f2f5-15cc-470c-a363-427ee8646609"), "Dọn theo phòng" },
                    { new Guid("c340e9e5-16f6-4631-a276-eba34768a1e7"), "Tất cả dịch vụ, dọn toàn bộ nhà / phòng", new Guid("89e6f2f5-15cc-470c-a363-427ee8646609"), "Dọn trọn gói" }
                });

            migrationBuilder.InsertData(
                table: "UIElementServiceRequirements",
                columns: new[] { "Id", "InputMethodId", "Key", "Label", "LabelIcon", "Placeholder", "ServiceTypeId" },
                values: new object[,]
                {
                    { new Guid("4fb74a10-a23a-457a-9776-a279c5c3df91"), new Guid("0ad2fdde-73c5-433c-99f8-95e9c9df32a4"), "cleanningType", "Bạn muốn chúng tôi dọn như thế nào?", "faFlag", "Giúp nhân viên biết thêm về công việc cần làm", new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603") },
                    { new Guid("cfd1bd30-2f2d-4134-a9bc-ee05696a2e80"), new Guid("42b3fce8-5392-4bfd-97a2-0b84532a4b67"), "roomNumber", "Số lượng phòng", "faPersonShelter", "Lưu ý: Nếu bạn chọn dịch vụ dọn theo phòng, vui lòng bổ sung số phòng cần dọn ở đây", new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603") },
                    { new Guid("e81456c6-3e66-47ad-b0e3-f69385a3631b"), new Guid("95b69f6f-c8a5-4b94-824b-214bb7435c4f"), "addressLine", "Số nhà, số phòng, hẻm (ngõ)", null, "Ví dụ: 257/43 Phòng 2014 Căn hộ Sunrise Continent", new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603") }
                });

            migrationBuilder.InsertData(
                table: "UIElementValidationTypes",
                columns: new[] { "Id", "InputMethodId", "Message", "Name", "Value" },
                values: new object[,]
                {
                    { new Guid("0885d284-0aa1-40be-a3a0-036b17dd55ad"), new Guid("42b3fce8-5392-4bfd-97a2-0b84532a4b67"), "Thông báo valid input 3 custom 1.", "required", null },
                    { new Guid("27e804d3-e8bc-4cf0-870c-39b8125602b3"), new Guid("95b69f6f-c8a5-4b94-824b-214bb7435c4f"), "Thông báo valid input 1 custom 3.", "max", "255" },
                    { new Guid("29f926d7-abbb-4355-b2c3-f5ee30af0522"), new Guid("42b3fce8-5392-4bfd-97a2-0b84532a4b67"), "Thông báo valid input 3 custom 3.", "max", "10" },
                    { new Guid("2e9b0527-01bf-40ea-90a9-b748873febb8"), new Guid("0ad2fdde-73c5-433c-99f8-95e9c9df32a4"), "Thông báo valid input 2 custom 1.", "required", null },
                    { new Guid("7ead3fc4-1e3b-46d6-aeb9-0c28acf2aff1"), new Guid("95b69f6f-c8a5-4b94-824b-214bb7435c4f"), "Thông báo valid input 1 custom 1.", "required", null },
                    { new Guid("878a0fcf-6ce4-4d00-84a3-853aeaee0d32"), new Guid("95b69f6f-c8a5-4b94-824b-214bb7435c4f"), "Thông báo valid input 1 custom 2.", "min", "0" },
                    { new Guid("8a49e1e5-f594-47f3-b380-8936dd9863c4"), new Guid("42b3fce8-5392-4bfd-97a2-0b84532a4b67"), "Thông báo valid input 3 custom 2.", "min", "0" }
                });
        }
    }
}
