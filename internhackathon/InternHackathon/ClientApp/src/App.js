import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Login } from './components/Login';
import { DefaultContainer } from './components/DefaultContainer';

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
          <div>
            <Switch>
              <Route path='/login' component={Login} />
                  <Route component={DefaultContainer} />
            </Switch>
                
      </div>
    ); 
  }
}
