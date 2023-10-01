﻿using System;
using System.Data;
using back_zipchat.Interfaces;
using back_zipchat.Models;
using back_zipchat.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace back_zipchat.Controllers
{
    [ApiController]
    [Authorize]
    [Route("anamnese")]
    public class AnamneseController : ControllerBase
    {

        private readonly IAServiceInterface _IAService;
        private readonly MongoDBService _mongoDBService;

        public AnamneseController(IAServiceInterface iAService)
		{
            _IAService = iAService;
        }


        [HttpPost]
        public async Task<IActionResult> RecebeAnamnese(MensagemModel mensagem)
        {
            string resultadoprompt = "";

            try
            {
                resultadoprompt = await _IAService.ChamaPrompt(mensagem);
            }
            catch(Exception e)
            {
                return StatusCode(407, new { error = "Proxy Authentication Required." });
            }

            return Ok(resultadoprompt);
        }


        [HttpGet]
        public async Task<List<AnamneseModel>> Get() {
            return await _IAService.GetAnamneses();
        }
    }
}

