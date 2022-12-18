using Group2.Interface;
using Group2.Models;
using Microsoft.EntityFrameworkCore;

namespace Group2.Repository
{
        public class StudentRepository : IStudents
        {
            readonly DataBaseContext _dbContext = new();

            public StudentRepository(DataBaseContext dbContext)
            {
                _dbContext = dbContext;
            }

            public List<Student> GetStudentDetails()
            {
                try
                {
                    return _dbContext.Students.ToList();
                }
                catch
                {
                    throw;
                }
            }

            public Student GetStudentDetails(int id)
            {
                try
                {
                    Student? student = _dbContext.Students.Find(id);
                    if (student != null)
                    {
                        return student;
                    }
                    else
                    {
                        throw new ArgumentNullException();
                    }
                }
                catch
                {
                    throw;
                }
            }

            public void AddStudent(Student student)
            {
                try
                {
                    _dbContext.Students.Add(student);
                    _dbContext.SaveChanges();
                }
                catch
                {
                    throw;
                }
            }

            public void UpdateStudent(Student student)
            {
                try
                {
                    _dbContext.Entry(student).State = EntityState.Modified;
                    _dbContext.SaveChanges();
                }
                catch
                {
                    throw;
                }
            }

            public Student DeleteStudent(int id)
            {
                try
                {
                    Student? student = _dbContext.Students.Find(id);

                    if (student != null)
                    {
                        _dbContext.Students.Remove(student);
                        _dbContext.SaveChanges();
                        return student;
                    }
                    else
                    {
                        throw new ArgumentNullException();
                    }
                }
                catch
                {
                    throw;
                }
            }

            public bool CheckStudent(int id)
            {
                return _dbContext.Students.Any(e => e.Id == id);
            }
        }
    }

