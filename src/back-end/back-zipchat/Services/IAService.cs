﻿using System;
using System.Diagnostics;
using System.Text;
using back_zipchat.Interfaces;
using back_zipchat.Models;
using System.Text.Json;
using Microsoft.AspNetCore.Http;
using System.Net;
using System.Net.Http.Headers;

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

        public async Task<string> ChamaPrompt(MensagemModel mensagem)
		{
            try
            {
                string requestBody = JsonSerializer.Serialize(new PromptModel(mensagem.Texto));

                _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", AI_KEY);

                HttpContent content = new StringContent(requestBody, Encoding.UTF8, "application/json");

                HttpResponseMessage response = await _httpClient.PostAsync(AI_HOST, content);

                ChatGptResponseDto result = await response.Content.ReadFromJsonAsync<ChatGptResponseDto>();

                string promptResponse = result.choices.FirstOrDefault().text;

                if (response.StatusCode == HttpStatusCode.Unauthorized)
                    throw new Exception();

                if (response.StatusCode == HttpStatusCode.BadRequest)
                    throw new Exception();


                if (response.StatusCode == HttpStatusCode.OK)
                    return promptResponse;

                return promptResponse;
            }
            catch (HttpRequestException e)
            {
                throw;
            }

        }
    }
}

