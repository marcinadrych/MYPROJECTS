using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using WebApplication8.Encje;

namespace WebApplication8.Controllers
{
    [Route("api/szpital")]
    public class DzialanieController : ControllerBase
    {
        private DzialanieContext dzialanie;
        private IMapper mapper;

        public DzialanieController(DzialanieContext dzialanie, IMapper mapper) 
        { 
            this.dzialanie = dzialanie;
            this.mapper = mapper;
        }

        public ActionResult<List<Szpital>> Get()
        {
            var szpitale = dzialanie.Szpitale.ToList();

            return szpitale;
        }
    }
}