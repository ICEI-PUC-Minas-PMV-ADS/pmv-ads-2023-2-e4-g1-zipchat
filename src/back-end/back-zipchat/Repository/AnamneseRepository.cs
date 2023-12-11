using back_zipchat.Configuration;
using back_zipchat.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;

namespace back_zipchat.Repository
{
    public class AnamneseRepository : BaseRepository<AnamneseModel>
    {
        private readonly IMongoCollection<AnamneseModel> _anamneseCollection;

        public AnamneseRepository(IOptions<MongoDBSettings> mongoDBSettings) : base(mongoDBSettings)
        {
            _anamneseCollection = _database.GetCollection<AnamneseModel>("anamnese");
        }


        public async Task<List<AnamneseModel>> GetAsync()
        {
            return await _anamneseCollection.Find(new BsonDocument()).ToListAsync();
        }

        public async Task<AnamneseModel> GetAsyncById(string id)
        {
            FilterDefinition<AnamneseModel> filter = Builders<AnamneseModel>.Filter.Eq("Id", id);

            var document = await _anamneseCollection.Find(filter).FirstOrDefaultAsync();

            return document;
        }

        public async Task<List<AnamneseModel>> GetAsync(string usuario)
        {
            FilterDefinition<AnamneseModel> filter = Builders<AnamneseModel>.Filter.Eq("usuario", usuario);

            var document = await _anamneseCollection.Find(filter).ToListAsync();

            return document;
        }

        public async Task CreateAsync(AnamneseModel anamnese)
        {
            await _anamneseCollection.InsertOneAsync(anamnese);
            return;
        }
        public async Task AddToAnamneseAsync(string id, string resultIA) { }
        public async Task DeleteAsync(string id) { }
    }
}
