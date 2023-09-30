using back_zipchat.Models;
using back_zipchat.ModelsConfiguration;
using Domain.Entidade;
using Domain.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Repository;
using System.IdentityModel.Tokens.Jwt;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Text;
using System.Text.Json;

namespace back_zipchat.Controllers
{
    [Authorize]
    [ApiController]
    [Route("zip-chat")]
    public class ChatZipController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly string _apiKey;
        private readonly ZipChatDbContext _zipDebContext;

        public ChatZipController(HttpClient httpClient,
            IOptions<AppSettings> appSettings,
            ZipChatDbContext zipDebContext)
        {
            _httpClient = httpClient;
            _apiKey = appSettings.Value.ChatGptSecretKey;
            _zipDebContext = zipDebContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetResultado(string sintomas)
        {
            var userEmail = User.FindFirst(ClaimTypes.Email)?.Value;

            //_httpClient.DefaultRequestHeaders.Authorization =
            //    new AuthenticationHeaderValue("Bearer", _apiKey);

            //var model = new ChatGptInputDto(sintomas);

            //var requestBody = JsonSerializer.Serialize(model);

            //var content = new StringContent(requestBody, Encoding.UTF8, "application/json");

            //var response =
            //    await _httpClient.PostAsync("https://api.openai.com/v1/completions", content);

            //var result = await response.Content.ReadFromJsonAsync<ChatGptResponseDto>();

            //var promptResponse = result.choices.FirstOrDefault().text;

            var promptResponse = "teste";

            var usuario = await ObterUsario(userEmail);

            await InserirHistoricoConversaUsuario(usuario, sintomas, promptResponse);

            await InserirAnamneseUsuario(usuario, promptResponse);

            return Ok();
        }

        private async Task InserirAnamneseUsuario(Usuario usuario, string promptResponse)
        {
            var anamneseUsuario = new Anamnese
            {
                Id = Guid.NewGuid(),
                Conteudo = promptResponse,
                Criacao = "teste",
                UsuarioId = usuario.Id
            };
            _zipDebContext.Anamneses.Add(anamneseUsuario);
            await _zipDebContext.SaveChangesAsync();
        }

        private async Task InserirHistoricoConversaUsuario(
            Usuario usuario,
            string sintomas,
            string respostaGpt)
        {
            var historicoPaciente = new HistoricoPaciente
            {
                Id = Guid.NewGuid(),
                IdPaciente = usuario.Id,
                DataConversa = DateTime.Now,
                Descricao = $"O paciente {usuario.Nome} apresentou os seguintes sintomas:" +
                $" {sintomas} e" +
                $" a resposta foi {respostaGpt}"
            };

            _zipDebContext.HistoricoPacientes.Add(historicoPaciente);

            await _zipDebContext.SaveChangesAsync();
        }

        private async Task<Usuario> ObterUsario(string? userEmail)
        {
            return await _zipDebContext.Usuarios
                   .FirstOrDefaultAsync(u => u.Email == userEmail);
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Autenticar(
            AutenticacaoModel modelAutenticacao)
        {
            var usuarioDb = await _zipDebContext.Usuarios
                .FirstOrDefaultAsync(u => u.Email == modelAutenticacao.Email);

            if (usuarioDb == null ||
                BCrypt.Net.BCrypt.Verify(modelAutenticacao.Senha, usuarioDb.Senha))
                return Unauthorized();

            var jwt = GerarJwt(usuarioDb);

            return Ok(new {
                jwtToken = jwt
            }
            );
        }

        private string GerarJwt(Usuario model)
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            var key = Encoding.UTF8.GetBytes("o ceu esta azul e assim ando pelos caminhos sombrosos da terra");

            var claims = new ClaimsIdentity(new Claim[]
            {
                new Claim(ClaimTypes.NameIdentifier, model.Nome.ToString()),
                new Claim(ClaimTypes.Email, model.Email.ToString()),
                new Claim(ClaimTypes.Role, model.Email.ToString())   
            });

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = claims,
                Expires = DateTime.UtcNow.AddHours(8),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
