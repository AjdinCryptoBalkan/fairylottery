import React from 'react'
import '../scss/AddFonud.css'
import card from './img/mastercard-logo-24.png'
import paypal from './img/paypal-logo-24.png'

import Navbar from '../Components/Navbar'
function AddFounds() {
  return (
    <div className='app'>
      <Navbar/>
      <center>
        <div className='input-section'>
        <input className='sum-input' placeholder='Sum' type='number'/>
        <input className='card-input' placeholder='Card'type='number'/>
        <input className='date-input' placeholder='Date'type='number'/>
        <input className='CVV-input' placeholder='CVV'type='number'/>
        <input className='CardHolderName-input' placeholder='Card Holder Names'/>
        <button className='btn-pay'><img src={card} />Pay</button>
   
        <button className='paypal-btn'><img src={paypal} />PayPal</button>
        </div>
      </center>
      </div>
  )
}

export default AddFounds