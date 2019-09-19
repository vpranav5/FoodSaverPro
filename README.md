# FoodSaverPro

FoodSaver Pro is a web application designed to minimize food waste by suggesting menu items to prioritize based on which ingredients are expiring the fastest. The application pulls the active inventory list from a restaurant’s database and parses through the shelf life of each ingredient to determine the expiring time frame. It will then scan through the target restaurant’s menu and then rank the dishes based on the percentage of soon-to-expire ingredients they will use up. The dishes ranked at the top of the list will be highlighted on the “suggested specials” menu to encourage customers to order them. We’ve also allowed the restaurant to specific how much they want to prioritize saving immediately expiring foods vs prioritizing weekly costs saved. For example, if there are 2 cartons of milk costing 2.00 expiring tomorrow vs 3 pounds of steaks costing 15.00 expiring 4 days from now, the user can prioritize using up the milk or using up the steaks, or a balance between both extremes. This level of priority can be set by the restaurant in a settings page we’ve configured. Once this is done, the user will be directed to either a suggest specials page or a shopping list page. The suggest specials page will list in order the menu items that should be prioritized and the shopping list page will generate a list of ingredients to order for next week based on current inventory, which ingredients were most frequently used, and which dishes to prioritize.
