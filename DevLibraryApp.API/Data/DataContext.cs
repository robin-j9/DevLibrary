using DevLibraryApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DevLibraryApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<SavedPage> SavedPages { get; set; }
    }
}