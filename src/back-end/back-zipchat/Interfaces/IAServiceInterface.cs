using System;
using back_zipchat.Models;

namespace back_zipchat.Interfaces
{
	public interface IAServiceInterface
    {
        public Task<AnamneseModel> ChamaPrompt(MensagemModel mensagem);
        public Task<List<AnamneseModel>> GetAnamneses();
    }
}

