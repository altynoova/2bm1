using System.ComponentModel.DataAnnotations;

namespace Group2.Models
{
    public class Lesson
    {

        [Key]
        public int Id { get; set; }
        public string Lessonscode { get; set; }
        public string Lessonsname { get; set; }
        public string? Link { get; set; }


    }
}
