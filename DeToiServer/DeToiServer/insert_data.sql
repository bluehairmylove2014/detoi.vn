-- DELETE ALL!!!
Delete from [OrderServiceType];
Delete from [OrderService];
Delete from [Orders];
Delete from [Services];

Delete from [FreelanceSkills];
Delete from [Skills];

Delete from [Addresses];
Delete from [Freelancers];
Delete from [Customers];
Delete from [Accounts];

DELETE FROM [ServiceTypes] Where [Id] not in (
'3B8A2D6A-B0E7-46AF-A688-397CEA642603',
'49A42267-D9DC-4E11-87A5-36525D4254D9',
'EF2632F0-47BD-4BBE-A46F-628A28F03D8B',
'DBB78597-043D-47C1-8810-93D392FD09BA');

INSERT INTO [ServiceTypes] ([Id], [Name], [BasePrice], [Description], [ServiceCategoryId], [Image], [Keys]) VALUES
('96D250D4-0C0E-4521-B94E-05F3CAFCA3F3', N'Đi mua giày camping', 300000.0, N'Mua sắm hộ siêu nhanh', '6F57D993-EB26-4B35-8C7D-7871A7FD624F', null, null),
('73BF981F-1CFD-483D-80EE-14AB6D2E55EF', N'Đi mua quần áo', 60000.0, N'Mua sắm hộ siêu nhanh', '6F57D993-EB26-4B35-8C7D-7871A7FD624F', null, null),
('3779D349-ABCB-4DBC-ABF1-25BA9E94A695', N'Đi siêu thị sang trọng', 100000.0, N'Mua sắm hộ siêu nhanh', '6F57D993-EB26-4B35-8C7D-7871A7FD624F', null, null),
('3361BC88-9F58-4BE8-AC37-561606430F8A', N'Đi mua vé xem phim', 20000.0, N'Mua sắm hộ siêu nhanh', '6F57D993-EB26-4B35-8C7D-7871A7FD624F', null, null),
('07CB166A-4B4E-4637-B224-6277A69003D9', N'Đi mua vé concert', 4000000.0, N'Mua sắm hộ siêu nhanh', '6F57D993-EB26-4B35-8C7D-7871A7FD624F', null, null),
('C82954A1-39D4-4012-86B3-6CAD42C2B399', N'Sửa máy giặt', 200000.0, N'Sửa máy giặt', '8A21B21E-DC31-49C8-8B5B-84B69204DC3A', null, null),
('63CE2EBF-EF36-4B4A-891E-ABBDE2A75B38', N'Sửa bàn ủi', 200000.0, N'Sửa chữa để tôi lo', '8A21B21E-DC31-49C8-8B5B-84B69204DC3A', null, null),
('F1B832B2-49F3-456F-BACB-B1F8DA766BEA', N'Sửa máy tính laptop', 200000.0, N'Hãy yên tâm không nổ đâu', '8A21B21E-DC31-49C8-8B5B-84B69204DC3A', null, null),
('B9F74F9E-F792-4C48-B1B6-B6F0BC402D07', N'Đi chợ hộ', 40000.0, N'Mua sắm hộ siêu nhanh', '6F57D993-EB26-4B35-8C7D-7871A7FD624F', null, null),
('88006A8C-D757-4B85-8B91-C88E6078FE9C', N'Sửa tivi', 200000.0, N'Sửa chữa để tôi lo', '8A21B21E-DC31-49C8-8B5B-84B69204DC3A', null, null),
('662A64BE-F7EA-4419-8978-DBF8F19159DC', N'Sửa bình gas', 50000000.0, N'Hãy yên tâm không nổ đâu', '8A21B21E-DC31-49C8-8B5B-84B69204DC3A', null, null),
('EF2034C1-7F44-4D07-B9C0-E2A497999A9D', N'Sửa ống nước', 200000.0, N'Sửa chữa để tôi lo', '8A21B21E-DC31-49C8-8B5B-84B69204DC3A', null, null),
('CCA752D4-C17C-4C31-906F-F33CB8A18E48', N'Đi siêu thị hộ', 50000.0, N'Mua sắm hộ siêu nhanh', '6F57D993-EB26-4B35-8C7D-7871A7FD624F', null, null),
('A5677DE0-A6A7-42C0-AB77-F34B75BEB63D', N'Sửa máy lạnh', 200000.0, N'Sửa chữa để tôi lo', '8A21B21E-DC31-49C8-8B5B-84B69204DC3A', null, null); 

INSERT INTO [Accounts] ([Id], [Email], [FullName], [DateOfBirth], [Phone], [Role], [Avatar], [RefreshToken], [LoginToken], [LoginTokenExpires], [TokenCreated], [TokenExpires], [IsActive], [IsVerified]) VALUES
('f2396ec5-dc31-49f9-ab49-6943a2cba7e0', null, N'Phan Hữu Tường', '1988-08-16', '0985303167', 'Customer', 'https://detoivn.sirv.com/customer_avt/user-avt%20(1).png', 'string', 'default', '2024-03-19T15:42:13.983840', '2024-03-19 15:32:13.983840', '2024-03-19 15:42:13.983840', 1, 1),
('9d64ec51-6054-457c-988c-25794c77e166', null, N'Hoàng Linh Nhi', '2002-03-05', '0861709636', 'Freelancer', 'https://detoivn.sirv.com/customer_avt/user-avt%20(1).png', 'string', 'default', '2024-03-19T15:42:13.985842', '2024-03-19 15:32:13.985842', '2024-03-19 15:42:13.985842', 1, 1),
('0b4a77f6-df10-451d-8fca-02276ab5fcd9', null, N'Trương Diễm Lệ', '2002-05-16', '0832188881', 'Customer', 'https://detoivn.sirv.com/customer_avt/user-avt%20(2).png', 'string', 'default', '2024-03-19T15:42:13.986839', '2024-03-19 15:32:13.986839', '2024-03-19 15:42:13.986839', 1, 1),
('0105da90-d1e1-40b3-beba-c9d6f98131dd', null, N'Vũ Trần Quang Tuấn', '1989-08-01', '0946655273', 'Freelancer', 'https://detoivn.sirv.com/customer_avt/user-avt%20(2).png', 'string', 'default', '2024-03-19T15:42:13.987839', '2024-03-19 15:32:13.987839', '2024-03-19 15:42:13.987839', 1, 1),
('924b872a-1f3c-475c-a329-e65577112d73', null, N'Vũ Tuấn Khanh', '1978-03-11', '0984321386', 'Customer', 'https://detoivn.sirv.com/customer_avt/user-avt%20(2).png', 'string', 'default', '2024-03-19T15:42:13.989343', '2024-03-19 15:32:13.989343', '2024-03-19 15:42:13.989343', 1, 1),
('4e8d3872-7edf-4729-9243-1737065197d9', null, N'Phạm Khắc Vũ', '1993-07-01', '0943489772', 'Freelancer', 'https://detoivn.sirv.com/customer_avt/user-avt%20(3).png', 'string', 'default', '2024-03-19T15:42:13.990355', '2024-03-19 15:32:13.990355', '2024-03-19 15:42:13.990355', 1, 1),
('f4647339-28c8-499e-8b2e-54ac29d81a58', null, N'Trương Hữu Canh', '2003-11-15', '0939090201', 'Freelancer', 'https://detoivn.sirv.com/customer_avt/user-avt%20(2).png', 'string', 'default', '2024-03-19T15:42:13.991354', '2024-03-19 15:32:13.991354', '2024-03-19 15:42:13.991354', 1, 1),
('ee830a2e-f71d-41fd-82c6-4461f9032283', null, N'Trương Dương Hoàng Hải', '1977-06-11', '0373132537', 'Customer', 'https://detoivn.sirv.com/customer_avt/user-avt%20(2).png', 'string', 'default', '2024-03-19T15:42:13.992357', '2024-03-19 15:32:13.992357', '2024-03-19 15:42:13.992357', 1, 1),
('cb25ab27-5582-471e-9921-89fc10ef13b4', null, N'Trần Khôi Nguyên', '1986-07-20', '0917234105', 'Customer', 'https://detoivn.sirv.com/customer_avt/user-avt%20(1).png', 'string', 'default', '2024-03-19T15:42:13.993866', '2024-03-19 15:32:13.993866', '2024-03-19 15:42:13.993866', 1, 1),
('af017c1c-8864-491b-9560-69ede191fc4c', null, N'Trần Tuấn Tú', '2004-12-31', '0969156496', 'Freelancer', 'https://detoivn.sirv.com/customer_avt/user-avt%20(2).png', 'string', 'default', '2024-03-19T15:42:13.994878', '2024-03-19 15:32:13.994878', '2024-03-19 15:42:13.994878', 1, 1); 

INSERT INTO [Freelancers] ([Id], [AccountId], [Rating], [TotalReviewCount], [Balance], [OrderCount], [LoveCount], [PositiveReviewCount], [IdentityNumber], [IsTeam], [Description], [TeamMemberCount]) VALUES
('3e302e43-08a7-4eac-b50c-b331287927d2', '9d64ec51-6054-457c-988c-25794c77e166', 0, 0, 0, 0, 0, 0, '051200000011', 1, 'Fire happen nothing support suffer which parent. Republican total policy head Mrs debate onto. Catch even front. Responsibility full per among clearly word.', 4),
('b2359a87-2498-4707-9881-14e1e7cbe958', '0105da90-d1e1-40b3-beba-c9d6f98131dd', 0, 0, 0, 0, 0, 0, '051200000012', 1, 'Record interview few same. Turn phone heart window. Assume be seek article. Better news face. Small research describe base detail yourself one. Issue grow ask tell.', 2),
('565593f8-7020-44b9-b776-09c25098408c', '4e8d3872-7edf-4729-9243-1737065197d9', 0, 0, 0, 0, 0, 0, '051200000013', 0, 'Many true follow marriage material prove dark. Use act relationship section five focus modern themselves. Six success on responsibility southern at be than. At candidate feel. Former claim chance prevent why measure too.', 1),
('b97823a0-ffd2-4a46-b8f3-371042105084', 'f4647339-28c8-499e-8b2e-54ac29d81a58', 0, 0, 0, 0, 0, 0, '051200000014', 0, 'Surface something prevent a consider. Now four management energy stay significant his. Artist political camera expert stop area. Loss cell three. Response purpose character would in partner hit another. Sing after our car food record power.', 1),
('4b56ad1e-d920-40db-9961-c4c3b7538525', 'af017c1c-8864-491b-9560-69ede191fc4c', 0, 0, 0, 0, 0, 0, '051200000015', 1, 'Occur democratic behavior standard thousand single recognize. Medical watch certainly through instead base. Indeed between similar safe. Social issue indicate. Try while reveal bad audience grow ahead. Concern store discover hand others century.', 2); 

INSERT INTO [Customers] ([Id], [AccountId], [CustomerRank], [MemberPoint]) VALUES
('7a5a507d-549f-499d-8d67-229a116aa1f4', 'f2396ec5-dc31-49f9-ab49-6943a2cba7e0', 'Unranked', 0),
('5c72491e-9c5e-4088-a663-06a74c45a0b7', '0b4a77f6-df10-451d-8fca-02276ab5fcd9', 'Unranked', 0),
('6aff6726-f62c-4240-b551-4de261ccb1f9', '924b872a-1f3c-475c-a329-e65577112d73', 'Unranked', 0),
('707944fc-dd3c-483d-a4bf-bcc508e45b10', 'ee830a2e-f71d-41fd-82c6-4461f9032283', 'Unranked', 0),
('d9149943-cd70-4851-a028-7288392a4b60', 'cb25ab27-5582-471e-9921-89fc10ef13b4', 'Unranked', 0); 

INSERT INTO [Addresses] ([Id], [Lat], [Lon], [CustomerAccountId], [FreelanceAccountId], [AddressLine], [Ward], [District], [Province], [Country]) VALUES
('b7df0bbe-2920-451a-bf30-7bd8a5a91e3f', 10.849668272457585, 106.66292679710298, '7a5a507d-549f-499d-8d67-229a116aa1f4', null, 'test address', N'Phường 13', N'Quận Tân Bình', N'Thành phố Hồ Chí Minh', N'Việt Nam'),
('59ceeb6b-8860-4a9d-a653-8afaf4dd707b', 10.850701692121717, 106.8229367487685, null, '3e302e43-08a7-4eac-b50c-b331287927d2', 'test address', N'Phường An Lạc', N'Quận Bình Tân', N'Thành phố Hồ Chí Minh', N'Việt Nam'),
('fec83a1a-0a97-4e2b-aead-8f92dbaf8bcc', 10.701878723565986, 106.92058284997378, '5c72491e-9c5e-4088-a663-06a74c45a0b7', null, 'test address', N'Phường 1', N'Quận 10', N'Thành phố Hồ Chí Minh', N'Việt Nam'),
('ffac3242-2130-4394-949e-bee4eed4284d', 10.529226905399888, 106.88621353348147, null, 'b2359a87-2498-4707-9881-14e1e7cbe958', 'test address', N'Phường 15', N'Quận Bình Thạnh', N'Thành phố Hồ Chí Minh', N'Việt Nam'),
('bf68b15b-e755-429d-b73a-6076e4ca4d61', 10.554488526821784, 106.81345193041449, '6aff6726-f62c-4240-b551-4de261ccb1f9', null, 'test address', N'Phường 4', N'Quận 8', N'Thành phố Hồ Chí Minh', N'Việt Nam'),
('b7e89545-e1fb-49a7-82ad-e98a28f84367', 10.693762139468387, 106.61860948429704, null, '565593f8-7020-44b9-b776-09c25098408c', 'test address', N'Phường 15', N'Quận 5', N'Thành phố Hồ Chí Minh', N'Việt Nam'),
('7e2ea69a-9a47-4a2e-9953-1f7def55939d', 10.688494431424978, 106.66280674714032, null, 'b97823a0-ffd2-4a46-b8f3-371042105084', 'test address', N'Phường Phước Bình', N'Quận 9', N'Thành phố Hồ Chí Minh', N'Việt Nam'),
('48b03460-01a4-4f28-9ad4-bc02b277838e', 10.835859350710932, 106.96882172931987, '707944fc-dd3c-483d-a4bf-bcc508e45b10', null, 'test address', N'Xã Lê Minh Xuân', N'Huyện Bình Chánh', N'Thành phố Hồ Chí Minh', N'Việt Nam'),
('653b8e9b-4761-495a-8604-f367f862afa5', 10.729411130127797, 106.82328965271047, 'd9149943-cd70-4851-a028-7288392a4b60', null, 'test address', N'Phường Bình Thọ', N'Thành phố Thủ Đức', N'Thành phố Hồ Chí Minh', N'Việt Nam'),
('580425d3-a0c7-4d92-95fe-3fc0befbb3ba', 10.790212979422236, 106.88585531888342, null, '4b56ad1e-d920-40db-9961-c4c3b7538525', 'test address', N'Phường Cầu Kho', N'Quận 1', N'Thành phố Hồ Chí Minh', N'Việt Nam'); 

INSERT INTO [Skills] (Id, Name, Description, SkillCategory) VALUES
('1a87348d-768f-4a78-b359-9b4e8f0fd737', 'House Cleaning', 'American whole magazine truth stop whose.', 'CleaningService'),
('a514c7f6-4543-43d8-9bcd-d3e3a0c205ce', 'Office Cleaning', 'Through despite cause cause believe son would mouth.', 'CleaningService'),
('3d5f2fed-2cef-43b8-8970-32c753556f65', 'Deep Cleaning', 'Financial role together range.', 'CleaningService'),
('d7640d96-6fc9-485b-b5be-65d29b4c4283', 'Carpet Cleaning', 'Beyond its particularly tree whom local tend.', 'CleaningService'),
('fb861009-51c1-4714-8f0a-5ac4be174eb7', 'Window Cleaning', 'Source nature add rest.', 'CleaningService'),
('991320d9-9196-4225-911d-c904b7a904c7', 'Maid Service', 'Ability management test during foot that course nothing.', 'CleaningService'),
('cdf8ad4b-f6c5-4b60-9d84-a7f3b9125bc8', 'Janitorial Service', 'Sort language ball floor.', 'CleaningService'),
('398d4b18-4b59-4d4d-ad3d-a903322937c5', 'Disinfection Service', 'Board necessary religious natural sport music white.', 'CleaningService'),
('ec7e4a02-611b-4637-8f7d-1560f735eef1', 'Eco-friendly Cleaning', 'Onto knowledge other his offer face country.', 'CleaningService'),
('d034bdd9-cd14-4831-a900-eadc9d99d74f', 'Move-in/Move-out Cleaning', 'Party prevent live.', 'CleaningService'),
('d377cda8-91d0-492b-8e4c-0db220ae52ff', 'Appliance Repair', 'Theory type successful together.', 'RepairingService'),
('cd47dff3-8a88-47d3-903e-cfc1860ea0c3', 'Refrigerator Repair', 'Study modern miss dog Democrat quickly.', 'RepairingService'),
('3da05a77-ee7c-4ebf-a6e0-0503e2ca99ae', 'Washer/Dryer Repair', 'Every manage political record word group food break.', 'RepairingService'),
('d9a6d05e-67ef-4daa-a94b-1a0f0cfe4bcb', 'Oven/Range Repair', 'Friend couple administration even relate head color international.', 'RepairingService'),
('f747e657-604b-4cd6-8988-0fdba9d454b2', 'Dishwasher Repair', 'Situation talk despite stage.', 'RepairingService'),
('12f685b6-1e6f-4ad3-82c9-12cb84c56a7c', 'HVAC Repair', 'Quite ago play paper office hospital have wonder.', 'RepairingService'),
('127e6a0e-7b6a-417b-af73-01772447f61c', 'Plumbing Repair', 'Against which continue buy decision song view age.', 'RepairingService'),
('6f69a12f-7ac9-49d7-ba73-4be1ad63b622', 'Electrical Repair', 'Big employee determine positive go Congress mean always.', 'RepairingService'),
('50663a2e-a3d7-4dea-a77c-29ade198437c', 'Small Appliance Repair', 'Current grow rule stuff truth college.', 'RepairingService'),
('ab680223-1d7c-41b0-a635-8e47d5dcfb00', 'Garbage Disposal Repair', 'Small citizen class morning.', 'RepairingService'),
('96cc285d-891a-4f2f-96ed-c1e262034e84', 'Personal Shopping', 'Tv program actually race tonight themselves true power.', 'ShoppingService'),
('ffdad5a3-b56c-4da2-8b50-299e8b500cde', 'Grocery Shopping', 'Check real leader bad school.', 'ShoppingService'),
('f6962fd8-1421-4e56-ac37-9d26f1880253', 'Errand Service', 'Care several loss particular pull.', 'ShoppingService'),
('bd0175f0-1e87-425b-8b49-87456c29d9e1', 'Shopping Assistance', 'Car financial security stock ball organization recognize civil.', 'ShoppingService'),
('ef329fd0-1ad5-4109-be0b-82def3e3aac3', 'Gift Shopping', 'Her then nothing increase I reduce industry.', 'ShoppingService'),
('ed331916-9ee2-4dc9-aafd-980a1e56639a', 'Online Shopping', 'Knowledge else citizen month.', 'ShoppingService'),
('4ebe4915-713a-4328-973f-739a56727c5d', 'Bulk Shopping', 'Page a although for study anyone state.', 'ShoppingService'),
('876f8f69-2517-47e9-8b9e-923073be08e3', 'Specialty Store Shopping', 'Nature white without study candidate.', 'ShoppingService'),
('e1b462ac-f7f9-4d9c-91f3-ab6c74de2fad', 'Holiday Shopping', 'Wear individual about add senior woman.', 'ShoppingService'),
('90908303-2096-4513-b985-80913641ccad', 'Fashion Styling', 'Best budget power them evidence without beyond take.', 'ShoppingService'); 

INSERT INTO [FreelanceSkills] ([FreelancerId], [SkillId]) VALUES
('3e302e43-08a7-4eac-b50c-b331287927d2', '3da05a77-ee7c-4ebf-a6e0-0503e2ca99ae'),
('3e302e43-08a7-4eac-b50c-b331287927d2', '6f69a12f-7ac9-49d7-ba73-4be1ad63b622'),
('3e302e43-08a7-4eac-b50c-b331287927d2', 'fb861009-51c1-4714-8f0a-5ac4be174eb7'),
('3e302e43-08a7-4eac-b50c-b331287927d2', 'd034bdd9-cd14-4831-a900-eadc9d99d74f'),
('3e302e43-08a7-4eac-b50c-b331287927d2', 'd7640d96-6fc9-485b-b5be-65d29b4c4283'),
('b2359a87-2498-4707-9881-14e1e7cbe958', 'f747e657-604b-4cd6-8988-0fdba9d454b2'),
('b2359a87-2498-4707-9881-14e1e7cbe958', 'ef329fd0-1ad5-4109-be0b-82def3e3aac3'),
('b2359a87-2498-4707-9881-14e1e7cbe958', 'ffdad5a3-b56c-4da2-8b50-299e8b500cde'),
('b2359a87-2498-4707-9881-14e1e7cbe958', 'cdf8ad4b-f6c5-4b60-9d84-a7f3b9125bc8'),
('b2359a87-2498-4707-9881-14e1e7cbe958', 'd7640d96-6fc9-485b-b5be-65d29b4c4283'),
('b2359a87-2498-4707-9881-14e1e7cbe958', '12f685b6-1e6f-4ad3-82c9-12cb84c56a7c'),
('b2359a87-2498-4707-9881-14e1e7cbe958', '3da05a77-ee7c-4ebf-a6e0-0503e2ca99ae'),
('565593f8-7020-44b9-b776-09c25098408c', 'a514c7f6-4543-43d8-9bcd-d3e3a0c205ce'),
('565593f8-7020-44b9-b776-09c25098408c', '50663a2e-a3d7-4dea-a77c-29ade198437c'),
('565593f8-7020-44b9-b776-09c25098408c', '3d5f2fed-2cef-43b8-8970-32c753556f65'),
('565593f8-7020-44b9-b776-09c25098408c', 'ffdad5a3-b56c-4da2-8b50-299e8b500cde'),
('565593f8-7020-44b9-b776-09c25098408c', 'ed331916-9ee2-4dc9-aafd-980a1e56639a'),
('565593f8-7020-44b9-b776-09c25098408c', '127e6a0e-7b6a-417b-af73-01772447f61c'),
('565593f8-7020-44b9-b776-09c25098408c', 'ab680223-1d7c-41b0-a635-8e47d5dcfb00'),
('b97823a0-ffd2-4a46-b8f3-371042105084', '3da05a77-ee7c-4ebf-a6e0-0503e2ca99ae'),
('b97823a0-ffd2-4a46-b8f3-371042105084', 'ed331916-9ee2-4dc9-aafd-980a1e56639a'),
('b97823a0-ffd2-4a46-b8f3-371042105084', 'ef329fd0-1ad5-4109-be0b-82def3e3aac3'),
('b97823a0-ffd2-4a46-b8f3-371042105084', '12f685b6-1e6f-4ad3-82c9-12cb84c56a7c'),
('4b56ad1e-d920-40db-9961-c4c3b7538525', 'ffdad5a3-b56c-4da2-8b50-299e8b500cde'),
('4b56ad1e-d920-40db-9961-c4c3b7538525', 'bd0175f0-1e87-425b-8b49-87456c29d9e1'),
('4b56ad1e-d920-40db-9961-c4c3b7538525', 'e1b462ac-f7f9-4d9c-91f3-ab6c74de2fad'),
('4b56ad1e-d920-40db-9961-c4c3b7538525', 'd7640d96-6fc9-485b-b5be-65d29b4c4283'); 

