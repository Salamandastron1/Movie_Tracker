import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CardContainer from '../CardContainer/CardContainer'
import './App.css';
import SignUp from '../Authentication/SignUp/SignUp';
import SignIn from '../Authentication/SignIn/SignIn';

class App extends Component {

  render() {
    const { id, name } = this.props;
    return (
      <div className="App">
        {id ? <h2>{`Welcome back, ${name}!`}</h2> : <h2>Please sign in</h2>}
        <NavLink to='/login'>
          Login 
        </NavLink>
        <Route exact path='/login' component={ SignIn } />
        <Route exact path='/signup' component={ SignUp } />
        <Route path='/' component={ CardContainer }/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.id,
  name: state.name,
})

export default withRouter(connect(mapStateToProps, null )(App));
