using System;
using System.Diagnostics;
using System.Text;
using back_zipchat.Interfaces;
using back_zipchat.Models;
using System.Text.Json;
using Microsoft.AspNetCore.Http;
using System.Net;

namespace back_zipchat.Services
{
	public class IAService: IAServiceInterface
    {
        static readonly private string AI_HOST = Environment.GetEnvironmentVariable("AI_HOST");
        static readonly private string AI_KEY = Environment.GetEnvironmentVariable("AI_KEY");
        private readonly HttpClient _httpClient;

        public IAService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

		public async Task<string> ChamaPrompt(MensagemModel mensagem)
		{
            Console.WriteLine(mensagem.Texto);

            try
            {
                string requestBody = JsonSerializer.Serialize(new PromptModel(mensagem.Texto));

                StringContent content = new StringContent(requestBody, Encoding.UTF8, "application/json");

                HttpResponseMessage response = await _httpClient.PostAsync(AI_HOST, content);

                //var result = await response.Content.ReadFromJsonAsync<ChatGptResponseDto>();

                //return result.choices.FirstOrDefault();
                if (response.StatusCode == HttpStatusCode.Unauthorized)
                    throw new Exception();

                if (response.StatusCode == HttpStatusCode.BadRequest)
                    throw new Exception();


                if (response.StatusCode == HttpStatusCode.OK)
                    throw new Exception();

                return "oi";
            }
            catch (HttpRequestException e)
            {
                throw;
            }

        }
    }
}

