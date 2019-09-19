using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InternHackathon.Models.Entities;

namespace InternHackathon.Models
{
    public class Inventory
    {
        //public Dictionary<InventoryIngredient,int> items { get; set; }
        public IList<Ingredients> items {get; set; }

    }

    public class InventoryCost
    {
        public Ingredients ingredient {get; set;}
        public double weight { get; set; }
        public double expWeight { get; set; }
        public double totalCost { get; set; }

    }
}
