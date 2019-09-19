import React, { Component } from 'react';
import { Container, Card, Button, Table } from 'reactstrap';
import { NavMenu } from './NavMenu';
import './styles.css';
import Box from '@material-ui/core/Box';

export class ShoppingList extends Component {
    static displayName = ShoppingList.name;

    constructor(props) {
        super(props);
        this.state = {
            shoppinglist: [], loading: true
        }
        fetch('api/expiredingredients')
            .then(response => response.json())
            .then(data => {
                this.setState({ shoppinglist: data, loading: false });
            });

        /*{
            id: 1,
                image: "https://images.freshop.com/6985811/4fb80d9fdd07a57d587edbfde0ace644_medium.png",
                    name: "Potatoes"
        },
        {
            id: 2,
                image: "https://images.freshop.com/00033383655024/2e5a1b860ebf3f83c863bde07a66dd1f_medium.png",
                    name: "Tomatoes"
        },
        {
            id: 3,
                image: "https://images.freshop.com/00033383655024/2e5a1b860ebf3f83c863bde07a66dd1f_medium.png",
                    name: "Tomatoes"
        }*/
    }

    static renderShoppingTable(shoppinglist) {
        return (
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                shoppinglist.map((special, index) =>
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{special.name}</td>
                                        <td>{special.quantity} {special.unit}</td>

                                    </tr>
                             )}
                        </tbody>
                    </Table>
            )
    }

    render() {
        let contents = ShoppingList.renderShoppingTable(this.state.shoppinglist);
        return (
            <div>
                <Box height={40}></Box>
                <Container style={{ backgroundColor: '#FFFFFF', borderColor: '#C9E188' }}>
                    <Box height={10}></Box>
                    <h1 align="center">Shopping List</h1>
                    <Box height={10}></Box>
                </Container>
                <Box height={30}></Box>
                <Card>
                <h5 align="center">These items are expiring soon!</h5>
                    {contents}
                </Card>
                <div className="container">
                    <Box height={40}></Box>
                    <div className="col text-center">
                        <Button align="center">Order Now</Button>
                    </div>
                    <Box height={40}></Box>
                </div>
            </div>        
                );
            }
        }
