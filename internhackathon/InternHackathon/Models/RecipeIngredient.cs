using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternHackathon.Models
{
    public class RecipeIngredient
    {
        public string Name { get; set; }
        public double Qty { get; set; }
        public string Unit { get; set; }
    }

    public class inventoryItem
    {
        //public Dictionary<InventoryIngredient,int> items { get; set; }
        public string name;
        public double weight;
        public double quantity;
        public string unit;
    }
}
