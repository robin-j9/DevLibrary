using System.Threading.Tasks;
using DevLibraryApp.API.Data;
using DevLibraryApp.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace DevLibraryApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        public AuthController(IAuthRepository repo)
        {
            _repo = repo;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(string email, string password) 
        {
            // validate request

            email = email.ToLower();
        
            if (await _repo.UserExists(email))
                return BadRequest("Email already exists.");

            var userToCreate = new User
            {
                Email = email
            };

            var createdUser = await _repo.Register(userToCreate, password);

            return StatusCode(201);
        }
    }
}