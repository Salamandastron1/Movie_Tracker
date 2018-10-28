import React, { Component }  from 'react';
import * as API from '../../../util/helper'

export class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      error: '',
    }

  }

  updateValue = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }

  submitNewUser = async (e) => {
    const { name , email , password } = this.state;
    const user = { name , email , password };
    e.preventDefault();
    try {
      await API.addUser(user)
      this.setState({ error: '' });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    const { name, email, password , error } = this.state
    return (
      <form 
      onSubmit={this.submitNewUser}>
        { error !== '' && <h2>{error}</h2> }
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