using back_zipchat.ModelsConfiguration;
using Domain.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;

namespace back_zipchat.Controllers
{
    [ApiController]
    [Route("zip-chat")]
    public class ChatZip : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly string _apiKey;
        public ChatZip(HttpClient httpClient,
            IOptions<AppSettings> appSettings)
        {
            _httpClient = httpClient;
            _apiKey = appSettings.Value.ChatGptSecretKey;
        }

        [HttpGet]
        public async Task<IActionResult> GetResultado(string sintomas)
        {
            _httpClient.DefaultRequestHeaders.Authorization =
                new AuthenticationHeaderValue("Bearer", _apiKey);

            var model = new ChatGptInputDto(sintomas);

            var requestBody = JsonSerializer.Serialize(model);

            var content = new StringContent(requestBody, Encoding.UTF8, "application/json");

            var response = 
                await _httpClient.PostAsync("https://api.openai.com/v1/completions", content);

            var result = await response.Content.ReadFromJsonAsync<ChatGptResponseDto>();    

            var promptResponse = result.choices.FirstOrDefault();


            return Ok();
        }
    }
}
