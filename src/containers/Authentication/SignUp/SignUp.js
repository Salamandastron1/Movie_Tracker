import React, { Component }  from 'react';
import * as API from '../../../util/helper'

export class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
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

  submitNewUser = (e) => {
    e.preventDefault();
    debugger;
    API.addUser(this.state)
  }

  render() {
    const { name, email, password } = this.state
    return (
      <form 
      onSubmit={this.submitNewUser}>
        <input
          className='name' 
          onChange={this.updateValue}
          name="name" 
          value={name} 
          placeholder="Enter your name"/>
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
          value='Sign Up'/>
      </form>
    )
  }



}