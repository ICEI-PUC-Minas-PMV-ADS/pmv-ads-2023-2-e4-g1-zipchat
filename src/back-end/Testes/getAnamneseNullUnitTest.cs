using System;
using System.Net.Http;
using back_zipchat.Models;
using back_zipchat.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MongoDB.Driver;
using Xunit;

namespace back_zipchat.Tests
{
    public class getAnamneseNullUnitTest
    {

        private readonly MongoDBService _mongoDBService;

        public getAnamneseNullUnitTest(MongoDBService mongoDBService)
        {
            _mongoDBService = mongoDBService;
        }

// ... Seu código ...

        [Fact]
            public async Task GetAsyncById_ExceptionDuringRetrieval_ReturnsNullAsync()
            {
                // Arrange
                string id = "teste";

                // Simula uma exceção para recuperar o id
                _mongoDBService.Setup(service => service.GetAsyncById(id))
                               .Returns(Task.FromException<AnamneseModel>(new Exception("Id inexistente")));

                // Act
                var result = await _mongoDBService.GetAsyncById(id);

                // Assert
                Assert.Null(result); // Verifica se o resultado é nulo
            }







}
}

