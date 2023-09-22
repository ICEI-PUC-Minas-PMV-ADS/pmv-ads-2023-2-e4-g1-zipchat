using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace back_zipchat.Controllers
{
    [ApiController]
    [Route("zip-chat")]
    public class ChatZip : ControllerBase
    {
        private readonly HttpClient _httpClient;

        public ChatZip(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        [HttpGet]
        public async Task<IActionResult> PostSintomas(string sintomas,
            [FromServices] IConfiguration configuration)
        {

            return Ok();
        }
    }
}
