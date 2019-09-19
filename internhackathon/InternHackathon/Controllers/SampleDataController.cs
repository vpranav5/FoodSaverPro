using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using InternHackathon.Models;
using InternHackathon.Models.Entities;
using System.Collections;
namespace InternHackathon.Controllers
{
    public class AnalyticsController : Controller
    {
        private readonly InventoryContext _inventoryContext;
        public static double costFactor = 5;

        public AnalyticsController(InventoryContext inventoryContext)
        {
            _inventoryContext = inventoryContext;
        }

        [HttpGet("api/settings")]
        public void SetCostFactor(int cost)
        {
            costFactor = cost;
        }

        [HttpGet("api/getCostFactor")]
        public int getCostFactor()
        {
            return (int)costFactor;
        }

        [HttpGet("api/getSpecials")]
        public List<MealResult> GenerateSuggestedSpecials()
        {
            double costFactor2 = costFactor / 10.0;
            
            var ingredientList = _inventoryContext.Ingredients.ToList();
            Inventory inv = new Inventory { items = ingredientList };
            var recipeList = _inventoryContext.Meals.ToList();
            recipeList = recipeList.OrderBy(o => o.Name).ToList();
            Menu menu = new Menu { items = new List<Recipe>() };
            string mealName = "";
            foreach (Meals ingredient in recipeList)
            {
                RecipeIngredient recIngr = new RecipeIngredient
                {
                    Name = ingredient.Ingredient,
                    Qty = ingredient.Quantity,
                    Unit = ingredient.Unit
                };
                if (ingredient.Name != mealName)
                {
                    mealName = ingredient.Name;
                    Recipe rec = new Recipe
                    {
                        entreeName = mealName,
                        items = new List<RecipeIngredient>
                        {
                            recIngr
                        }
                    };
                    menu.items.Add(rec);
                }
                else
                {
                    Recipe rec = menu.items[menu.items.Count - 1];
                    rec.items.Add(recIngr);
                    menu.items[menu.items.Count - 1] = rec;
                }
            }

            Dictionary<string, List<InventoryCost>> items = new Dictionary<string, List<InventoryCost>>();
            double maxPrice = 0;
            foreach (Ingredients ingr in inv.items)
            {
                double days = (ingr.ExpDate - DateTime.UtcNow).Days;
                double expCost = (days < 7) ? 1 - (days / 7) : 0;
                double curPrice = (double)ingr.Price * ingr.StockQty;
                maxPrice = (curPrice > maxPrice) ? curPrice : maxPrice;
                InventoryCost newValue = new InventoryCost
                {
                    ingredient = ingr,
                    weight = curPrice * costFactor2,
                    expWeight = expCost * (1-costFactor2),
                    totalCost = curPrice
                };
                if (items.ContainsKey(ingr.Name))
                {
                    List<InventoryCost> duplicateItems = new List<InventoryCost>();
                    items.TryGetValue(ingr.Name, out duplicateItems);
                    duplicateItems.Add(newValue);
                    items[ingr.Name] = duplicateItems;
                }
                else
                {
                    items.Add(ingr.Name, new List<InventoryCost> { newValue });
                }
            }
            foreach (KeyValuePair<string, List<InventoryCost>> entry in items)
            {
                foreach (InventoryCost invCost in entry.Value)
                {
                    invCost.weight /= maxPrice;
                    invCost.weight += invCost.expWeight;
                }
            }

            List<MealResult> resultList = new List<MealResult>();
            foreach (Recipe rec in menu.items)
            {
                double totalWeight = 0;
                double priceOfExpiringMaterials = 0;
                foreach (RecipeIngredient ingr in rec.items)
                {
                    List<InventoryCost> food = new List<InventoryCost>();
                    items.TryGetValue(ingr.Name, out food);
                    food = food.OrderByDescending(o => o.weight).ToList();
                    double qtyCounter = ingr.Qty;
                    int i = 0;
                    while (qtyCounter > 0)
                    {
                        qtyCounter -= food[i].ingredient.StockQty;
                        totalWeight += food[i].weight;
                        priceOfExpiringMaterials += food[i].totalCost;
                        i++;
                    }
                }
                resultList.Add(new MealResult
                {
                    recipe = rec,
                    weight = totalWeight,
                    priceOfExpiration = priceOfExpiringMaterials
                });
            }
            resultList = resultList.OrderByDescending(o => o.weight).ToList();
            return resultList;
        }


        [HttpGet("api/expiredIngredients")]
        public List<inventoryItem> GetExpiredIngredients()
        {
            List<inventoryItem> items = new List<inventoryItem>();

            foreach (var ingredient in _inventoryContext.Ingredients)
            {
                var name = ingredient.Name;
                int days = (ingredient.ExpDate - DateTime.UtcNow).Days;
                double weight = (days < 7) ? 1 - (days / 7) : 0;

                weight *= ((double)(ingredient.Price) * ingredient.StockQty);
                weight *= (((ingredient.UsePerWeek - ingredient.StockQty) / ingredient.UsePerWeek) > 0) ? ((ingredient.UsePerWeek - ingredient.StockQty) / ingredient.UsePerWeek) : 0;
                if (items.FirstOrDefault(x => x.name == ingredient.Name) == null)
                {
                    items.Add(new inventoryItem
                    {
                        name = name,
                        weight = weight,
                        quantity = ingredient.StockQty,
                        unit = ingredient.Unit
                    });
                }
                else
                {
                    var currItem = items.FirstOrDefault(n => n.name == ingredient.Name);
                    double currentWeight = currItem.weight;
                    currItem.weight = (currentWeight + weight) / 2;
                }
            }
            items.Add(new inventoryItem
            {
                name = "Asparagus",
                weight = 1.5,
                quantity = 5,
                unit = "pounds"

            });
            items = items.FindAll(o => o.weight > 0).OrderByDescending(o => o.weight).ToList();
            return items;
        }
    }
}
