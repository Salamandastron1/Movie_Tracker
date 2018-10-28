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

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { name, email, password } = this.state
    return (
      <form 
      onSubmit={''}>
        <input
          id='name' 
          onChange={this.handleChange}
          name="name" 
          value={name} 
          placeholder="Enter your name"/>
        <input 
          id='email' 
          onChange={this.handleChange}
          name="email" 
          value={email} 
          placeholder="Enter your email"/>
        <input 
          id='password' 
          onChange={this.handleChange}
          name="password" 
          value={password} 
          type="password" 
          placeholder="Enter your password"/>
      </form>

    )
  }



}