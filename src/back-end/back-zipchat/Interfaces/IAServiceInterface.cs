using System;
using back_zipchat.Models;

namespace back_zipchat.Interfaces
{
	public interface IAServiceInterface
    {
        public Task<string> ChamaPrompt(MensagemModel mensagem);
        public Task<List<AnamneseModel>> GetAnamneses();
    }
}

