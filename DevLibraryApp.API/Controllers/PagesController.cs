using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevLibraryApp.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PagesController : ControllerBase
    {
        private readonly DataContext _context;
        public PagesController(DataContext context)
        {
            _context = context;
        }

        // GET api/values
        [HttpGet]
        public async Task<IActionResult> GetPages()
        {
            var pages = await _context.SavedPages.ToListAsync();

            return Ok(pages);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPage(int id)
        {
            var page = await _context.SavedPages.FirstOrDefaultAsync(x => x.Id == id);

            return Ok(page);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
