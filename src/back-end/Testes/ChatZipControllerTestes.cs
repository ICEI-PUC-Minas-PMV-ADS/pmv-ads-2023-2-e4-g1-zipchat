using back_zipchat.Controllers;
using back_zipchat.ModelsConfiguration;
using Domain.Entidade;
using Domain.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Moq;
using Repository;
using System.Net;
using System.Security.Claims;
using System.Text;
using System.Text.Json;

namespace Testes
{
    public class ChatZipControllerTestes
    {
        [Fact]
        public async Task GetResultado_Deve_Retornar_OkResult()
        {
            // Arrange
            var userEmail = "usuario@teste.com";
            var sintomas = "sintomas de teste";
            var respostaGpt = "resposta de teste";

            var mockHttpClientFactory = new Mock<IHttpClientFactory>();
            var mockHttpClient = new Mock<HttpClient>();
            mockHttpClientFactory.Setup(_ => _.CreateClient(It.IsAny<string>())).Returns(mockHttpClient.Object);

            var appSettings = new AppSettings { ChatGptSecretKey = "sua-chave-de-api-aqui" };
            var mockOptions = new Mock<IOptions<AppSettings>>();
            mockOptions.Setup(a => a.Value).Returns(appSettings);

            var mockZipDebContext = new Mock<ZipChatDbContext>();

            var controller = new ChatZipController(
                mockHttpClient.Object,
                mockOptions.Object,
                mockZipDebContext.Object);

            // Configurar um usuário fictício retornado pelo método ObterUsario
            var usuario = new Usuario { Id = Guid.NewGuid(), Email = userEmail };
            controller.ControllerContext = new ControllerContext
            {
                HttpContext = new DefaultHttpContext()
                {
                    User = new ClaimsPrincipal(new ClaimsIdentity(new Claim[]
                    {
                    new Claim(ClaimTypes.Email, userEmail)
                    }))
                }
            };

            // Configurar o HttpClient mock para retornar um resultado simulado
            var chatGptResponseDto = new ChatGptResponseDto
            {
                choices = { new Choice { text = respostaGpt } }
            };
            var responseMessage = new HttpResponseMessage(HttpStatusCode.OK);
            responseMessage.Content = new StringContent(JsonSerializer.Serialize(chatGptResponseDto), Encoding.UTF8, "application/json");
            mockHttpClient.Setup(_ => _.PostAsync(It.IsAny<string>(), It.IsAny<HttpContent>())).ReturnsAsync(responseMessage);

            // Act
            var result = await controller.GetResultado(sintomas);

            // Assert
            var okResult = Assert.IsType<OkResult>(result);
        }

    }
}