using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication8.Encje;
using WebApplication8.Modele;

namespace WebApplication8
{
    public class DzialaniaProfile : Profile
    {
        public DzialaniaProfile()
        {
            CreateMap<Operacja, DzialaniaDetailsDto>()
                .ForMember(m => m.NazwaOperacji, map => map.MapFrom(Operacja => Operacja.NazwaOperacji))
                .ForMember(m => m.NazwaSzpitala, map => map.MapFrom(Operacja => Operacja.Opis));
        }
    }
}
