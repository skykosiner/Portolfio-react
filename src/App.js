import React from 'react';
import Home from './Home';
import About from './About'
import Links from './Links';
import Contact from './Contact';
import blog from './Blog'
import Login from './Login'
import fire from './config/Fire'
import error from "./404";

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
      <div className="App" >
        {this.state.user ? (
          <Home />
        ) :
          (
            <Login />
          )}
        <BrowserRouter>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/links" component={Links} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Blog" component={blog} />
            <Route component={error} />
          </Switch>
        </BrowserRouter >
      </div>
    );
  }
}
export default App;
