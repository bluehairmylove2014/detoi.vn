using DeToiServerCore.Common.Constants;
using System.Linq.Expressions;
using System.Text;

namespace DeToiServerCore.Common.Helper
{
    public class Coordination
    {
        public double Lat { get; set; }
        public double Lon { get; set; }
    }

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

        public static string GetDockerConnectionString()
        {
            var dbHost = Environment.GetEnvironmentVariable("DB_HOST") ?? "detoidb";
            var dbName = Environment.GetEnvironmentVariable("DB_NAME") ?? "DeToiVN";
            var dbPassword = Environment.GetEnvironmentVariable("DB_SA_PASSWORD") ?? "Password@12345#";
            return $"Data Source={dbHost};Initial Catalog={dbName};User ID=sa;Password={dbPassword};TrustServerCertificate=True;";
        }

        public static bool IsInAcceptableZone(Coordination customerAddress, Coordination freelanceAddress, int defaultDistance = 5)
        {
            return !(GeoCalculator.CalculateDistance(customerAddress, freelanceAddress) > defaultDistance); // (km)
        }

        public static dynamic? StringToNum(string? value)
        {
            if (int.TryParse(value, out int result))
            {
                return result;
            }
            return value;
        }

        public static string? GetLocationUnit(string address, int pos = 0)
        {
            var element = address.Split(',').Reverse().ElementAtOrDefault(pos);
            return element?.Trim();
        }

        public static class GeoCalculator
        {
            private const double EarthRadiusKm = 6371.0;

            public static double CalculateDistance(Coordination from, Coordination to, int calUnit = GlobalConstant.InKilometers)
            {
                var dLat = ToRadians(to.Lat - from.Lat);
                var dLon = ToRadians(to.Lon - from.Lon);

                var a = Math.Sin(dLat / 2) * Math.Sin(dLat / 2) +
                        Math.Cos(ToRadians(to.Lat)) * Math.Cos(ToRadians(from.Lat)) *
                        Math.Sin(dLon / 2) * Math.Sin(dLon / 2);

                var c = 2 * Math.Atan2(Math.Sqrt(a), Math.Sqrt(1 - a));

                var distance = EarthRadiusKm * c * calUnit;
                return distance; // (km)
            }

            private static double ToRadians(double angle)
            {
                return Math.PI * angle / 180.0;
            }
        }
    }
}
