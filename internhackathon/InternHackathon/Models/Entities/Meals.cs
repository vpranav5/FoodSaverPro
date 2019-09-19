using System;
using System.Collections.Generic;

namespace InternHackathon.Models.Entities
{
    public partial class Meals
    {
        public string Name { get; set; }
        public string Ingredient { get; set; }
        public double Quantity { get; set; }
        public string Unit { get; set; }
    }
}
