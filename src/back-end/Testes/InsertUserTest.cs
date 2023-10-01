using back_zipchat.Controllers;
using Domain.Entidade;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moq;
using Repository;
using System;
using System.Threading.Tasks;
using Xunit;

public class InsertUserTest
{
    [Fact]
    public async Task PostUsuario_ValidModel_ReturnsActionResult()
    {
        // Arrange
        var dbContextOptions = new DbContextOptionsBuilder<ZipChatDbContext>()
            .UseInMemoryDatabase(databaseName: "zip-chat")
            .Options;
        var zipChatDbContext = new ZipChatDbContext(dbContextOptions);

        var controller = new UsuarioController(zipChatDbContext);

        var usuario = new Usuario
        {
            // Preencha os campos do modelo conforme necessário para o teste
            Nome = "Correa",
            Email = "test@teste.com",
            Senha = "1234",
        };

        // Act
        var result = await controller.PostUsuario(usuario);

        // Assert
        Assert.IsType<ActionResult<Usuario>>(result);

        // Verifique se o usuário foi adicionado ao contexto do banco de dados
        var userInDatabase = await zipChatDbContext.Usuarios.FirstOrDefaultAsync(u => u.Email == usuario.Email);
        Assert.NotNull(userInDatabase);
    }
}
