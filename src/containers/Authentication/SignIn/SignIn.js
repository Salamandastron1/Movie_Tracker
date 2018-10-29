import React, { Component }  from 'react';
import * as API from '../../../util/helper';
import { connect } from 'react-redux';
import { errorReceived } from '../../../Action-creators/errorReceived';
import { getId } from '../../../Action-creators/getId';
import { getName } from '../../../Action-creators/getName';
import { logOut } from '../../../Action-creators/logOut';

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
    } catch (error) {
      this.props.setError(error.message);
    }
  }

  render() {
    const { email, password } = this.state;
    const { error, id, name, logoutUser} = this.props;

    let form;

    if (id) {
      form = <input 
              type='button'
              value='Sign Out' />
    } else {
      form = (
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
        </form>)
    }
    return form;
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
    logoutUser: () => {
      dispatch(logOut())
    },
    setError: (error) => {
      dispatch(errorReceived(error))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
