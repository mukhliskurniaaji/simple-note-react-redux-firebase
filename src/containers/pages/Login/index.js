import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/atoms/Button';
import { loginUserAPI } from '../../../config/redux/action';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login (props) {
  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail=(e)=>{
    setEmail(e.target.value);
  }

  const handleChangePassword=(e)=>{
    setPassword(e.target.value);
  }

  // menangani data promis yg dikirim ari server
  const handleLoginSubmit =()=>{
    
    props.loginAPI({email: email, password:password})
      .then ((response)=>{
        console.log('LOGIN BERHASIL')
        setEmail('');
        setPassword('');
        console.log('Sebelum dipush')
             navigate('/')
        console.log('Setelah dipush')
      })
      .catch(function (error) {
        console.log=error.message;
        console.log=error.code;
        const Gagal = "Login Gagal Bos!";
        console.log=Gagal;
      })
  }    
  

  
    return (
      <div>
        <div>
          <h1>LOGIN PAGE</h1>
          <input 
              id='email' 
              placeholder='Email' 
              type='text' 
              value={email}
              onChange={handleChangeEmail} />
          <input 
              id='password' 
              placeholder='Password' 
              type='password' 
              value={password}
              onChange={handleChangePassword} />
          <Button 
              onClick={handleLoginSubmit} 
              title="Login" 
              loading={props.isLoading}/>
        </div>
      </div>
    )
  
}

const reduxState = (state)=>({
  isLoading: state.isLoading
})

const reduxDispach=(dispatch)=>({
  loginAPI: (data)=>dispatch(loginUserAPI(data))
})

export default connect(reduxState, reduxDispach)(Login) ;

