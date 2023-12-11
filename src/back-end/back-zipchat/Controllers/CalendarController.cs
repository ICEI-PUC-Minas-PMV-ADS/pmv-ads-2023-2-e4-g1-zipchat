using back_zipchat.Interfaces;
using back_zipchat.Models;
using back_zipchat.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace back_zipchat.Controllers
{
    [ApiController]
    [Route("calendar")]
    public class CalendarController : ControllerBase
    {
        private readonly ICalendarInterface _ICalendarInterface;

        public CalendarController(ICalendarInterface service)
        {
            _ICalendarInterface = service;
        }


        [HttpPost("/calendar")]
        public async Task<IActionResult> Post(CalendarModel calendar)
        {
            CalendarModel resultadoprompt;

            try
            {
                resultadoprompt = await _ICalendarInterface.CreateAppoitament(calendar);
            }
            catch (Exception e)
            {
                return StatusCode(407, new { error = "Proxy Authentication Required." });
            }

            return Ok(resultadoprompt);
        }

        [HttpGet("/calendar")]
        public async Task<List<CalendarModel>> Get()
        {
            return await _ICalendarInterface.GetAppoitaments();
        }

        [HttpGet("/calendar/{id}")]
        public async Task<CalendarModel> GetById(string id)
        {
            return await _ICalendarInterface.GetAppoitamentsById(id);
        }


        [HttpGet("/calendar/usuario/{usuario}")]
        public async Task<List<CalendarModel>> GetByUser(string usuario)
        {
            return await _ICalendarInterface.GetAppoitamentsByUser(usuario);
        }

    }
}
