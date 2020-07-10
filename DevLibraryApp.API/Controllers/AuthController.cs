using System.Threading.Tasks;
using DevLibraryApp.API.Data;
using DevLibraryApp.API.Dtos;
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
        public async Task<IActionResult> Register(UserToRegisterDto userToRegisterDto) 
        {
            // validate request

            userToRegisterDto.Email = userToRegisterDto.Email.ToLower();
        
            if (await _repo.UserExists(userToRegisterDto.Email))
                return BadRequest("Email already exists.");

            var userToCreate = new User
            {
                FirstName = userToRegisterDto.FirstName,
                LastName = userToRegisterDto.LastName,
                Username = userToRegisterDto.Username,
                Email = userToRegisterDto.Email
            };

            var createdUser = await _repo.Register(userToCreate, userToRegisterDto.Password);

            return StatusCode(201);
        }
    }
}