using back_zipchat.Models;

namespace back_zipchat.Interfaces
{
    public interface ICalendarInterface
    {
        public Task<CalendarModel> CreateAppoitament(CalendarModel appointament);
        public Task<CalendarModel> DeleteAppoitament(CalendarModel appointament);
        public Task<CalendarModel> UpdateAppoitament(CalendarModel appointament);

        public Task<List<CalendarModel>> GetAppoitaments();
        public Task<List<CalendarModel>> GetAppoitamentsByUser(string usuario);
        public Task<CalendarModel> GetAppoitamentsById(string id);
    }
}
