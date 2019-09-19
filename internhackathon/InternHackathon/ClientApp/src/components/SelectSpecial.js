import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import { Card, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, Table, Popover, PopoverHeader, PopoverBody } from 'reactstrap'
import './SelectSpecial.css';


export class SelectSpecial extends Component {
  static displayName = SelectSpecial.name;

    constructor(props) {
        super(props);
        this.state = {
            selectspecials: [], loading: true
        }
        fetch('api/getspecials')
            .then(response => response.json())
            .then(data => {
                this.setState({ selectspecials: data, loading: false });
            });

    }

/**{
    image: "https://images.freshop.com/6985811/4fb80d9fdd07a57d587edbfde0ace644_medium.png",
        name: "Stuffed Mushrooms",
            ingredients: [{ ingredientName: "potatoes" }, { ingredientName: "cheese" }, { ingredientName: "mushrooms" }],
                numberOfIngredients: "20",
                    priceOfIngredients: "10"
},
{
    image: "https://images.freshop.com/6985811/4fb80d9fdd07a57d587edbfde0ace644_medium.png",
        name: "Stuffed Mushrooms",
            ingredients: [{ ingredientName: "potatoes" }, { ingredientName: "cheese" }, { ingredientName: "mushrooms" }],
                numberOfIngredients: "20",
                    priceOfIngredients: "10"
},
{
    image: "https://images.freshop.com/6985811/4fb80d9fdd07a57d587edbfde0ace644_medium.png",
        name: "Stuffed Mushrooms",
            ingredients: [{ ingredientName: "potatoes" }, { ingredientName: "cheese" }, { ingredientName: "mushrooms" }],
                numberOfIngredients: "20",
                    priceOfIngredients: "10"

} */

    static renderSpecials(selectspecials) {
        return (
            selectspecials.map(special =>
                <UncontrolledButtonDropdown id="specials-list-id" className="special">
                    <DropdownToggle id="specials-list-id">
                        <div id="specials-list-id" class="container">
                            <div id="specials-list-id" class="row">
                                <div id="specials-list-id" class="col-sm">
                                    <h5>{special.recipe.entreeName}</h5>
                                </div>
                                <div class="col-sm">
                                    <h5>Ingredients</h5>
                                    <div>
                                        {special.recipe.items.map(ingredient =>
                                            <div class="list-item"> {ingredient.name} </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Number of Dishes: {special.numberOfIngredients}</DropdownItem>
                        <DropdownItem>Price of Expiring Ingredients: ${special.priceOfExpiration}</DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
            )
        )
    }

render() {
    let contents = SelectSpecial.renderSpecials(this.state.selectspecials);
    return (
      <div>
            <h4 class="select-specials">Select Specials</h4>
            <h5>Suggested Specials for the Day</h5>
            <Card>
                {contents}
            </Card>
        </div>
    );
  }
}