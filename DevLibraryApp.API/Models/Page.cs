using System.Collections.Generic;

namespace DevLibraryApp.API.Models
{
    public class Page
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Url { get; set; }
        public IList<UserPage> UserPages { get; set; }
    }
}