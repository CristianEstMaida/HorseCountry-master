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
    public async Task<ActionResult<IEnumerable<Horse>>> Get()
    {
        // Importante: .Include trae los datos de las tablas auxiliares (Breed, Color, etc)
        var horses = await _context.Horses
            .Include(h => h.Breed)
            .Include(h => h.Color)
            .Include(h => h.Gender)
            .Include(h => h.Status)
            .ToListAsync();

        return Ok(horses);
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