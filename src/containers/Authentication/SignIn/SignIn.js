import React, { Component }  from 'react';
import * as API from '../../../util/helper';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { errorReceived } from '../../../Action-creators/errorReceived';
import { getId } from '../../../Action-creators/getId';
import { getName } from '../../../Action-creators/getName';
import { toggleFavorite } from '../../../Action-creators/toggleFavorite';
import { setMostRecent } from '../../../Action-creators/setMostRecent';

import './SignIn.css';


export class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  }

  updateValue = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }

  loginUser = async (e) => {
    e.preventDefault();
    let currentUser;
    try {
      currentUser = await API.loginUser(this.state);
      this.props.loginUser(currentUser.id, currentUser.name);
      const faves = await API.getFavorites(currentUser.id);
        faves.forEach(fave => {
          const isIncluded = this.props.movies.some(movie => {
            return movie.id === fave.movie_id
          })
          if(isIncluded) {
            this.props.updateFavorite(fave.movie_id)
          } else {
            const oldFave = {
              title: fave.title,
              poster_path: fave.poster_path,
              overview: fave.overview,
              release_date: fave.release_date,
              favorited: true,
              id: fave.movie_id,
              vote_average: fave.vote_average,
            }
            this.props.pushFavorite([oldFave])
          }
        })
      this.props.setError('');
      this.props.history.push('/');
    } catch (error) {
      this.props.setError(error.message);
    }
  }

  render() {
    const { email, password } = this.state;
    const { error, id, name } = this.props;

    return (
      <form 
        className='sign-in-form'
        onSubmit={this.loginUser}>
        { error !== '' && <h2 className="error"> { error } </h2> }
        <input 
          className='email' 
          onChange={this.updateValue}
          name="email" 
          value={email} 
          placeholder="Enter your email"/>
        <input 
          className='password' 
          onChange={this.updateValue}
          name="password" 
          value={password} 
          type="password" 
          placeholder="Enter your password"/>
        <input 
          className='submit'
          type='submit'
          value='Sign In' />
        <NavLink 
        className='sign-up'
        to='/signup'>
          Sign up 
        </NavLink>
      </form>
    )
  }
}

export const mapStateToProps = state => {
  return { 
    id: state.id, 
    error: state.error, 
    name: state.name,
    movies: state.movies
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    loginUser: (id, name) => {
      dispatch(getId(id))
      dispatch(getName(name))
    },
    setError: (error) => {
      dispatch(errorReceived(error))
    },
    updateFavorite: (id) => {
      dispatch(toggleFavorite(id))
    },
    pushFavorite: (fave) => {
      dispatch(setMostRecent(fave))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
