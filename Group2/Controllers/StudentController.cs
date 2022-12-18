using Group2.Interface;
using Group2.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Group2.Controllers
{
   
    [Route("api/student")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudents _IStudent;

        public StudentController(IStudents IStudent)
        {
            _IStudent =  IStudent;
        }

        // GET: api/employee>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Student>>> Get()
        {
            return await Task.FromResult(_IStudent.GetStudentDetails());
        }

        [Authorize]
        // GET api/employee/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> Get(int id)
        {
            var students = await Task.FromResult(_IStudent.GetStudentDetails(id));
            if (students == null)
            {
                return NotFound();
            }
            return students;
        }

        [Authorize]
        // POST api/employee
        [HttpPost]
        public async Task<ActionResult<Student>> Post(Student student)
        {
            _IStudent.AddStudent(student);
            return await Task.FromResult(student);
        }

        [Authorize]
        // PUT api/employee/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Student>> Put(int id, Student student)
        {
            if (id != student.Id)
            {
                return BadRequest();
            }
            try
            {
                _IStudent.UpdateStudent(student);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return await Task.FromResult(student);
        }

        [Authorize]
        // DELETE api/employee/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Student>> Delete(int id)
        {
            var employee = _IStudent.DeleteStudent(id);
            return await Task.FromResult(employee);
        }

        private bool StudentExists(int id)
        {
            return _IStudent.CheckStudent(id);
        }
    }
}
