﻿using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace back_zipchat.Models
{
    public class BaseEntity: IBaseEntity
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
    }
}
