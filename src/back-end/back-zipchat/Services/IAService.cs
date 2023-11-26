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
using back_zipchat.Repository;

namespace back_zipchat.Services
{
	public class IAService: IAServiceInterface
    {
        static readonly private string AI_HOST = Environment.GetEnvironmentVariable("AI_HOST");
        static readonly private string AI_KEY = Environment.GetEnvironmentVariable("AI_KEY");
        static readonly private string TEST = Environment.GetEnvironmentVariable("TEST");
        private readonly HttpClient _httpClient;
        private readonly AnamneseRepository _anamneseRepository;

        public IAService(HttpClient httpClient, AnamneseRepository anamneseRepository)
        {
            _httpClient = httpClient;
            _anamneseRepository = anamneseRepository;
        }

        public async Task<List<AnamneseModel>> GetAnamneses()
        {
            return await _anamneseRepository.GetAsync();
        }

        public async Task<AnamneseModel> GetAnamnesesById(string id)
        {
            return await _anamneseRepository.GetAsyncById(id);
        }


        public async Task<List<AnamneseModel>> GetAnamnesesByUser(string usuario)
        {
            return await _anamneseRepository.GetAsync(usuario);
        }


        private async Task<AnamneseModel> CreateAnamnese(AnamneseModel anamnese)
        {
            await _anamneseRepository.CreateAsync(anamnese);

            return anamnese;
        }

        public async Task<AnamneseModel> ChamaPrompt(MensagemModel mensagem)
		{
            try
            {
                string promptResponse = "[APP em teste] Procure um médico um clínico gereal";

                if (TEST != "true")
                {
                    string requestBody = JsonSerializer.Serialize(new PromptModel(mensagem.Texto));

                    _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", AI_KEY);

                    HttpContent content = new StringContent(requestBody, Encoding.UTF8, "application/json");

                    HttpResponseMessage response = await _httpClient.PostAsync(AI_HOST, content);

                    ChatGptResponseDto result = await response.Content.ReadFromJsonAsync<ChatGptResponseDto>();

                    promptResponse = result.choices.FirstOrDefault().text;

                    if (response.StatusCode == HttpStatusCode.Unauthorized)
                        throw new Exception();

                    if (response.StatusCode == HttpStatusCode.BadRequest)
                        throw new Exception();
                }

                AnamneseModel anamnese = new AnamneseModel
                {
                    usuario = mensagem.Emissor,
                    sintomas = mensagem.Texto,
                    resultadoIA = promptResponse
                };

                await CreateAnamnese(anamnese);

                return anamnese;
            }
            catch (HttpRequestException e)
            {
                throw;
            }

        }
    }
}

