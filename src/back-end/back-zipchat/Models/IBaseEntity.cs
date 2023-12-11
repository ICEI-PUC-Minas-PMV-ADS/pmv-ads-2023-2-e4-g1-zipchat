using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace back_zipchat.Models
{
    public interface IBaseEntity
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        string? Id { get; set; }
    }
}
