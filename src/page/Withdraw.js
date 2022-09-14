import React from 'react'
import '../scss/Withdraw.css'
import Navbar from '../Components/Navbar'
import PayPal from './img/paypal-logo-24.png'
import Pay from './img/mastercard-logo-24.png'
import Instgram from './img/Instgram.svg'
function Withdraw() {
  return (
    <div className='app'>
       <Navbar/>
       <center>
       <div className='blocks'>
        <div className='left-block'>
       <button className='paypal-btn'><img src={PayPal}/>PayPal</button>
       <button className='paypal-btn top'><img src={Pay}/>Card</button>
       </div>
       <input placeholder='PayPal' className='Paypal-input block' type='email'/>
       <input placeholder='Sum' className='Sum-inputs' type='number'/>
       <button className='btn-withdraw'>Withdraw</button>
       <p className='p-text'>Show off to your friends and get a $1 bonus</p>
       <button className='instargam-btn'><img src={Instgram} /> Add on Story</button>
       </div>
       </center>
    </div>
  )
}

export default Withdraw