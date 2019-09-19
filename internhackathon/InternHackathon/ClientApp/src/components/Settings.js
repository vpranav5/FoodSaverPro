import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import Box from '@material-ui/core/Box';
import './Layout.css';

import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';


export class Settings extends Component {

    constructor(props) {
        super(props);
        this.setCost = this.setCost.bind(this);
        this.state = {
            factor: [], loading: true
        }
        fetch('api/getCostFactor')
            .then(response => response.json())
            .then(data => {
                this.setState({ factor: data, loading: false });
            });
    }

    setCost(cost) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', '/api/settings?cost='+cost, true);
        xhr.send();
        document.getElementById("costFactor").innerHTML = "Current Factor: " + cost;
    }

    static renderSpecials(factor) {
        return (<h3 align="center" id="costFactor">Current Factor: {factor}</h3>);
    }

    render() {
        let contents = Settings.renderSpecials(this.state.factor);
        return (
        <div>
        <Box height={40}></Box>
                <h1 align="center">Settings</h1>
                {contents}
        <Box height={15}></Box>      
        <p align="center">Choose a setting between 0-10 to prioritize between saving "Material Cost," and "Food Waste." "Material Cost" being "0" and "Food Waste" being "10."</p>
        <Box height={15}></Box>
        <ButtonToolbar id="foo" align="center">
            <ButtonGroup>
            <Button onClick={() => this.setCost(0)}>0</Button>
            <Button onClick={() => this.setCost(1)}>1</Button>
            <Button onClick={() => this.setCost(2)}>2</Button>
            <Button onClick={() => this.setCost(3)}>3</Button>
            <Button onClick={() => this.setCost(4)}>4</Button>
            <Button onClick={() => this.setCost(5)}>5</Button>
            <Button onClick={() => this.setCost(6)}>6</Button>
            <Button onClick={() => this.setCost(7)}>7</Button>
            <Button onClick={() => this.setCost(8)}>8</Button>
            <Button onClick={() => this.setCost(9)}>9</Button>
            <Button onClick={() => this.setCost(10)}>10</Button>
            </ButtonGroup>
        </ButtonToolbar>
        <Box height={100}></Box>
          </div>
    );
  }
}
