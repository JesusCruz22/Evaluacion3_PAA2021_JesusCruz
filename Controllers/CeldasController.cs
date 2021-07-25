using System.Collections.Generic;
using Evaluacion3_PAA2021_JesusCruz.Model;
using Microsoft.AspNetCore.Mvc;

namespace Evaluacion3_PAA2021_JesusCruz.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class CeldasController : ControllerBase
    {
        [HttpGet("GetDatosCeldas")]
        public IEnumerable<Celda> GetDatosCeldas()
        {
            List<Celda> celdasList = new List<Celda>()
            {
                new()
                {
                    Id = 1, Numero = 15, Temperatura = 35.0f, Voltaje = 3.0f, Nivel = 10.8f, Flujo = 8.0f
                },
                new()
                {
                    Id = 3, Numero = 16, Temperatura = 37.0f, Voltaje = 2.2f, Nivel = 11.2f, Flujo = 8.0f
                },
                new()
                {
                    Id = 7, Numero = 17, Temperatura = 39.0f, Voltaje = 3.5f, Nivel = 9.1f, Flujo = 8.0f
                }
            };

            return celdasList.ToArray();
        }
    }
}