using HorseCountry.API.Persistence;
using HorseCountry.API.Persistence.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HorseCountry.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class HorsesController : ControllerBase
{
    private readonly HorseDbContext _context;

    public HorsesController(HorseDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult> Get([FromQuery] int page = 1, [FromQuery] int pageSize = 8)
    {
        var query = _context.Horses.AsQueryable();

        var totalItems = await query.CountAsync();
        var horses = await query
            .Include(h => h.Breed)
            .Include(h => h.Color)
            .Skip((page - 1) * pageSize) // Salta los de las páginas anteriores
            .Take(pageSize)              // Toma solo los de la página actual
            .ToListAsync();

        return Ok(new { 
            TotalItems = totalItems,
            TotalPages = (int)Math.Ceiling(totalItems / (double)pageSize),
            CurrentPage = page,
            Items = horses 
        });
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Horse>> GetById(int id)
    {
        var horse = await _context.Horses
            .Include(h => h.Breed)
            .Include(h => h.Color)
            .Include(h => h.Gender)
            .Include(h => h.Status)
            .FirstOrDefaultAsync(h => h.Id == id);

        if (horse == null) return NotFound();

        return Ok(horse);
    }
}