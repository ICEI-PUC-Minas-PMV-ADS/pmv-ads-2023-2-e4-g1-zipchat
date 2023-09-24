namespace Domain.Entidade
{
    public class Anamnese
    {
        public Guid Id { get; set; }

        public string Conteudo { get; set; }

        public string Criacao { get; set;}

        public int UsuarioId { get; set;}   
    }
}
