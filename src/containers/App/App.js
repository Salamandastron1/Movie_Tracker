import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CardContainer from '../CardContainer/CardContainer'
import './App.css';
import SignUp from '../Authentication/SignUp/SignUp';
import SignIn from '../Authentication/SignIn/SignIn';
import { logOut } from '../../Action-creators/logOut';
import {showFavorites} from '../../Action-creators/showFavorites'
import './App.css';
import {showAll} from '../../Action-creators/showAll'

class App extends Component {

  render() {
    const { id, name, logoutUser, showFavorites, favorites, showAll } = this.props;
    return (
      <main className="App">
        <header>
          <NavLink 
            className='title'
            to='/'
            onClick={showAll}
          >
            Movie Tracker
          </NavLink>
          {id ? <h2>{`Welcome, ${name}!`}</h2> : null}
          {!id ? 
            <NavLink 
              className='log-link' 
              to='/login'>
              Login
              <i class="fas fa-sign-in-alt"></i>
            </NavLink> : 
            <NavLink className='log-link' to='/' onClick={logoutUser}>Sign Out</NavLink>}
          {id && favorites === 'SHOW_ALL' ? <NavLink 
                  to='/favorites'
                  onClick={showFavorites}
                  className='favorites'>
                  Favorites
                </NavLink>: null}
          <Route exact path='/login' component={ SignIn } />
          <Route exact path='/signup' component={ SignUp } />
        </header>
        <Route path='/' component={ CardContainer }/>
        {/*<Route exact path='/favorites' component={CardContainer} />*/}
      </main>
    );
  }
}

export const mapStateToProps = (state) => ({
  id: state.id,
  name: state.name,
  favorites: state.favorites,
})

export const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logOut()),
  showFavorites: () => dispatch(showFavorites()),
  showAll: () => dispatch(showAll())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
