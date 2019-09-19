import React, { Component } from 'react';
import './NavMenu.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';


export class NavMenu extends Component {

    static displayName = NavMenu.name;

    constructor(props) {
        super(props);
        this.state = { value: "home" };
        this.changeHandle = this.changeHandle.bind(this);
    }

    changeHandle(event, newState) {
        this.setState({ value: newState });
    };
    
    render() {
    return (
        <BottomNavigation value={this.state.value} onChange={this.changeHandle}>
            <BottomNavigationAction component={Link} to="/home" label="Home" value="home" icon={<HomeIcon />} />
            <BottomNavigationAction component={Link} to="/selectspecial" label="Specials" value="specials" icon={<LocalDiningIcon />} />
            <BottomNavigationAction component={Link} to="/shoppinglist" label="Shopping" value="shopping" icon={<ShoppingCartIcon />} />
            <BottomNavigationAction component={Link} to="/settings" label="Settings" value="settings" icon={<SettingsIcon />} />
            <BottomNavigationAction component={Link} to="/login" label="Logout" value="logout" icon={<HighlightOffIcon />} />
        </BottomNavigation>
        );
    }
}
