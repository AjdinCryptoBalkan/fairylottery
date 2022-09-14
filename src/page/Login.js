import React from 'react'
import '../scss/Login.css'
import '../index.css'
import logophoto from './img/13732268_SL_020620_27780_03-removebg-preview1.svg'
import logo from './img/LairLottery.svg'
import Google from './img/Google.svg'
import Insagram from './img/Instgram.svg'
function Login() {
  return (
    <div className='app'>
    <div className='login-section'>
      <div className='container-fluid'>
        <img className='logo-photo' src={logophoto} />
        <img className='logo' src={logo} />
        <h1>Login</h1>
        <button className='btn-google'>
          <img src={Google} /> Sign with Google
        </button>
        <button className='btn-instgram'>
        <img src={Insagram} /> Sign with Instagram
        </button>
      
        <p className='sing'>Login with Mail</p>
        <label className='block label'>Email</label>
        <input className='Email-input' placeholder='mail@website.com' />
        <label className='block label'>Password</label>
        <input className='Password-input' placeholder='Password'type='password' />
        <p className='Forget-Password'><a href='/Register'>Register</a></p>

        <button className='login-btn'><a href='/app'>Login</a></button>
        <p className='Forget-Password'><a href='/forget-password'>Forget Password</a></p>
      </div>
      </div>
      <div className='photo'></div>
    </div>
    
  )
}

export default Login