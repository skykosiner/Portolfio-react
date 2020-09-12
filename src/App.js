import React from 'react';
import Home from './Home';
import About from './About'
import Links from './Links';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  console.log("Hello why are you here?")
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/links" component={Links} />
        </Switch>
      </BrowserRouter >
    </div>
  );
}

export default App;