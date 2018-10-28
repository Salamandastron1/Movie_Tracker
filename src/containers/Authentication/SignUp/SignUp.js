import React, { Component }  from 'react';
import * as API from '../../../util/helper'

export class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
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

  submitNewUser = async (e) => {
    e.preventDefault();
    const { name , email , password } = this.state;
    let currentUser;
    try {
      currentUser = await API.loginUser(this.state);
      return currentUser;
    } catch (error) {
      //this.props.setError(error);
    }
    //this.props.loginUser(currentUser);
  }

  render() {
    const { name, email, password } = this.state;
    const { error, id } = this.props;

    let form;

    if (id) {
      form = <input 
              type='button'
              value='Sign Out' />
    } else {
      form = (
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
          </form>)
    }
    return form;
  }



}