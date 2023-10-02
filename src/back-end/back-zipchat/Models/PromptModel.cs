using System;
namespace back_zipchat.Models
{
	public class PromptModel
    {
        public string model { get; set; }

        public string prompt { get; set; }

        public int max_tokens { get; set; }

        public decimal temperature { get; set; }

        public PromptModel(string mensagem)
        {
            prompt = $"De acordo com esses sintomas:{mensagem}." +
                $"Me diga especialidade de médico procurar," +
                $" o que posso ter e se devo ir em uma emergencia médica.";
            temperature = 0.2m;
            max_tokens = 100;
            model = "text-davinci-003";
        }
	}
}

