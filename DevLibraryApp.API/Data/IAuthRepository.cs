using System.Threading.Tasks;
using DevLibraryApp.API.Models;

namespace DevLibraryApp.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register(User user, string password);
         Task<User> Login(string email, string password);
         Task<bool> UserExists(string email);
    }
}