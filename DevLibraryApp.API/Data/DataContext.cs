using DevLibraryApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DevLibraryApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder) 
        {
            modelBuilder.Entity<UserPage>()
                .HasKey(p => new { p.UserId, p.PageId });
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Page> Pages { get; set; }
        public DbSet<UserPage> UserPages { get; set; }

    }
}