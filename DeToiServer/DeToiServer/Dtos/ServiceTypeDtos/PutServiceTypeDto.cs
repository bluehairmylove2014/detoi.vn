﻿
namespace DeToiServer.Dtos.ServiceTypeDtos
{
    public class PutServiceTypeDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public double BasePrice { get; set; }
        public string? Description { get; set; }
        public string? Image { get; set; }
        public Guid? ServiceCategoryId { get; set; }
    }
}
