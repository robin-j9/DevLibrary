using System.ComponentModel.DataAnnotations;

namespace DevLibraryApp.API.Dtos
{
    public class UserToRegisterDto
    {
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }
        
        [Required]
        [StringLength(15, MinimumLength = 4, ErrorMessage = "Usernames must be between 4 and 15 characters in length.")]
        public string Username { get; set; }
        
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        
        [Required]
        [StringLength(25, MinimumLength = 8, ErrorMessage = "Passwords must be between 8 and 25 characters.")]
        public string Password { get; set; }

    }
}