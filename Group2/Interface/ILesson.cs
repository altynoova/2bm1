using Group2.Models;

namespace Group2.Interface
{
    public interface ILesson
    {
        public List<Lesson> GetLessonDetails();
        public Lesson GetLessonDetails(int id);
        public void AddLesson(Lesson lesson);
        public void UpdateLesson(Lesson lesson);
        public Lesson DeleteLesson(int id);
        public bool CheckLesson(int id);
    }
}
