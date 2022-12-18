using Microsoft.EntityFrameworkCore;

namespace Group2.Models
{
    public partial class DataBaseContext: DbContext
    {
        public DataBaseContext()
        {
        }

        public DataBaseContext(DbContextOptions<DataBaseContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Student>? Students { get; set; }
        public virtual DbSet<User>? Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasNoKey();
                entity.ToTable("Users");
                entity.Property(e => e.Id).HasColumnName("Id");
                entity.Property(e => e.UserName).HasMaxLength(50).IsUnicode(false);
                entity.Property(e => e.Passwords).HasMaxLength(50).IsUnicode(false);
            });

            modelBuilder.Entity<Student>(entity =>
            {
                entity.ToTable("Students");
                entity.Property(e => e.Id).HasColumnName("Id");
                entity.Property(e => e.Name).HasMaxLength(256).IsUnicode(false);
                entity.Property(e => e.DateOfBirth).IsUnicode(false);
                entity.Property(e => e.AstrologicalSign).HasMaxLength(256).IsUnicode(false);
                entity.Property(e => e.MotherLand).HasMaxLength(256).IsUnicode(false);
                entity.Property(e => e.Profile).HasMaxLength(256).IsUnicode(false);
                entity.Property(e => e.Phrases).HasMaxLength(256).IsUnicode(false);
                entity.Property(e => e.Photo1).HasMaxLength(256).IsUnicode(false);
                entity.Property(e => e.Photo2).HasMaxLength(256).IsUnicode(false);
                entity.Property(e => e.Photo3).HasMaxLength(256).IsUnicode(false);
                entity.Property(e => e.Photo4).HasMaxLength(256).IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
    

