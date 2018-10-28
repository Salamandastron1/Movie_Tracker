import React, { Component }  from 'react';
import * as API from '../../../util/helper'

export class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }

  }

  updateValue = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }

  loginUser = (e) => {
    e.preventDefault();
    API.getUser(this.state)
  }

  render() {
    const { email, password } = this.state
    return (
      <form 
      onSubmit={this.loginUser}>
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