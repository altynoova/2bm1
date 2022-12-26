using Group2.Interface;
using Group2.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Group2.Controllers
{
    [Route("api/lesson")]
    [ApiController]
    public class LessonController : ControllerBase
    {
        private readonly ILesson _ILesson;

        public LessonController(ILesson ILesson)
        {
            _ILesson = ILesson;
        }

        // GET: api/lesson>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Lesson>>> Get()
        {
            return await Task.FromResult(_ILesson.GetLessonDetails());
        }


        // GET api/lesson/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Lesson>> Get(int id)
        {
            var lessons = await Task.FromResult(_ILesson.GetLessonDetails(id));
            if (lessons == null)
            {
                return NotFound();
            }
            return lessons;
        }


        [Authorize]
        [HttpPost]
        public async Task<ActionResult<Lesson>> Post(Lesson lesson)
        {
            _ILesson.AddLesson(lesson);
            return await Task.FromResult(lesson);
        }


        [Authorize]
        [HttpPut("{id}")]
        public async Task<ActionResult<Lesson>> Put(int id, Lesson lesson)
        {
            if (id != lesson.Id)
            {
                return BadRequest();
            }
            try
            {
                _ILesson.UpdateLesson(lesson);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LessonExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return await Task.FromResult(lesson);
        }


        [Authorize]
        [HttpDelete("{id}")]
        public async Task<ActionResult<Lesson>> Delete(int id)
        {
            var lesson = _ILesson.DeleteLesson(id);
            return await Task.FromResult(lesson);
        }

        private bool LessonExists(int id)
        {
            return _ILesson.CheckLesson(id);
        }
    }
}

