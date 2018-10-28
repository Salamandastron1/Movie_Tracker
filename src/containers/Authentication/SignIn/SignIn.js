import React, { Component }  from 'react';
import * as API from '../../../util/helper'

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
    const { password, email } = this.state;
    const user = { password, email };
    e.preventDefault();
    try {
      await API.loginUser(user);
      //this.props.loginUser(user);
    } catch (error) {
      //this.props.setError(error);
    }
  }

  render() {
    const { email, password } = this.state
    const { error } = this.props;
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
      </form>
    )
  }
}