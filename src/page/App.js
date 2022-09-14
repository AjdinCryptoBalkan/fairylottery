import React from 'react'
import  Navabars from '../Components/Navbar'
import '../scss/Apps.css'
function App() {
  return (
    <div className='app'>
      <Navabars />
      <center>
      <div className='block-one'>
      <h1 className='los-get'>Congratulations</h1>
      <h2 className='lot'>1094908901</h2>
      <input type='number' className='sum' placeholder='Sum' />
      
      <input type='number' className='lvg' placeholder='Lavergae min x2'/>

      <button className='btn_bet'>Bet</button>
      </div>
      </center>
    </div>
  )
}

export default App