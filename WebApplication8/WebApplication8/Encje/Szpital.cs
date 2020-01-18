using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication8.Encje
{
    public class Szpital
    {
        public int Id { get; set; }

        public string NazwaSzpitala { get; set; }

        public string Adres { get; set; }

        public DateTime Data { get; set; }

        public virtual Doktor Doktor { get; set; }

        public virtual List<Operacja> Operacje { get; set; }

    }
}
