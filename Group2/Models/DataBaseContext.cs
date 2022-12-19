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
        public virtual DbSet<TimeTable>? TimeTable { get; set; }
        public virtual DbSet<Lesson>? Lessons { get; set; }

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

            modelBuilder.Entity<TimeTable>(entity =>
            {
                entity.ToTable("TimeTable");
                entity.Property(e => e.Id).HasColumnName("Id");
                entity.Property(e => e.Day).HasMaxLength(50).IsUnicode(false);
                entity.Property(e => e.First).HasMaxLength(100).IsUnicode(false);
                entity.Property(e => e.Second).HasMaxLength(100).IsUnicode(false);
                entity.Property(e => e.Third).HasMaxLength(100).IsUnicode(false);
                entity.Property(e => e.Fourth).HasMaxLength(100).IsUnicode(false);
                entity.Property(e => e.Fifth).HasMaxLength(100).IsUnicode(false);
                entity.Property(e => e.Sixth).HasMaxLength(100).IsUnicode(false);
                entity.Property(e => e.Seventh).HasMaxLength(100).IsUnicode(false);
                entity.Property(e => e.Eighth).HasMaxLength(100).IsUnicode(false);
                entity.Property(e => e.Ninth).HasMaxLength(100).IsUnicode(false);
                entity.Property(e => e.Tenth).HasMaxLength(100).IsUnicode(false);

            });

            modelBuilder.Entity<Lesson>(entity =>
            {
                entity.ToTable("Lessons");
                entity.Property(e => e.Id).HasColumnName("Id");
                entity.Property(e => e.Lessonscode).HasMaxLength(50).IsUnicode(false);
                entity.Property(e => e.Lessonsname).HasMaxLength(100).IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
    

