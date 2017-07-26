import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './BaseLayout';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;
