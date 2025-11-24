namespace VideoGameCatalogue.Models
{
    public class Game
    {
        public int Id { get; set; }
        public string title { get; set; } = "";
        public string genre { get; set; } = "";
        public int releaseYear { get; set; }
    }

}
