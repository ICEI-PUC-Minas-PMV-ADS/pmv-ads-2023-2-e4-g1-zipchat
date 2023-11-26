using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;

namespace back_zipchat.Models
{
	public class AnamneseModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public string usuario { get; set; } = null!;

        public DateTime data { get; set; } = new DateTime()!;

        public string sintomas { get; set; } = null!;

        public string resultadoIA { get; set; } = null!;
    }
}

