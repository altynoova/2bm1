using Group2.Models;

namespace Group2.Interface
{
    public interface IStudents
    {
        public List<Student> GetStudentDetails();
        public Student GetStudentDetails(int id);
        public void AddStudent(Student employee);
        public void UpdateStudent(Student employee);
        public Student DeleteStudent(int id);
        public bool CheckStudent(int id);
    }
}
