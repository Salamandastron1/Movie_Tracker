import React, { Component }  from 'react';

export class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }

  }

  render() {
    const { name, email, password } = this.state
    return (
      <form 
      onSubmit={}>
        <input 
          onChange={}
          name="name" 
          value={name} 
          placeholder="Enter your name"/>
        <input 
          onChange={}
          name="email" 
          value={email} 
          placeholder="Enter your email"/>
        <input 
          onChange={}
          name="password" 
          value={password} 
          type="password" 
          placeholder="Enter your password"/>
      </form>

    )
  }



}