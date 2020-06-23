using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication8.Modele
{
    public class DzialaniaDetailsDto
    {
        public string Imie { get; set; }

        public string Nazwisko { get; set; }

        public string NazwaOperacji { get; set; }

        public string Opis { get; set; }

        public int Cena { get; set; }

        public string NazwaSzpitala { get; set; }

        public string Adres { get; set; }

        public DateTime Data { get; set; }
    }
}
