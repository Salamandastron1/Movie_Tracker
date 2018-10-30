import React, { Component }  from 'react';
import * as API from '../../../util/helper';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { errorReceived } from '../../../Action-creators/errorReceived';
import { getId } from '../../../Action-creators/getId';
import { getName } from '../../../Action-creators/getName';

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
      const faves = API.getFavorites(currentUser.id);
        faves.forEach(faves => {
          if(this.props.movies.some( ( ) => {
            
          }))
        })
      this.props.setError('');
      this.props.history.push('/');
      this.setState({ email: '', password: ''});
    } catch (error) {
      this.props.setError(error.message);
    }
  }

  render() {
    const { email, password } = this.state;
    const { error, id, name } = this.props;

    return (
      <form 
        onSubmit={this.loginUser}>
        { error !== '' && <h2> { error } </h2> }
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
          type='submit'
          value='Sign In' />
        <NavLink to='/signup'>
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
