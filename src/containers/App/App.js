import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CardContainer from '../CardContainer/CardContainer'
import './App.css';
import SignUp from '../Authentication/SignUp/SignUp';
import SignIn from '../Authentication/SignIn/SignIn';
import { logOut } from '../../Action-creators/logOut';
import './App.css'

class App extends Component {

  render() {
    const { id, name, logoutUser } = this.props;
    return (
      <div className="App">
        <header>
          <h1 className='title'>Movie Tracker</h1>
          {id ? <h2>{`Welcome, ${name}!`}</h2> : <h2>Please sign in</h2>}
          {!id ? 
            <NavLink className='log-link' to='/login'>Login</NavLink> : 
            <NavLink className='log-link' to='/' onClick={logoutUser}>Sign Out</NavLink>}
          <Route exact path='/login' component={ SignIn } />
          <Route exact path='/signup' component={ SignUp } />
        </header>
        <Route path='/' component={ CardContainer }/>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  id: state.id,
  name: state.name,
})

export const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logOut())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
