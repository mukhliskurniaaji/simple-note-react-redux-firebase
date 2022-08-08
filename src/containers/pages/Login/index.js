import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/atoms/Button';
import { loginUserAPI } from '../../../config/redux/action';


class Login extends Component {

  state = {
    email : "",
    password : '',
  }

  handleChangeText=(e)=>{
    this.setState({
      [e.target.id] : e.target.value,
    })
  }

  // menangani data promis yg dikirim ari server
  handleLoginSubmit =()=>{
    const email = this.state.email;
    const password = this.state.password;
    const {history} = (this.props)
    console.log(history) 

    this.props.loginAPI({email: email, password:password})
      .then ((response)=>{
        console.log('LOGIN BERHASIL')
        this.setState({
          email:'',
          password:''
        })
        console.log('Sebelum dipush')
             
        console.log('Setelah dipush')
      })
      .catch(function (error) {
        console.log=error.message;
        console.log=error.code;
        const Gagal = "Login Gagal Bos!";
        console.log=Gagal;
      })
  }    
  

  render() {
    return (
      <div>
        <div>
          <h1>LOGIN PAGE</h1>
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
              onClick={this.handleLoginSubmit} 
              title="Login" 
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
  loginAPI: (data)=>dispatch(loginUserAPI(data))
})

export default connect(reduxState, reduxDispach)(Login) ;

// untuk menggunakan store dari global (App), kita gunakan connect :
// pada state global, state mempunyai 2, yaitu popun dan isLogin
/*
const reduxState=(state)=>({ //state ini dari global (di App)
  popupProps : state.popup, 
  userName : state.user,
})

const reduxDispatch=(dispatch)=>({
  changeUserName: () => dispatch(actionUserName()) //dispatch tidak bisa asyc
})

export default connect(reduxState, reduxDispatch)(Login) ;
*/
// connect(reduxState, null), reduxState berarti state dari global,
// sedangkan reduxDispach nya nanti diisi dispach/aksi
