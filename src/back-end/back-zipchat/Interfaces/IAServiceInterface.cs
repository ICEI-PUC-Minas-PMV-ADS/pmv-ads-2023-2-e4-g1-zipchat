using System;
using back_zipchat.Models;

namespace back_zipchat.Interfaces
{
	public interface IAServiceInterface
    {
        public Task<string> ChamaPrompt(MensagemModel mensagem);
    }
}

