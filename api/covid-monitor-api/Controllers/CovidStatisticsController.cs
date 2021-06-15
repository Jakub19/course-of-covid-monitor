using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace covid_monitor_api.Controllers
{
    [ApiController]
    public class CovidStatisticsController : Controller
    {
        [HttpGet]
        [Route("api/CovidSummary")]
        public async Task<IActionResult> GetSummaryAsync()
        {
            var client = new HttpClient();
            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Get,
                RequestUri = new Uri("https://api.covid19api.com/summary")
                
            };
            using (var response = await client.SendAsync(request))
            {
                response.EnsureSuccessStatusCode();
                var body = await response.Content.ReadAsStringAsync();
                return Ok(body);
            }
            
        }

        [HttpGet]
        [Route("api/CovidSummaryForPoland")]
        public async Task<IActionResult> GetSummaryPolandAsync()
        {
            var client = new HttpClient();
            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Get,
                RequestUri = new Uri("https://api.covid19api.com/live/country/poland")

            };
            using (var response = await client.SendAsync(request))
            {
                response.EnsureSuccessStatusCode();
                var body = await response.Content.ReadAsStringAsync();
                return Ok(body);
            }

        }
    }

}