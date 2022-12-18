using System.ComponentModel.DataAnnotations;

namespace Group2.Models
{
    public class Student
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public DateTime DateOfBirth { get; set; }
        [Required]
        public string AstrologicalSign { get; set; }
        [Required]
        public string MotherLand { get; set; }
        public string Profile { get; set; }
        public string Phrases { get; set; }
        public string Photo1 { get; set; }
        public string Photo2 { get; set; }
        public string Photo3 { get; set; }
        public string Photo4 { get; set; }
        public string? Instagram { get; set; }
        public string? Tg { get; set; }
    }
}
