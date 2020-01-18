using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication8.Encje
{
    public class Operacja
    {
        public int Id { get; set; }

        public string NazwaOperacji { get; set; }

        public string Opis { get; set; }

        public int Cena { get; set; }

        public virtual Szpital Szpital { get; set; }

        public virtual int SzpitalId { get; set; }

    }
}
