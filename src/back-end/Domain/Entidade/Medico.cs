namespace Domain.Entidade
{
    public class Medico
    {
        public Guid Id { get; set; }

        public string Nome { get; set; }

        public string Crm { get; set;}

        public string Contato { get; set;}

        public Especialidade Especialidade { get; set;}
    }
}
