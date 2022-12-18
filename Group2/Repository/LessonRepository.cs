using Group2.Interface;
using Group2.Models;
using Microsoft.EntityFrameworkCore;

namespace Group2.Repository
{
    public class LessonRepository:ILesson
    {
        readonly DataBaseContext _dbContext = new();

        public LessonRepository(DataBaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Lesson> GetLessonDetails()
        {
            try
            {
                return _dbContext.Lessons.ToList();
            }
            catch
            {
                throw;
            }
        }

        public Lesson GetLessonDetails(int id)
        {
            try
            {
                Lesson? lesson = _dbContext.Lessons.Find(id);
                if (lesson != null)
                {
                    return lesson;
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

        public void AddLesson(Lesson lesson)
        {
            try
            {
                _dbContext.Lessons.Add(lesson);
                _dbContext.SaveChanges();
            }
            catch
            {
                throw;
            }
        }

        public void UpdateLesson(Lesson lesson)
        {
            try
            {
                _dbContext.Entry(lesson).State = EntityState.Modified;
                _dbContext.SaveChanges();
            }
            catch
            {
                throw;
            }
        }

        public Lesson DeleteLesson(int id)
        {
            try
            {
                Lesson? lesson = _dbContext.Lessons.Find(id);

                if (lesson != null)
                {
                    _dbContext.Lessons.Remove(lesson);
                    _dbContext.SaveChanges();
                    return lesson;
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

        public bool CheckLesson(int id)
        {
            return _dbContext.Lessons.Any(e => e.Id == id);
        }
    }
}

