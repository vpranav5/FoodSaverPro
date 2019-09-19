using InternHackathon.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternHackathon.Models
{
    public class MealResult
    {
        public Recipe recipe { get; set; }
        public double weight { get; set; }
        public double dishesMade { get; set; }
        public double priceOfExpiration { get; set; }
    }

    public class Recipe
    {
        public IList<RecipeIngredient> items { get; set; }
        public string entreeName { get; set; }
    }

    public class Menu
    {
        public IList<Recipe> items { get; set; }
    }
}
