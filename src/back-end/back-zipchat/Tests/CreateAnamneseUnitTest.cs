using System;
using System.Net.Http;
using back_zipchat.Models;
using back_zipchat.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace back_zipchat.Tests
{
    public class CreateAnamneseUnitTest
    {

        private readonly MongoDBService _mongoDBService;

        public CreateAnamneseUnitTest(MongoDBService mongoDBService)
        {
            _mongoDBService = mongoDBService;
        }


        [Fact]
        public async Task CreateAnamnese_ValidModel_ReturnsAnamneseWithID()
        {
            // Arrange
            AnamneseModel anamnese = new AnamneseModel
            {
                usuario = "Usuário Teste",
                sintomas = "Febre",
                resultadoIA = "resultado exemplo do chatgpt"
            };

            //// Act
            //await _mongoDBService.CreateAsync(anamnese);
            //var result = anamnese;

            //// Assert
            //Assert.IsType<Task<AnamneseModel>>(result);

            //// Verifique se o usuário foi adicionado ao contexto do banco de dados
            //var anamneseNoBanco = await _mongoDBService.GetAsyncById(result.Id);
            //Assert.Equivalent(result, anamneseNoBanco);
        }

    }
}

