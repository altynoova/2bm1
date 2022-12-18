using System.ComponentModel.DataAnnotations;

namespace Group2.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Passwords { get; set; }
    }
}
