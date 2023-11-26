using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace back_zipchat.Models
{
    public class CalendarModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string paciente { get; set; } = null!;

        public string anamneseId { get; set; } = null!;

        public string medico { get; set; } = null!;

        public DateTime data { get; set; } = new DateTime()!;

        public string evento { get; set; } = null!;
    }
}
