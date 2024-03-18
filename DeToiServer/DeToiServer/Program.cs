global using DeToiServerCore.Models;
global using DeToiServerData;
using DeToiServer;
using DeToiServer.AutoMapper;
using DeToiServer.Middlewares;
using DeToiServer.RealTime;
using DeToiServerCore.Common.Helper;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Configuration.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
    .AddEnvironmentVariables();
builder.Services.Configure<ApplicationSecretSettings>(builder.Configuration.GetSection("ApplicationSecrets"));

builder.Services.AddLogging();
builder.Services.AddControllers()
    .AddJsonOptions(x => x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddCustomSwagger();
builder.Services.AddJwtBearerAuthentication(builder.Configuration);
builder.Services.AddCors(options => options.AddPolicy(name: "NgOrigins",
    policy =>
    {
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
        policy.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader().AllowCredentials();
    })
);

builder.Services.AddAutoMapper(typeof(MappingProfile));
builder.Services.AddServicesData();
builder.Services.AddUnitOfWork(options => options.UseSqlServer(Helper.GetDockerConnectionString())); // builder.Configuration.GetConnectionString("local") | Helper.GetDockerConnectionString()
builder.Services.AddHttpContextAccessor();
builder.Services.AddSignalR();
var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();
app.UseCors("NgOrigins");
app.ApplyDatabaseMigrations(app.Environment);
app.UseMiddleware<GlobalExceptionHandlerMiddleware>();

// Add other configurations
app.UseHttpsRedirection();
app.MapHub<ChatHub>("chat-hub");
app.UseAuthorization();
app.MapControllers();


app.Run();
