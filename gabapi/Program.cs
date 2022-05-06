using gabapi;
using gabapi.Hubs;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSignalR()
    .AddAzureSignalR(Constants.SignalRConnectionString);
    
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        currentbuilder =>
        {
            currentbuilder.AllowAnyHeader()
                          .AllowAnyMethod()
                          .SetIsOriginAllowed(_ => true)
                          .AllowCredentials();
        });
});
var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.MapControllers();
app.UseRouting();
app.UseAuthorization();
app.UseCors("AllowAllOrigins");
app.MapHub<WarHub>("/hub");

app.Run();
