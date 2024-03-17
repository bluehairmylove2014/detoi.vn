﻿namespace DeToiServer.Dtos.AccountDtos
{
    public class GetAccountDto
    {
        public Guid Id { get; set; }
        public string FullName { get; set; } = string.Empty;
        public string Avatar { get; set; } = string.Empty;
        public DateOnly? DateOfBirth { get; set; }
        public string Phone { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
    }
}
