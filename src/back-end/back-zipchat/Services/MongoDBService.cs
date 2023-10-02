using System;
using back_zipchat.Configuration;
using back_zipchat.Models;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;

namespace back_zipchat.Services
{
	public class MongoDBService
    {
        private readonly IMongoCollection<AnamneseModel> _anamneseCollection;

        public MongoDBService(IOptions<MongoDBSettings> mongoDBSettings)
        {
            MongoClient client = new MongoClient(mongoDBSettings.Value.ConnectionURI);
            IMongoDatabase database = client.GetDatabase(mongoDBSettings.Value.DatabaseName);
            _anamneseCollection = database.GetCollection<AnamneseModel>(mongoDBSettings.Value.CollectionName);
        }


        public async Task<List<AnamneseModel>> GetAsync() {
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

        public async Task CreateAsync(AnamneseModel anamnese) {
            await _anamneseCollection.InsertOneAsync(anamnese);
            return;
        }
        public async Task AddToAnamneseAsync(string id, string resultIA) { }
        public async Task DeleteAsync(string id) { }
    }
}

