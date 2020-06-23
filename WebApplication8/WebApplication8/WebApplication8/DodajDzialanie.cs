using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication8.Encje;

namespace WebApplication8
{
    public class DodajDzialanie
    {
        private DzialanieContext dzialanieContext;

        public DodajDzialanie(DzialanieContext dzialanieContext)
        {

            this.dzialanieContext = dzialanieContext;

        }

        public void DodajDane()

        {

            if (dzialanieContext.Database.CanConnect())
            {

                if (!dzialanieContext.Szpitale.Any())

                {
                    WstawRekordy();

                }

            }
        }


        private void WstawRekordy()
        {
            var szpitale = new List<Szpital>
            {
                new Szpital
                {
                    NazwaSzpitala = "Szpital Gdansk",
                    Adres = "Lorenza 15/1",
                    Data = DateTime.Now.AddDays(10),
                    Doktor = new Doktor
                    {
                        Imie = "Andrzej",
                        Nazwisko = "Kowalski",
                    },

                    Operacje = new List<Operacja>
                    {
                        new Operacja
                        {
                            NazwaOperacji = "Operacja czaszki głowy",
                            Opis = "usuniecie plam",
                            Cena = 1500,
                            },
                        new Operacja
                        {
                            NazwaOperacji = "Zszycie",
                            Opis = "Zszycie czaszki",
                            Cena = 500,
                        }
                    }
                },

                new Szpital
                {
                    NazwaSzpitala = "Szpital w Koscierzynie",
                    Adres = "Sloneczna 22",
                    Data = DateTime.Now.AddDays(32),
                    Doktor = new Doktor
                    {
                        Imie = "Jan",
                        Nazwisko = "Kowalik"
                    },
                    Operacje = new List<Operacja>
                    {
                        new Operacja
                        {
                            NazwaOperacji = "Złamanie",
                            Opis = "Zlamana prawa reka",
                            Cena = 200,
                        },
                        new Operacja
                        {
                            NazwaOperacji = "Złamanie",
                            Opis = "Zlamana lewa reka",
                            Cena = 200,
                        }
                    }
                }
            };
            dzialanieContext.AddRange(szpitale);
            dzialanieContext.SaveChanges();
        }
    }
}
