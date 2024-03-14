using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace DeToiServerData.Migrations
{
    /// <inheritdoc />
    public partial class V165_UpdateCategoryAndService : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("07ca331e-73a3-4eb2-9da1-f861ffdd2a8e"));

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("1771a935-162c-4f76-8a95-285d0a00f9d9"));

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("2090ae0c-bc60-4662-b5f4-4222ba69de58"));

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("2a60f914-f800-4fee-b50d-a8ff5167fc29"));

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("34e99599-cfe8-466f-8bc0-f9c73227f679"));

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("3693de53-bf00-4f20-91ea-5cc2f9b98f56"));

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("8a5f1726-9685-4b25-a580-54830492b3b2"));

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("8c3b4979-8420-490f-8ab1-64b53fa72e7e"));

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("9230c6a2-7ed9-4dd7-9434-617dfaa5bec4"));

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("ba448130-4211-40e4-9008-e20b6f8315ca"));

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("c8aedfcf-166e-4ad9-873c-025d3f4dfca4"));

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("da68e302-bffa-4440-836f-2993b53ec327"));

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("e357504a-1715-4bd9-9436-bc61c31580b1"));

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("e9178ae3-c459-45e5-afc3-580826d949f8"));

            migrationBuilder.DeleteData(
                table: "UIElementAdditionServiceRequirements",
                keyColumn: "Id",
                keyValue: new Guid("07f6d588-483e-4436-8d3c-072568c9ec6d"));

            migrationBuilder.DeleteData(
                table: "UIElementAdditionServiceRequirements",
                keyColumn: "Id",
                keyValue: new Guid("0a82741a-1792-4605-94b9-efbba0c8ae85"));

            migrationBuilder.DeleteData(
                table: "UIElementAdditionServiceRequirements",
                keyColumn: "Id",
                keyValue: new Guid("3918c631-125d-4c7d-a6e8-f37c8868e743"));

            migrationBuilder.DeleteData(
                table: "UIElementInputOptions",
                keyColumn: "Id",
                keyValue: new Guid("5d8d64dc-c102-42bb-9d78-1e3a3b00cccd"));

            migrationBuilder.DeleteData(
                table: "UIElementInputOptions",
                keyColumn: "Id",
                keyValue: new Guid("8c642513-6677-4a62-b09f-6947f1047f0a"));

            migrationBuilder.DeleteData(
                table: "UIElementServiceRequirements",
                keyColumn: "Id",
                keyValue: new Guid("0ad53c9b-a76c-434f-8186-5f9a763f699a"));

            migrationBuilder.DeleteData(
                table: "UIElementServiceRequirements",
                keyColumn: "Id",
                keyValue: new Guid("2b464f08-1a33-445f-accf-e519fae0832b"));

            migrationBuilder.DeleteData(
                table: "UIElementServiceRequirements",
                keyColumn: "Id",
                keyValue: new Guid("57438eb0-ac24-4670-a3d5-e8371146cd61"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("0488f5d9-0de6-41ef-8ff7-142e2fc682b3"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("645ac0ce-6ed6-4da9-bb2b-91274d2e1000"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("79c3dad2-f000-4013-bd86-37a8cfd40160"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("97370655-805d-4780-b63c-2c6691a59cd0"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("aa8e998d-7dd7-4b02-a12a-b84160ae4ee9"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("ae6659d3-6ce6-41d4-9365-7c71c01aba84"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("d5e508f8-9a20-447b-bc12-be180159fdea"));

            migrationBuilder.AddColumn<string>(
                name: "Keys",
                table: "ServiceTypes",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Keys",
                table: "ServiceCategories",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "FinishTime",
                table: "Orders",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.CreateTable(
                name: "PaymentHistories",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Value = table.Column<double>(type: "float", nullable: false),
                    Method = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Timestamp = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    FreelanceAccountId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentHistories", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PaymentHistories_Freelancers_FreelanceAccountId",
                        column: x => x.FreelanceAccountId,
                        principalTable: "Freelancers",
                        principalColumn: "Id");
                });

            migrationBuilder.UpdateData(
                table: "ServiceCategories",
                keyColumn: "Id",
                keyValue: new Guid("0f6f1894-3ee7-46a8-9939-842e3c620231"),
                column: "Keys",
                value: null);

            migrationBuilder.UpdateData(
                table: "ServiceCategories",
                keyColumn: "Id",
                keyValue: new Guid("1b1a6ebd-2838-4b3d-a1f1-1818305df2d6"),
                column: "Keys",
                value: null);

            migrationBuilder.UpdateData(
                table: "ServiceCategories",
                keyColumn: "Id",
                keyValue: new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f"),
                column: "Keys",
                value: null);

            migrationBuilder.UpdateData(
                table: "ServiceCategories",
                keyColumn: "Id",
                keyValue: new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a"),
                column: "Keys",
                value: null);

            migrationBuilder.UpdateData(
                table: "ServiceCategories",
                keyColumn: "Id",
                keyValue: new Guid("d17ad87c-9f80-4f0e-bfd4-53138d900a6e"),
                column: "Keys",
                value: null);

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603"),
                column: "Keys",
                value: null);

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("49a42267-d9dc-4e11-87a5-36525d4254d9"),
                column: "Keys",
                value: null);

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("dbb78597-043d-47c1-8810-93d392fd09ba"),
                column: "Keys",
                value: null);

            migrationBuilder.UpdateData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("ef2632f0-47bd-4bbe-a46f-628a28f03d8b"),
                column: "Keys",
                value: null);

            migrationBuilder.InsertData(
                table: "ServiceTypes",
                columns: new[] { "Id", "BasePrice", "Description", "Image", "Keys", "Name", "ServiceCategoryId" },
                values: new object[,]
                {
                    { new Guid("20caafd9-a543-4eda-8be8-0485b1611c7a"), 50000000.0, "Hãy yên tâm không nổ đâu", null, null, "Sửa bình gas", new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a") },
                    { new Guid("62a3297b-ac1d-463c-bec8-8fbe5d52553e"), 40000.0, "Mua sắm hộ siêu nhanh", null, null, "Đi chợ hộ", new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f") },
                    { new Guid("63a2ebd1-3c34-4068-b20e-135d87b16761"), 20000.0, "Mua sắm hộ siêu nhanh", null, null, "Đi mua vé xem phim", new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f") },
                    { new Guid("706c658f-7621-43f1-b12b-421efba7fb41"), 60000.0, "Mua sắm hộ siêu nhanh", null, null, "Đi mua quần áo", new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f") },
                    { new Guid("89343ddd-beb2-4a0a-bc27-19833309c70f"), 50000.0, "Mua sắm hộ siêu nhanh", null, null, "Đi siêu thị hộ", new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f") },
                    { new Guid("8f65982a-7eea-4f42-a518-1b52e1fd7d01"), 200000.0, "Sửa máy giặt", null, null, "Sửa máy giặt", new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a") },
                    { new Guid("9c1037af-54ba-45c2-bdad-c889a7e77f06"), 100000.0, "Mua sắm hộ siêu nhanh", null, null, "Đi siêu thị sang trọng", new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f") },
                    { new Guid("ac8152dd-a816-401d-88f3-92592c634a55"), 200000.0, "Hãy yên tâm không nổ đâu", null, null, "Sửa máy tính laptop", new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a") },
                    { new Guid("b0289dc1-5d40-41f9-ba23-4f0a43caead6"), 200000.0, "Sửa chữa để tôi lo", null, null, "Sửa bàn ủi", new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a") },
                    { new Guid("b8df43cc-8ad2-4bf5-80c4-783f6d7cdf8c"), 200000.0, "Sửa chữa để tôi lo", null, null, "Sửa máy lạnh", new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a") },
                    { new Guid("d1759901-36be-4643-b1dc-06988d02df07"), 300000.0, "Mua sắm hộ siêu nhanh", null, null, "Đi mua giày camping", new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f") },
                    { new Guid("ea0bff4e-c0c1-4d7d-83ac-95bd7eea27e6"), 4000000.0, "Mua sắm hộ siêu nhanh", null, null, "Đi mua vé concert", new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f") },
                    { new Guid("ea17a32e-ef00-418a-8ece-e78efd5eef14"), 200000.0, "Sửa chữa để tôi lo", null, null, "Sửa ống nước", new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a") },
                    { new Guid("f4dc9e54-ccf3-403f-a8ef-04fcd5ca980f"), 200000.0, "Sửa chữa để tôi lo", null, null, "Sửa tivi", new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a") }
                });

            migrationBuilder.InsertData(
                table: "UIElementAdditionServiceRequirements",
                columns: new[] { "Id", "AutoSelect", "Icon", "Key", "Label", "ServiceTypeId" },
                values: new object[,]
                {
                    { new Guid("000a661a-4ea1-4e1f-92d3-d57c1f018f1a"), true, "faDog", "hasPets", "Nhà có thú cưng", new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603") },
                    { new Guid("3d7d7b97-ae07-4bce-bb26-aa0e898d44d0"), false, "faBroom", "freelancerBringTools", "Nhân viên tự mang theo dụng cụ", new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603") },
                    { new Guid("7686ddfd-fb8f-4ab3-a8e9-61137f32f746"), false, "faComputer", "hasElectronics", "Nhà có nhiều đồ điện tử", new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603") }
                });

            migrationBuilder.InsertData(
                table: "UIElementInputOptions",
                columns: new[] { "Id", "Description", "InputMethodTypeId", "Name" },
                values: new object[,]
                {
                    { new Guid("073709d9-c03b-4a78-8bb8-b345fa2acc07"), "Tất cả dịch vụ, dọn toàn bộ nhà / phòng", new Guid("89e6f2f5-15cc-470c-a363-427ee8646609"), "Dọn trọn gói" },
                    { new Guid("821be71d-0ea7-4d00-866b-d2085795ee2e"), "Trung bình 50.000đ / phòng, tiết kiệm và nhanh chóng", new Guid("89e6f2f5-15cc-470c-a363-427ee8646609"), "Dọn theo phòng" }
                });

            migrationBuilder.InsertData(
                table: "UIElementServiceRequirements",
                columns: new[] { "Id", "InputMethodId", "Key", "Label", "LabelIcon", "Placeholder", "ServiceTypeId" },
                values: new object[,]
                {
                    { new Guid("7227416c-a449-4b99-b57c-69e9a311b903"), new Guid("42b3fce8-5392-4bfd-97a2-0b84532a4b67"), "roomNumber", "Số lượng phòng", "faPersonShelter", "Lưu ý: Nếu bạn chọn dịch vụ dọn theo phòng, vui lòng bổ sung số phòng cần dọn ở đây", new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603") },
                    { new Guid("7a9104e3-ce99-41a9-bd7b-ebf347eefbcc"), new Guid("0ad2fdde-73c5-433c-99f8-95e9c9df32a4"), "cleanningType", "Bạn muốn chúng tôi dọn như thế nào?", "faFlag", "Giúp nhân viên biết thêm về công việc cần làm", new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603") },
                    { new Guid("83a35967-f24d-4c1c-bb30-d1dfb75cbc08"), new Guid("95b69f6f-c8a5-4b94-824b-214bb7435c4f"), "addressLine", "Số nhà, số phòng, hẻm (ngõ)", null, "Ví dụ: 257/43 Phòng 2014 Căn hộ Sunrise Continent", new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603") }
                });

            migrationBuilder.InsertData(
                table: "UIElementValidationTypes",
                columns: new[] { "Id", "InputMethodId", "Message", "Name", "Value" },
                values: new object[,]
                {
                    { new Guid("6cbd39e4-23b5-4606-95f0-8876c025beb3"), new Guid("42b3fce8-5392-4bfd-97a2-0b84532a4b67"), "Thông báo valid input 3 custom 2.", "min", "0" },
                    { new Guid("6de1977b-9370-49c0-8e05-5c0ea9aec20d"), new Guid("95b69f6f-c8a5-4b94-824b-214bb7435c4f"), "Thông báo valid input 1 custom 3.", "max", "255" },
                    { new Guid("74a53bc4-06d2-4f14-b1c4-f2cbf28b3027"), new Guid("95b69f6f-c8a5-4b94-824b-214bb7435c4f"), "Thông báo valid input 1 custom 2.", "min", "0" },
                    { new Guid("7536d579-fd81-408f-bd8e-7ad3d96d9fbf"), new Guid("0ad2fdde-73c5-433c-99f8-95e9c9df32a4"), "Thông báo valid input 2 custom 1.", "required", null },
                    { new Guid("7a771c93-6950-4ca5-b0e6-3250223aa64b"), new Guid("95b69f6f-c8a5-4b94-824b-214bb7435c4f"), "Thông báo valid input 1 custom 1.", "required", null },
                    { new Guid("d6b4537d-b39a-43c3-9f20-05e6eb0013e0"), new Guid("42b3fce8-5392-4bfd-97a2-0b84532a4b67"), "Thông báo valid input 3 custom 3.", "max", "10" },
                    { new Guid("dd84c818-d28c-4163-9429-a1850f2d11f1"), new Guid("42b3fce8-5392-4bfd-97a2-0b84532a4b67"), "Thông báo valid input 3 custom 1.", "required", null }
                });

            migrationBuilder.CreateIndex(
                name: "IX_PaymentHistories_FreelanceAccountId",
                table: "PaymentHistories",
                column: "FreelanceAccountId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PaymentHistories");

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("20caafd9-a543-4eda-8be8-0485b1611c7a"));

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("62a3297b-ac1d-463c-bec8-8fbe5d52553e"));

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("63a2ebd1-3c34-4068-b20e-135d87b16761"));

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("706c658f-7621-43f1-b12b-421efba7fb41"));

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("89343ddd-beb2-4a0a-bc27-19833309c70f"));

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("8f65982a-7eea-4f42-a518-1b52e1fd7d01"));

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("9c1037af-54ba-45c2-bdad-c889a7e77f06"));

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("ac8152dd-a816-401d-88f3-92592c634a55"));

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("b0289dc1-5d40-41f9-ba23-4f0a43caead6"));

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("b8df43cc-8ad2-4bf5-80c4-783f6d7cdf8c"));

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("d1759901-36be-4643-b1dc-06988d02df07"));

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("ea0bff4e-c0c1-4d7d-83ac-95bd7eea27e6"));

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("ea17a32e-ef00-418a-8ece-e78efd5eef14"));

            migrationBuilder.DeleteData(
                table: "ServiceTypes",
                keyColumn: "Id",
                keyValue: new Guid("f4dc9e54-ccf3-403f-a8ef-04fcd5ca980f"));

            migrationBuilder.DeleteData(
                table: "UIElementAdditionServiceRequirements",
                keyColumn: "Id",
                keyValue: new Guid("000a661a-4ea1-4e1f-92d3-d57c1f018f1a"));

            migrationBuilder.DeleteData(
                table: "UIElementAdditionServiceRequirements",
                keyColumn: "Id",
                keyValue: new Guid("3d7d7b97-ae07-4bce-bb26-aa0e898d44d0"));

            migrationBuilder.DeleteData(
                table: "UIElementAdditionServiceRequirements",
                keyColumn: "Id",
                keyValue: new Guid("7686ddfd-fb8f-4ab3-a8e9-61137f32f746"));

            migrationBuilder.DeleteData(
                table: "UIElementInputOptions",
                keyColumn: "Id",
                keyValue: new Guid("073709d9-c03b-4a78-8bb8-b345fa2acc07"));

            migrationBuilder.DeleteData(
                table: "UIElementInputOptions",
                keyColumn: "Id",
                keyValue: new Guid("821be71d-0ea7-4d00-866b-d2085795ee2e"));

            migrationBuilder.DeleteData(
                table: "UIElementServiceRequirements",
                keyColumn: "Id",
                keyValue: new Guid("7227416c-a449-4b99-b57c-69e9a311b903"));

            migrationBuilder.DeleteData(
                table: "UIElementServiceRequirements",
                keyColumn: "Id",
                keyValue: new Guid("7a9104e3-ce99-41a9-bd7b-ebf347eefbcc"));

            migrationBuilder.DeleteData(
                table: "UIElementServiceRequirements",
                keyColumn: "Id",
                keyValue: new Guid("83a35967-f24d-4c1c-bb30-d1dfb75cbc08"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("6cbd39e4-23b5-4606-95f0-8876c025beb3"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("6de1977b-9370-49c0-8e05-5c0ea9aec20d"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("74a53bc4-06d2-4f14-b1c4-f2cbf28b3027"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("7536d579-fd81-408f-bd8e-7ad3d96d9fbf"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("7a771c93-6950-4ca5-b0e6-3250223aa64b"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("d6b4537d-b39a-43c3-9f20-05e6eb0013e0"));

            migrationBuilder.DeleteData(
                table: "UIElementValidationTypes",
                keyColumn: "Id",
                keyValue: new Guid("dd84c818-d28c-4163-9429-a1850f2d11f1"));

            migrationBuilder.DropColumn(
                name: "Keys",
                table: "ServiceTypes");

            migrationBuilder.DropColumn(
                name: "Keys",
                table: "ServiceCategories");

            migrationBuilder.AlterColumn<DateTime>(
                name: "FinishTime",
                table: "Orders",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);

            migrationBuilder.InsertData(
                table: "ServiceTypes",
                columns: new[] { "Id", "BasePrice", "Description", "Image", "Name", "ServiceCategoryId" },
                values: new object[,]
                {
                    { new Guid("07ca331e-73a3-4eb2-9da1-f861ffdd2a8e"), 40000.0, "Mua sắm hộ siêu nhanh", null, "Đi chợ hộ", new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f") },
                    { new Guid("1771a935-162c-4f76-8a95-285d0a00f9d9"), 60000.0, "Mua sắm hộ siêu nhanh", null, "Đi mua quần áo", new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f") },
                    { new Guid("2090ae0c-bc60-4662-b5f4-4222ba69de58"), 20000.0, "Mua sắm hộ siêu nhanh", null, "Đi mua vé xem phim", new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f") },
                    { new Guid("2a60f914-f800-4fee-b50d-a8ff5167fc29"), 4000000.0, "Mua sắm hộ siêu nhanh", null, "Đi mua vé concert", new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f") },
                    { new Guid("34e99599-cfe8-466f-8bc0-f9c73227f679"), 300000.0, "Mua sắm hộ siêu nhanh", null, "Đi mua giày camping", new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f") },
                    { new Guid("3693de53-bf00-4f20-91ea-5cc2f9b98f56"), 200000.0, "Hãy yên tâm không nổ đâu", null, "Sửa máy tính laptop", new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a") },
                    { new Guid("8a5f1726-9685-4b25-a580-54830492b3b2"), 200000.0, "Sửa chữa để tôi lo", null, "Sửa máy lạnh", new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a") },
                    { new Guid("8c3b4979-8420-490f-8ab1-64b53fa72e7e"), 200000.0, "Sửa máy giặt", null, "Sửa máy giặt", new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a") },
                    { new Guid("9230c6a2-7ed9-4dd7-9434-617dfaa5bec4"), 100000.0, "Mua sắm hộ siêu nhanh", null, "Đi siêu thị sang trọng", new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f") },
                    { new Guid("ba448130-4211-40e4-9008-e20b6f8315ca"), 200000.0, "Sửa chữa để tôi lo", null, "Sửa ống nước", new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a") },
                    { new Guid("c8aedfcf-166e-4ad9-873c-025d3f4dfca4"), 50000000.0, "Hãy yên tâm không nổ đâu", null, "Sửa bình gas", new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a") },
                    { new Guid("da68e302-bffa-4440-836f-2993b53ec327"), 200000.0, "Sửa chữa để tôi lo", null, "Sửa tivi", new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a") },
                    { new Guid("e357504a-1715-4bd9-9436-bc61c31580b1"), 50000.0, "Mua sắm hộ siêu nhanh", null, "Đi siêu thị hộ", new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f") },
                    { new Guid("e9178ae3-c459-45e5-afc3-580826d949f8"), 200000.0, "Sửa chữa để tôi lo", null, "Sửa bàn ủi", new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a") }
                });

            migrationBuilder.InsertData(
                table: "UIElementAdditionServiceRequirements",
                columns: new[] { "Id", "AutoSelect", "Icon", "Key", "Label", "ServiceTypeId" },
                values: new object[,]
                {
                    { new Guid("07f6d588-483e-4436-8d3c-072568c9ec6d"), true, "faDog", "hasPets", "Nhà có thú cưng", new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603") },
                    { new Guid("0a82741a-1792-4605-94b9-efbba0c8ae85"), false, "faComputer", "hasElectronics", "Nhà có nhiều đồ điện tử", new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603") },
                    { new Guid("3918c631-125d-4c7d-a6e8-f37c8868e743"), false, "faBroom", "freelancerBringTools", "Nhân viên tự mang theo dụng cụ", new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603") }
                });

            migrationBuilder.InsertData(
                table: "UIElementInputOptions",
                columns: new[] { "Id", "Description", "InputMethodTypeId", "Name" },
                values: new object[,]
                {
                    { new Guid("5d8d64dc-c102-42bb-9d78-1e3a3b00cccd"), "Trung bình 50.000đ / phòng, tiết kiệm và nhanh chóng", new Guid("89e6f2f5-15cc-470c-a363-427ee8646609"), "Dọn theo phòng" },
                    { new Guid("8c642513-6677-4a62-b09f-6947f1047f0a"), "Tất cả dịch vụ, dọn toàn bộ nhà / phòng", new Guid("89e6f2f5-15cc-470c-a363-427ee8646609"), "Dọn trọn gói" }
                });

            migrationBuilder.InsertData(
                table: "UIElementServiceRequirements",
                columns: new[] { "Id", "InputMethodId", "Key", "Label", "LabelIcon", "Placeholder", "ServiceTypeId" },
                values: new object[,]
                {
                    { new Guid("0ad53c9b-a76c-434f-8186-5f9a763f699a"), new Guid("95b69f6f-c8a5-4b94-824b-214bb7435c4f"), "addressLine", "Số nhà, số phòng, hẻm (ngõ)", null, "Ví dụ: 257/43 Phòng 2014 Căn hộ Sunrise Continent", new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603") },
                    { new Guid("2b464f08-1a33-445f-accf-e519fae0832b"), new Guid("0ad2fdde-73c5-433c-99f8-95e9c9df32a4"), "cleanningType", "Bạn muốn chúng tôi dọn như thế nào?", "faFlag", "Giúp nhân viên biết thêm về công việc cần làm", new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603") },
                    { new Guid("57438eb0-ac24-4670-a3d5-e8371146cd61"), new Guid("42b3fce8-5392-4bfd-97a2-0b84532a4b67"), "roomNumber", "Số lượng phòng", "faPersonShelter", "Lưu ý: Nếu bạn chọn dịch vụ dọn theo phòng, vui lòng bổ sung số phòng cần dọn ở đây", new Guid("3b8a2d6a-b0e7-46af-a688-397cea642603") }
                });

            migrationBuilder.InsertData(
                table: "UIElementValidationTypes",
                columns: new[] { "Id", "InputMethodId", "Message", "Name", "Value" },
                values: new object[,]
                {
                    { new Guid("0488f5d9-0de6-41ef-8ff7-142e2fc682b3"), new Guid("42b3fce8-5392-4bfd-97a2-0b84532a4b67"), "Thông báo valid input 3 custom 3.", "max", "10" },
                    { new Guid("645ac0ce-6ed6-4da9-bb2b-91274d2e1000"), new Guid("95b69f6f-c8a5-4b94-824b-214bb7435c4f"), "Thông báo valid input 1 custom 3.", "max", "255" },
                    { new Guid("79c3dad2-f000-4013-bd86-37a8cfd40160"), new Guid("95b69f6f-c8a5-4b94-824b-214bb7435c4f"), "Thông báo valid input 1 custom 1.", "required", null },
                    { new Guid("97370655-805d-4780-b63c-2c6691a59cd0"), new Guid("95b69f6f-c8a5-4b94-824b-214bb7435c4f"), "Thông báo valid input 1 custom 2.", "min", "0" },
                    { new Guid("aa8e998d-7dd7-4b02-a12a-b84160ae4ee9"), new Guid("42b3fce8-5392-4bfd-97a2-0b84532a4b67"), "Thông báo valid input 3 custom 1.", "required", null },
                    { new Guid("ae6659d3-6ce6-41d4-9365-7c71c01aba84"), new Guid("42b3fce8-5392-4bfd-97a2-0b84532a4b67"), "Thông báo valid input 3 custom 2.", "min", "0" },
                    { new Guid("d5e508f8-9a20-447b-bc12-be180159fdea"), new Guid("0ad2fdde-73c5-433c-99f8-95e9c9df32a4"), "Thông báo valid input 2 custom 1.", "required", null }
                });
        }
    }
}
