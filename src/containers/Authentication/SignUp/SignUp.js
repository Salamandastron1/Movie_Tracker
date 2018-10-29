import React, { Component }  from 'react';
import * as API from '../../../util/helper';
import { connect } from 'react-redux';
import { errorReceived } from '../../../Action-creators/errorReceived';
import { getId } from '../../../Action-creators/getId';
import { getName } from '../../../Action-creators/getName';
import { logOut } from '../../../Action-creators/logOut';

export class SignUp extends Component {
  constructor(props) {
    super(props)
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
    let currentUser;

    try {
      currentUser = await API.loginUser(this.state);
      this.props.loginUser(currentUser.id, currentUser.name);
      this.props.setError('');
    } catch (error) {
      this.props.setError(error.message);
    }
    this.setState({ name: '', email: '', password: ''});
  }

  render() {
    const { name, email, password } = this.state;
    const { error, id, logoutUser} = this.props;

    let form;

    if (id) {
      form = <input 
              type='button'
              value='Sign Out' 
              onClick={logoutUser}/>
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

export const mapStateToProps = state => ({ id: state.id, error: state.error, name: state.name })

export const mapDispatchToProps = dispatch => ({ 
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
    })

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);