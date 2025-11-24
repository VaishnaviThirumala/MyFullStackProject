using VideoGameCatalogue.Models;

namespace VideoGameCatalogue.Data
{
    public static class SeedData
    {
        public static void Initialize(AppDbContext db)
        {
            if (db.Games.Any()) return;

            db.Games.AddRange(
                new Game { title = "Halo", genre = "Shooter", releaseYear = 2001 },
                new Game { title = "Minecraft", genre = "Sandbox", releaseYear = 2011 }
            );

            db.SaveChanges();
        }
    }
}
