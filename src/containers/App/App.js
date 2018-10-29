import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import CardContainer from '../CardContainer/CardContainer'
import './App.css';
import SignUp from '../Authentication/SignUp/SignUp';
import {SignIn} from '../Authentication/SignIn/SignIn'

class App extends Component {

  render() {
    return (
      <div className="App">
        <SignIn />
        <SignUp />
        <Route exact path='/' component={ CardContainer }/>
      </div>
    );
  }
}

export default App;
