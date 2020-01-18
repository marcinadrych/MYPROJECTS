using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication8.Encje;

namespace WebApplication8.Encje
{
    public class DzialanieContext : DbContext
    {
        private string polaczenie = "Server=DESKTOP-CTIRCUI\\MSSQLSERVER01;database=Szpital;Trusted_Connection=True;";

        public DbSet<Szpital> Szpitale { get; set; }
        public DbSet<Doktor> Doktorzy { get; set; }
        public DbSet<Operacja> Operacje { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)

        {

            modelBuilder.Entity<Szpital>()
            .HasOne(szpital => szpital.Doktor)

            .WithOne(doktor => doktor.Szpital)

            .HasForeignKey<Doktor>(doktor => doktor.SzpitalId);

            modelBuilder.Entity<Szpital>()

            .HasMany(szpital => szpital.Operacje)

            .WithOne(operacja => operacja.Szpital);

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            optionsBuilder.UseSqlServer(polaczenie);

        }
    }
}
