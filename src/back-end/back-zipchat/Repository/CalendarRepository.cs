using back_zipchat.Configuration;
using back_zipchat.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;

namespace back_zipchat.Repository
{
    public class CalendarRepository
    {
        private readonly IMongoCollection<CalendarModel> _calendarCollection;

        public CalendarRepository(IOptions<MongoDBSettings> mongoDBSettings)
        {
            MongoClient client = new MongoClient(mongoDBSettings.Value.ConnectionURI);
            IMongoDatabase database = client.GetDatabase(mongoDBSettings.Value.DatabaseName);
            _calendarCollection = database.GetCollection<CalendarModel>(mongoDBSettings.Value.CollectionName);
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

        public async Task<List<CalendarModel>> GetAsync(string bbbbb)
        {
            FilterDefinition<CalendarModel> filter = Builders<CalendarModel>.Filter.Eq("paciente", bbbbb);

            var document = await _calendarCollection.Find(filter).ToListAsync();

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