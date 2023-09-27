using System.ComponentModel.DataAnnotations;

namespace back_zipchat.Models
{
    public class AutenticacaoModel
    {
        public Guid Id { get; set; }

        public string Nome { get; set; }

        public string Email { get; set; }

        public string Senha { get; set; }

        public int Contato { get; set; }
    }
}
