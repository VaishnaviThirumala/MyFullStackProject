using Microsoft.EntityFrameworkCore;
using VideoGameCatalogue.Models;

namespace VideoGameCatalogue.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Game> Games => Set<Game>();
    }
}
