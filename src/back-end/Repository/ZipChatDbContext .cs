using Domain.Entidade;
using Microsoft.EntityFrameworkCore;

namespace Repository
{
    public class ZipChatDbContext : DbContext
    {
        public ZipChatDbContext(DbContextOptions<ZipChatDbContext> options)
                : base(options)
        {

        }

        public DbSet<Anamnese> Anamneses { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Medico> Medicos { get; set; }
        public DbSet<Especialidade> Especialidades { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Anamnese>().ToTable("Anamneses");
            modelBuilder.Entity<Usuario>().ToTable("Usuarios");
            modelBuilder.Entity<Medico>().ToTable("Medicos");
            modelBuilder.Entity<Especialidade>().ToTable("Especialidades");
        }
    }
}