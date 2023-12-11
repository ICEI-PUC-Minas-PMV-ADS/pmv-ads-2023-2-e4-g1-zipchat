using back_zipchat.Configuration;
using back_zipchat.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;

namespace back_zipchat.Repository
{
    public class CalendarRepository : BaseRepository<CalendarModel>
    {
        private readonly IMongoCollection<CalendarModel> _calendarCollection;

        public CalendarRepository(IOptions<MongoDBSettings> mongoDBSettings) : base(mongoDBSettings)
        {
            _calendarCollection = _database.GetCollection<CalendarModel>("calendar");
        }

        public async Task<List<CalendarModel>> GetAsync()
        {
            return await _calendarCollection.Find(new BsonDocument()).ToListAsync();
        }

        public async Task<CalendarModel> GetAsyncById(string id)
        {
            FilterDefinition<CalendarModel> filter = Builders<CalendarModel>.Filter.Eq("Id", id);

            var document = await _calendarCollection.Find(filter).FirstOrDefaultAsync();

            return document;
        }

        public async Task<List<CalendarModel>> GetAsync(string usuario)
        {
            FilterDefinition<CalendarModel> filter = Builders<CalendarModel>.Filter.Eq("paciente", usuario);

            List<CalendarModel> document = await _calendarCollection.Find(filter).ToListAsync();
            
            if (document.Count == 0)
            {
                FilterDefinition<CalendarModel> filter2 = Builders<CalendarModel>.Filter.Eq("medico", usuario);

                document = await _calendarCollection.Find(filter2).ToListAsync();

            }

            return document;
        }

        public async Task CreateAsync(CalendarModel calendar)
        {
            await _calendarCollection.InsertOneAsync(calendar);
            return;
        }
        public async Task AddToAnamneseAsync(string id, string resultIA) { }
        public async Task DeleteAsync(string id) { }
    }
}