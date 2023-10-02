using System;
using System.Diagnostics;
using System.Text;
using back_zipchat.Interfaces;
using back_zipchat.Models;
using System.Text.Json;
using Microsoft.AspNetCore.Http;
using System.Net;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Mvc;

namespace back_zipchat.Services
{
	public class IAService: IAServiceInterface
    {
        static readonly private string AI_HOST = Environment.GetEnvironmentVariable("AI_HOST");
        static readonly private string AI_KEY = Environment.GetEnvironmentVariable("AI_KEY");
        private readonly HttpClient _httpClient;
        private readonly MongoDBService _mongoDBService;

        public IAService(HttpClient httpClient, MongoDBService mongoDBService)
        {
            _httpClient = httpClient;
            _mongoDBService = mongoDBService;
        }

        public async Task<List<AnamneseModel>> GetAnamneses()
        {
            return await _mongoDBService.GetAsync();
        }

        public async Task<AnamneseModel> GetAnamnesesById(string id)
        {
            return await _mongoDBService.GetAsyncById(id);
        }


        public async Task<List<AnamneseModel>> GetAnamnesesByUser(string usuario)
        {
            return await _mongoDBService.GetAsync(usuario);
        }


        private async Task<AnamneseModel> CreateAnamnese(AnamneseModel anamnese)
        {
            await _mongoDBService.CreateAsync(anamnese);

            return anamnese;
        }

        public async Task<AnamneseModel> ChamaPrompt(MensagemModel mensagem)
		{
            try
            {
                string requestBody = JsonSerializer.Serialize(new PromptModel(mensagem.Texto));

                _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", AI_KEY);

                HttpContent content = new StringContent(requestBody, Encoding.UTF8, "application/json");

                HttpResponseMessage response = await _httpClient.PostAsync(AI_HOST, content);

                ChatGptResponseDto result = await response.Content.ReadFromJsonAsync<ChatGptResponseDto>();

                string promptResponse = result.choices.FirstOrDefault().text;

                AnamneseModel anamnese = new AnamneseModel
                {
                    usuario = mensagem.Emissor,
                    sintomas = mensagem.Texto,
                    resultadoIA = promptResponse
                };

                await CreateAnamnese(anamnese);


                if (response.StatusCode == HttpStatusCode.Unauthorized)
                    throw new Exception();

                if (response.StatusCode == HttpStatusCode.BadRequest)
                    throw new Exception();


                if (response.StatusCode == HttpStatusCode.OK)
                    return anamnese;

                return anamnese;
            }
            catch (HttpRequestException e)
            {
                throw;
            }

        }
    }
}

