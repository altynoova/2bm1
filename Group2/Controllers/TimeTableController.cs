using Group2.Interface;
using Group2.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Group2.Controllers
{
    [Route("api/timetable")]
    [ApiController]
    public class TimeTableController : ControllerBase
    {
        private readonly ITimeTable _ITimeTable;

        public TimeTableController(ITimeTable ITimeTable)
        {
            _ITimeTable = ITimeTable;
        }

        // GET: api/timetable>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TimeTable>>> Get()
        {
            return await Task.FromResult(_ITimeTable.GetTimeTableDetails());
        }


        // GET api/employee/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TimeTable>> Get(int id)
        {
            var timeTable = await Task.FromResult(_ITimeTable.GetTimeTableDetails(id));
            if (timeTable == null)
            {
                return NotFound();
            }
            return timeTable;
        }

        [Authorize]
        // POST api/timetable
        [HttpPost]
        public async Task<ActionResult<TimeTable>> Post(TimeTable timeTable)
        {
            _ITimeTable.AddTimeTable(timeTable);
            return await Task.FromResult(timeTable);
        }

        [Authorize]
        // PUT api/TimeTable/5
        [HttpPut("{id}")]
        public async Task<ActionResult<TimeTable>> Put(int id, TimeTable timeTable)
        {
            if (id != timeTable.Id)
            {
                return BadRequest();
            }
            try
            {
                _ITimeTable.UpdateTimeTable(timeTable);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TimeTableExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return await Task.FromResult(timeTable);
        }

        [Authorize]
        // DELETE api/employee/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TimeTable>> Delete(int id)
        {
            var timeTable = _ITimeTable.DeleteTimeTable(id);
            return await Task.FromResult(timeTable);
        }

        private bool TimeTableExists(int id)
        {
            return _ITimeTable.CheckTimeTable(id);
        }
    }
}

