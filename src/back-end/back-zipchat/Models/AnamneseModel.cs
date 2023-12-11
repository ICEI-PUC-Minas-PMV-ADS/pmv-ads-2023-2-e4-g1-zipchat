using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;

namespace back_zipchat.Models
{
	public class AnamneseModel : BaseEntity
    {

        public string usuario { get; set; } = null!;

        public DateTime data { get; set; } = new DateTime()!;

        public string sintomas { get; set; } = null!;

        public string resultadoIA { get; set; } = null!;
    }
}

