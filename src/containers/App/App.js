import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CardContainer from '../CardContainer/CardContainer'
import './App.css';
import SignUp from '../Authentication/SignUp/SignUp';
import SignIn from '../Authentication/SignIn/SignIn'

class App extends Component {

  render() {
    const { id , name } = this.props;
    return (
      <div className="App">
        {id ? <h2>{`Welcome back, ${name}!`}</h2> : <h2>Please sign in</h2>}
        <SignIn />
        <SignUp />
        <Route exact path='/' component={ CardContainer }/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.id,
  name: state.name,
})

export default connect(mapStateToProps , null)(App);
