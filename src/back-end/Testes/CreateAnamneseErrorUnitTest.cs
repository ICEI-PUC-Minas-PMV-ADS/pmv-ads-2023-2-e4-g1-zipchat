using System;
using System.Net.Http;
using back_zipchat.Models;
using back_zipchat.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace back_zipchat.Tests
{
    public class CreateAnamneseErrorUnitTest
    {

        private readonly MongoDBService _mongoDBService;

        public CreateAnamneseErrorUnitTest(MongoDBService mongoDBService)
        {
            _mongoDBService = mongoDBService;
        }

        // Exceção personalizada para representar a ausência de um campo obrigatório
        public class MissingFieldException : Exception
        {
            public MissingFieldException(string fieldName)
                : base("Ausência de um campo obrigatório")
            {
            }
        }



        [Fact]
        public async Task CreateAnamnese_MissingField_ThrowsSpecificExceptionAsync()
        {
            // Arrange
            AnamneseModel anamnese = new AnamneseModel
            {
                usuario = "Usuário Válido",
                resultadoIA = "procurar medico"
                // Campo sintomas ausente
            };

            // Act e Assert
            await Assert.ThrowsAsync<MissingFieldException>(() => _mongoDBService.CreateAsync(anamnese));
        }

    }
}

