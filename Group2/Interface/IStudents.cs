using Group2.Models;

namespace Group2.Interface
{
    public interface IStudents
    {
        public List<Student> GetStudentDetails();
        public Student GetStudentDetails(int id);
        public void AddStudent(Student student);
        public void UpdateStudent(Student student);
        public Student DeleteStudent(int id);
        public bool CheckStudent(int id);
    }
}
