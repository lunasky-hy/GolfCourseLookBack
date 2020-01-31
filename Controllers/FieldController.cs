using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GolfCourseLookBack.Tools;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GolfCourseLookBack.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FieldController : ControllerBase
    {
        [HttpGet]
        public async Task<dynamic> Get(int num)
        {
            var sclient = new Scraping();
            return await sclient.GetFieldAsync(num);
        }
    }
}