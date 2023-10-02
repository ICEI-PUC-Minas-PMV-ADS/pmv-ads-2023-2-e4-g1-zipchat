using System;
using back_zipchat.Models;

namespace back_zipchat.Interfaces
{
	public interface IAServiceInterface
    {
        public Task<AnamneseModel> ChamaPrompt(MensagemModel mensagem);
        public Task<List<AnamneseModel>> GetAnamneses();
        public Task<List<AnamneseModel>> GetAnamnesesByUser(string usuario);
        public Task<AnamneseModel> GetAnamnesesById(string id);
    }
}

