using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication8.Encje
{
    public class Doktor
    {
        public int Id { get; set; }

        public string Imie { get; set; }

        public string Nazwisko { get; set; }

        public virtual Szpital Szpital { get; set; }

        public virtual int SzpitalId { get; set; }

    }
}
