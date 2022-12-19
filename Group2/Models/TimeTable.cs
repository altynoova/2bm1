using System.ComponentModel.DataAnnotations;

namespace Group2.Models
{
    public class TimeTable
    {
        [Key]
        public int Id { get; set; }
        public string Day { get; set; }
        public string? First { get; set; }
        public string? Second { get; set; }
        public string? Third { get; set; }
        public string? Fourth { get; set; }
        public string? Fifth { get; set; }
        public string? Sixth { get; set; }
        public string? Seventh { get; set; }
        public string? Eighth { get; set; }
        public string? Ninth { get; set; }
        public string? Tenth { get; set; }

    }
}
