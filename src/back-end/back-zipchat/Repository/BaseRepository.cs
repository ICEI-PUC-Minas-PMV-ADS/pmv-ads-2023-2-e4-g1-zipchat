using back_zipchat.Configuration;
using MongoDB.Driver;
using MongoDB.Bson;
using Microsoft.Extensions.Options;
using IdentityModel;
using back_zipchat.Models;

namespace back_zipchat.Repository
{
    public class BaseRepository<TEntity> : IRepository<TEntity> where TEntity : BaseEntity
    {
        protected MongoClient _client;
        protected IMongoDatabase _database;

        public BaseRepository(IOptions<MongoDBSettings> mongoDBSettings)
        {
            _client = new MongoClient(mongoDBSettings.Value.ConnectionURI);
            _database = _client.GetDatabase(mongoDBSettings.Value.DatabaseName);
        }

        public bool Delete(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public IList<TEntity> GetAll()
        {
            throw new NotImplementedException();
        }

        public TEntity GetById(Guid id)
        {
            throw new NotImplementedException();
        }

        public bool Insert(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public IList<TEntity> SearchFor(System.Linq.Expressions.Expression<Func<TEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public bool Update(TEntity entity)
        {
            throw new NotImplementedException();
        }
    }
}
