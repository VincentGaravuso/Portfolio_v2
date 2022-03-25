using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Portfolio_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Threading.Tasks;

namespace Portfolio_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GitHubController : ControllerBase
    {
        private const string API_URL = "https://api.github.com";
        static HttpClient client = new HttpClient();
        private readonly ILogger<GitHubController> _logger;

        public GitHubController(ILogger<GitHubController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("GetUserRepositories")]
        public async Task<IActionResult> GetUserRepositories(string username)
        {
            try
            {
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(
                    new MediaTypeWithQualityHeaderValue("application/vnd.github.v3+json"));
                client.DefaultRequestHeaders.Add("User-Agent", ".NET Foundation Repository Reporter");

                var response = await client.GetAsync($"{API_URL}/users/{username}/repos");

                if (response.IsSuccessStatusCode)
                {
                    var jsonString = await response.Content.ReadAsStringAsync();
                    var repos = JsonSerializer.Deserialize<IEnumerable<Repository>>(jsonString);

                    return Ok(repos);
                }

                return NotFound($"Nothing found for Username: {username}");
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
