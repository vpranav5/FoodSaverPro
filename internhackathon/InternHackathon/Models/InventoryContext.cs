using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using InternHackathon.Models.Entities;

namespace InternHackathon.Models
{
    public partial class InventoryContext : DbContext
    {
        public InventoryContext()
        {
        }

        public InventoryContext(DbContextOptions<InventoryContext> options)
            : base(options)
        {
        }

        public virtual DbSet<IngrImageTable> IngrImageTable { get; set; }
        public virtual DbSet<Ingredients> Ingredients { get; set; }
        public virtual DbSet<Meals> Meals { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=(local);Initial Catalog=Inventory;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity<IngrImageTable>(entity =>
            {
                entity.HasKey(e => e.IngrName);

                entity.Property(e => e.IngrName)
                    .HasMaxLength(50)
                    .ValueGeneratedNever();

                entity.Property(e => e.ImageName)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Ingredients>(entity =>
            {
                entity.HasKey(e => new { e.Name, e.ExpDate });

                entity.Property(e => e.Name).HasMaxLength(25);

                entity.Property(e => e.ExpDate).HasColumnType("date");

                entity.Property(e => e.Price).HasColumnType("smallmoney");

                entity.Property(e => e.Unit)
                    .IsRequired()
                    .HasMaxLength(25);
            });

            modelBuilder.Entity<Meals>(entity =>
            {
                entity.HasKey(e => new { e.Name, e.Ingredient });

                entity.Property(e => e.Name).HasMaxLength(25);

                entity.Property(e => e.Ingredient).HasMaxLength(25);

                entity.Property(e => e.Unit)
                    .IsRequired()
                    .HasMaxLength(25);
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasKey(e => e.Email);

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .ValueGeneratedNever();

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(50);
            });
        }
    }
}
