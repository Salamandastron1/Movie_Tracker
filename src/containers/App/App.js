import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import * as API from '../../util/API.js'
// import Home from '../../Home'

class App extends Component {


  componentDidMount async ({
    const initialMovieData = await API.getMovieData()
  })

  render() {
    return (
      <div className="App">
        {/* <Switch>
          <Route exact path='/'/>
        </Switch> */}
      </div>
    );
  }
}

export default App;
