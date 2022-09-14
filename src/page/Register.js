import React from 'react'
import '../scss/Register.css'
import logophoto from './img/13732268_SL_020620_27780_03-removebg-preview1.svg'
import logo from './img/LairLottery.svg'
import Google from './img/Google.svg'
import Insagram from './img/Instgram.svg'
function Register() {
  return (
    <div className='app'>
    <div className='login-section'>
      <div className='container-fluid'>
        <img className='logo-photo' src={logophoto} />
        <img className='logo' src={logo} />
        <h1>Register</h1>
        <button className='btn-google'>
          <img src={Google} /> Sign with Google
        </button>
        <button className='btn-instgram'>
        <img src={Insagram} /> Sign with Instagram
        </button>
      
        <p className='sing'>Register with Mail</p>
        <label className='block label'>Name</label>
        <input className='Name-input' placeholder='Name' />
        <label className='block label'>Email</label>
        <input className='Email-input' placeholder='mail@website.com' />
        <label className='block label'>Password</label>
        <input className='Password-input' placeholder='Password' type='password' />
        <button className='login-btn' type='submite'><a href='/app'>Register</a></button>
        
      </div>
      </div>
      <div className='photo'></div>
    </div>
    
  )
}

export default Register