using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;

namespace DeToiServerCore.Common.Helper
{
    public static class Helper
    {
        public static string ByteArrayToString(byte[] ba)
        {
            StringBuilder hex = new(ba.Length * 2);
            foreach (byte b in ba)
                hex.AppendFormat("{0:x2}", b);
            return hex.ToString();
        }

        public static byte[] StringToByteArray(String hex)
        {
            int NumberChars = hex.Length;
            byte[] bytes = new byte[NumberChars / 2];
            for (int i = 0; i < NumberChars; i += 2)
                bytes[i / 2] = Convert.ToByte(hex.Substring(i, 2), 16);
            return bytes;
        }

        public static IEnumerable<KeyValuePair<string, object>> GetKeyValuePairs(object obj)
        {
            Type type = obj.GetType();

            PropertyInfo[] properties = type.GetProperties();

            // Iterate through properties and get key-value pairs
            foreach (var property in properties)
            {
                // Get the value of the property with null-check
                object value = property.GetValue(obj) ?? DBNull.Value;

                var kvp = new KeyValuePair<string, object>(property.Name, value);
                yield return kvp;
            }
        }

        private static readonly Dictionary<string, string> patterns = new() {
            { "[àáảãạăắằẵặẳâầấậẫẩ]", "a" },
            { "[đ]", "d" },
            { "[èéẻẽẹêềếểễệ]", "e" },
            { "[ìíỉĩị]", "i" },
            { "[òóỏõọôồốổỗộơờớởỡợ]", "o" },
            { "[ùúủũụưừứửữự]", "u" },
            { "[ỳýỷỹỵ]", "y" }
        };

        public static string VieToEngName(string input)
        {
            foreach (var item in patterns)
            {
                input = Regex.Replace(input, item.Key, item.Value);
                input = Regex.Replace(input, item.Key.ToUpper(), item.Value.ToUpper());
            }

            return input;
        }

        private static readonly Dictionary<string, string> ToConvertEng = new() {
            { "Xã", "Commune" },
            { "Phường", "Ward" },
            { "Thị trấn", "Town" },
            { "Quận", "District" },
            { "Huyện", "District" },
            { "Thành Phố", "City" }
        };

        public static string ToEngPlace(string input)
        {
            foreach (var item in ToConvertEng)
            {
                input = Regex.Replace(input, item.Key, item.Value);
            }
            var test = VieToEngName(input).Split(' ');

            return int.TryParse(test[1], out _)
                ? string.Join(' ', test)
                : string.Join(' ', test.Skip(1).Concat(test.Take(1)));
        }
    }

    public static class LocationHelper
    {
        public static readonly List<string> WardDistrict = ["Phường Bến Nghé", "Phường Bến Thành", "Phường Cô Giang", "Phường Cầu Kho", "Phường Cầu Ông Lãnh", "Phường Đa Kao", "Phường Nguyễn Thái Bình", "Phường Nguyễn Cư Trinh", "Phường Phạm Ngũ Lão", "Phường Tân Định", "Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường Võ Thị Sáu", "Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Phường Bình Thuận", "Phường Phú Mỹ", "Phường Phú Thuận", "Phường Tân Hưng", "Phường Tân Phong", "Phường Tân Phú", "Phường Tân Kiểng", "Phường Tân Quy", "Phường Tân Thuận Đông", "Phường Tân Thuận Tây", "Phường Hiệp Phú", "Phường Long Bình", "Phường Long Phước", "Phường Long Trường", "Phường Long Thạnh Mỹ", "Phường Phú Hữu", "Phường Phước Bình", "Phường Phước Long A", "Phường Phước Long B", "Phường Tăng Nhơn Phú A", "Phường Tăng Nhơn Phú B", "Phường Tân Phú", "Phường Trường Thạnh", "Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Phường 16", "Phường 1", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Phường 16", "Phường 17", "Phường Hòa Thạnh", "Phường Hiệp Tân", "Phường Phú Thạnh", "Phường Phú Thọ Hòa", "Phường Phú Trung", "Phường Sơn Kỳ", "Phường Tân Thành", "Phường Tân Thới Hòa", "Phường Tân Quý", "Phường Tân Sơn Nhì", "Phường Tây Thạnh", "Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Phường 17", "Phường 1", "Phường 2", "Phường 3", "Phường 5", "Phường 6", "Phường 7", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Phường 17", "Phường 19", "Phường 21", "Phường 22", "Phường 24", "Phường 25", "Phường 26", "Phường 27", "Phường 28", "Thị trấn Tân Túc", "Xã Tân Kiên", "Xã Vĩnh Lộc A", "Xã Vĩnh Lộc B", "Xã Tân Quý Tây", "Xã Tân Nhựt", "Xã Qui Đức", "Xã Phong Phú", "Xã Phạm Văn Hai", "Xã Lê Minh Xuân", "Xã Hưng Long", "Xã Đa Phước", "Xã Bình Lợi", "Xã Bình Hưng", "Xã Bình Chánh", "Xã An Phú Tây", "Thị trấn Nhà Bè", "Xã Phú Xuân", "Xã Long Thới", "Xã Hiệp Phước", "Xã Nhơn Đức", "Xã Phước Lộc", "Xã Phước Kiển", "Thị trấn Hóc Môn", "Xã Bà Điểm", "Xã Đông Thạnh", "Xã Nhị Bình", "Xã Tân Hiệp", "Xã Tân Thới Nhì", "Xã Tân Xuân", "Xã Thới Tam Thôn", "Xã Trung Chánh", "Xã Xuân Thới Đông", "Xã Xuân Thới Sơn", "Xã Xuân Thới Thượng", "Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Phường 16", "Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Phường An Phú Đông", "Phường Đông Hưng Thuận", "Phường Hiệp Thành", "Phường Tân Chánh Hiệp", "Phường Tân Thới Hiệp", "Phường Tân Thới Nhất", "Phường Thạnh Lôc", "Phường Thạnh Xuân", "Phường Thới An", "Phường Trung Mỹ Tây", "Phường Tân Hưng Thuận", "Phường Bình Chiểu", "Phường Bình Thọ", "Phường Hiệp Bình Chánh", "Phường Hiệp Bình Phước", "Phường Linh Chiểu", "Phường Linh Đông", "Phường Linh Tây", "Phường Linh Trung", "Phường Linh Xuân", "Phường Tam Bình", "Phường Tam Phú", "Phường Trường Thọ", "Phường An Lạc", "Phường An Lạc A", "Phường Bình Hưng Hòa", "Phường Bình Hưng Hòa A", "Phường Bình Hưng Hòa B", "Phường Bình Trị Đông", "Phường Bình Trị Đông A", "Phường Bình Trị Đông B", "Phường Tân Tạo", "Phường Tân Tạo A", "Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Thị trấn Cần Thạnh", "Xã Thạnh An", "Xã Long Hòa", "Xã Lý Nhơn", "Xã Tam Thôn Hiệp", "Xã An Thới Đông", "Xã Bình Khánh", "Thị trấn Củ Chi", "Xã Trung Lập Thượng", "Xã Trung Lập Hạ", "Xã Thái Mỹ", "Xã Tân Thông Hội", "Xã Tân Thạnh Tây", "Xã Tân Thạnh Đông", "Xã Tân Phú Trung", "Xã Tân An Hội", "Xã Phước Vĩnh An", "Xã Phước Hiệp", "Xã Phước Thạnh", "Xã Phú Hòa Đông", "Xã Phú Mỹ Hưng", "Xã Phạm Văn Cội", "Xã Nhuận Đức", "Xã Bình Mỹ", "Xã An Phú", "Xã An Nhơn Tây", "Xã Trung An", "Xã Hòa Phú", "Phường An Khánh", "Phường An Lợi Đông", "Phường An Phú", "Phường Bình An", "Phường Bình Khánh", "Phường Bình Trưng Đông", "Phường Bình Trưng Tây", "Phường Cát Lái", "Phường Thạnh Mỹ Lợi", "Phường Thảo Điền", "Phường Thủ Thiêm", "Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 8", "Phường 9", "Phường 10", "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Phường 16", "Phường 18", "Quận 1", "Quận 3", "Quận 5", "Quận 7", "Quận 9", "Quận 11", "Quận Gò Vấp", "Quận Tân Phú", "Quận Phú Nhuận", "Quận Bình Thạnh", "Huyện Bình Chánh", "Huyện Nhà Bè", "Huyện Hóc Môn", "Quận 6", "Quận 8", "Quận 10", "Quận 12", "Thành phố Thủ Đức", "Quận Bình Tân", "Quận Tân Bình", "Huyện Cần Giờ", "Huyện Củ Chi", "Quận 2", "Quận 4"];
        public static string ToVieLocation(string input)
        {
            WardDistrict.Add("Thành Phố Hồ Chí Minh");

            foreach (var item in WardDistrict)
            {
                var engName = Helper.ToEngPlace(item);
                input = Regex.Replace(input, engName, item);
            }

            return input;
        }
    }
}
