import './App.css';
import Nav from './nav/nav';
import Header from './header/header';
import Main from './main/main';
import About from './about/about';
import Portfolio from './portfolio/portfolio';
import Skils from './skils/skils';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Nav/>
      <Header/>
        <Router>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/skils" component={Skils}/>
          </Switch>
        </Router>
    </div>
    );
  }
}

export default App;
