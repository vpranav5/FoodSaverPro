import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from './Layout';
import { Home } from './Home';
import { ShoppingList } from './ShoppingList';
import { SelectSpecial } from './SelectSpecial';
import { NavMenu } from './NavMenu';
import './DefaultContainer.css'
import { Settings } from './Settings';

export class DefaultContainer extends Component {
    static displayName = DefaultContainer.name;

    render() {
        return (
            <div>
                <div className="layoutContainer">
                    <Layout>
                        <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/shoppinglist' component={ShoppingList} />
                    <Route path='/selectspecial' component={SelectSpecial} />
                    <Route path='/settings' component={Settings} />
                    <Route path='*' component={Home} />
                    </Switch>
                </Layout>
                </div>
                <NavMenu />
            </div>
        );
    }
}
