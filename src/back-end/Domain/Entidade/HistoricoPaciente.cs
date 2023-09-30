namespace Domain.Entidade
{
    public class HistoricoPaciente
    {
        public Guid Id { get; set; }

        public Guid IdPaciente { get; set; }

        public DateTime DataConversa { get; set; }

        public string Descricao { get; set; }
    }
}
