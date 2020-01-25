using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GolfCourseLookBack.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FieldController : ControllerBase
    {
        [HttpGet]
        public int Get(int num)
        {
            return num;
        }
    }
}