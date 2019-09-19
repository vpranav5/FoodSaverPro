using System;
using System.Collections.Generic;

namespace InternHackathon.Models.Entities
{
    public partial class Ingredients
    {
        public string Name { get; set; }
        public DateTime ExpDate { get; set; }
        public double StockQty { get; set; }
        public decimal Price { get; set; }
        public string Unit { get; set; }
        public double UsePerWeek { get; set; }
    }

}
