import React from 'react';
import Home from './Home';
import About from './About'
import Links from './Links';
import Contact from './Contact';
import adminlogin from './admin-login'
import blog from './Blog'
import error from "./404";

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/links" component={Links} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Blog" component={blog} />
            <Route exact path="/admin-login" component={adminlogin} />
            <Route component={error} />
          </Switch>
        </BrowserRouter >
      </div>
    );
  }
}
export default App;
