using back_zipchat.Interfaces;
using back_zipchat.Models;
using back_zipchat.Repository;

namespace back_zipchat.Services
{
    public class CalendarService: ICalendarInterface
    {
        static readonly private string AI_HOST = Environment.GetEnvironmentVariable("AI_HOST");
        private readonly CalendarRepository _calendarRepository;

        public CalendarService(CalendarRepository calendarRepository)
        {
            _calendarRepository = calendarRepository;
        }

        public async Task<CalendarModel> CreateAppoitament(CalendarModel appointament)
        {
            await _calendarRepository.CreateAsync(appointament);
            return appointament;
        }

        public Task<CalendarModel> DeleteAppoitament(CalendarModel appointament)
        {
            throw new NotImplementedException();
        }

        public async Task<List<CalendarModel>> GetAppoitaments()
        {
            return await _calendarRepository.GetAsync();
        }

        public async Task<CalendarModel> GetAppoitamentsById(string id)
        {
            throw new NotImplementedException();
        }

        public async Task<List<CalendarModel>> GetAppoitamentsByUser(string aaaaaaaaa)
        {
            throw new NotImplementedException();
        }

        public Task<CalendarModel> UpdateAppoitament(CalendarModel appointament)
        {
            throw new NotImplementedException();
        }
    }
}
