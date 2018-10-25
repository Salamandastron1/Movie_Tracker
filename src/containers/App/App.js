import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import CardContainer from '../CardContainer/CardContainer'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={ CardContainer }/>
      </div>
    );
  }
}

export default App;
