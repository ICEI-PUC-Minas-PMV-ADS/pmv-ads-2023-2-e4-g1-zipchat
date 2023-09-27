using Domain.Entidade;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Repository;

namespace back_zipchat.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly ZipChatDbContext _context;

        public UsuarioController(ZipChatDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<Usuario>> PostUsuario(Usuario usuario)
        {
            if (ModelState.IsValid)
            {
                string senhaEncriptada = BCrypt.Net.BCrypt.HashPassword(usuario.Senha);

                usuario.Senha = senhaEncriptada;

                usuario.Id = Guid.NewGuid();
                _context.Usuarios.Add(usuario);
                await _context.SaveChangesAsync();
                return Ok();
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
    }
}
