using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VideoGameCatalogue.Data;
using VideoGameCatalogue.Models;
using VideoGameCatalogue.DTO;

namespace VideoGameCatalogue.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class GamesController : ControllerBase
{
    private readonly AppDbContext _db;

    public GamesController(AppDbContext db)
    {
        _db = db;
    }

    [HttpGet]
    public async Task<IEnumerable<Game>> GetAll()
        => await _db.Games.OrderBy(g => g.title).ToListAsync();

    [HttpGet("{id}")]
    public async Task<ActionResult<Game>> Get(int id)
    {
        var game = await _db.Games.FindAsync(id);
        return game is null ? NotFound() : game;
    }

    [HttpPost]
    public async Task<ActionResult<Game>> Create(GameDto dto)
    {
        var game = new Game
        {
            title = dto.title,
            genre = dto.genre,
            releaseYear = dto.releaseYear
        };

        _db.Games.Add(game);
        await _db.SaveChangesAsync();

        return CreatedAtAction(nameof(Get), new { id = game.Id }, game);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, GameDto dto)
    {
        var game = await _db.Games.FindAsync(id);
        if (game is null) return NotFound();

        game.title = dto.title;
        game.genre = dto.genre;
        game.releaseYear = dto.releaseYear;

        await _db.SaveChangesAsync();
        return NoContent();
    }
}
