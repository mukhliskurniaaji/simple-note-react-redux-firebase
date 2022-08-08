import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/atoms/Button';
import { registerUserAPI } from '../../../config/redux/action';

class Register extends Component {
  state = {
    email : "",
    password : '',
  }

  handleChangeText=(e)=>{
    this.setState({
      [e.target.id] : e.target.value,
    })
  }

  handleRegistreSubmit =()=>{
    const email = this.state.email;
    const password = this.state.password;

    this.props.registerAPI({email: email, password:password});
    // setelah click Button, kemudian mengosongkan form:
    this.setState({
      email:'',
      password:''
    })
  }

  render() {
    return (
      <div>
        <div>
        <h1>REGISTER PAGE</h1>
          <input 
              id='email' 
              placeholder='Email' 
              type='text' 
              value={this.state.email}
              onChange={this.handleChangeText} />
          <input 
              id='password' 
              placeholder='Password' 
              type='password' 
              value={this.state.password}
              onChange={this.handleChangeText} />
          <Button 
              onClick={this.handleRegistreSubmit} 
              title="Register" 
              loading={this.props.isLoading}/>
        </div>
      </div>
    )
  }
}

const reduxState = (state)=>({
  isLoading: state.isLoading
})

const reduxDispach=(dispatch)=>({
  registerAPI: (data)=>dispatch(registerUserAPI(data))
})

export default connect(reduxState, reduxDispach)(Register) ;