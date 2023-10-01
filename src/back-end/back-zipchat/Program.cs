using back_zipchat.Configuration;
using back_zipchat.Controllers;
using back_zipchat.Interfaces;
using back_zipchat.ModelsConfiguration;
using back_zipchat.Services;
using Keycloak.AuthServices.Authentication;
using Keycloak.AuthServices.Authorization;
using Keycloak.AuthServices.Sdk.Admin;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

DotNetEnv.Env.Load();


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "ZipChat", Version = "v1" });

    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Description = "JWT Authorization header using the Bearer scheme. Exemplo: \"Bearer {token}\"",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer"
    });

    c.AddSecurityRequirement(new OpenApiSecurityRequirement
        {
            {
                new OpenApiSecurityScheme
                {
                Reference = new OpenApiReference
                 {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                    },
                      Scheme = "oauth2",
                      Name = "Bearer",
                      In = ParameterLocation.Header,

                },
                    new string[] {}
                }
        });
});

//Interfaces
builder.Services.AddScoped<IAServiceInterface, IAService>();

//MongoDB
builder.Services.Configure<MongoDBSettings>(builder.Configuration.GetSection("MongoDB"));
builder.Services.AddSingleton<MongoDBService>();


// Builder Autenticação
var authenticationOptions = builder
                            .Configuration
                            .GetSection(KeycloakAuthenticationOptions.Section)
                            .Get<KeycloakAuthenticationOptions>();

builder.Services.AddKeycloakAuthentication(authenticationOptions);

var authorizationOptions = builder
                            .Configuration
                            .GetSection(KeycloakProtectionClientOptions.Section)
                            .Get<KeycloakProtectionClientOptions>();

builder.Services.AddKeycloakAuthorization(authorizationOptions);

var adminClientOptions = builder
                            .Configuration
                            .GetSection(KeycloakAdminClientOptions.Section)
                            .Get<KeycloakAdminClientOptions>();

builder.Services.AddKeycloakAdminHttpClient(adminClientOptions);

var app = builder.Build();

// APP swagger
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "ZipChat");
    });
}

app.UseHttpsRedirection();


app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
