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
        public IMongoDatabase mongoDatabase;

        public MongoDBService(IOptions<MongoDBSettings> dabaseSettings)
        {
            var mongoClient = new MongoClient(dabaseSettings.Value.ConnectionURI);

            mongoDatabase = mongoClient.GetDatabase(dabaseSettings.Value.DatabaseName);
        }
    }
}

