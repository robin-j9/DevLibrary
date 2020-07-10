namespace DevLibraryApp.API.Models
{
    public class UserPage
    {
        public int UserId { get; set; }
        public User User { get; set; }

        public int PageId { get; set; }
        public Page Pages { get; set; }
    }
}