import React from 'react'
import '../scss/Navbar/Navbar.css'
import LogoImg from '../page/img/13732268_SL_020620_27780_03-removebg-preview1.svg'
import Logo from '../page/img/LairLottery.svg'
import Wallet from '../page/img/Wallet.png'
import Money from '../page/img/Money.png'
import Menu from '../page/img/bx-menu.svg'
import x from '../page/img/x-regular-24.png'
import * as ReactDOM from 'react-dom';

function Navbar() {
  const el = document.querySelector('.menu-block');

function Close(e){
  e.preventDefault();
el.style.display = 'none'
}
  return (
    <nav className='main-navbar'>
    <div className='container'>
      <div className='block'>
        <a href='/app'>
    <img className='logo-img' src={LogoImg} />
    <img className='logo' src={Logo} />
    </a>
    </div>
    <lu className="Meni">
      <li>
        <div className='found'>
      <p>€</p>
      <p className='balance'>2.00</p>
        </div></li>

        <li className='one'><button className='btn-new'><img src={Wallet}/><a href='/add-fonud'>Add Founds </a></button></li>
        <li className='two'><button className='btn-new'><img src={Money}/><a href='/withdraw'> Withdraw</a></button></li>
        <li><img onClick={() => el.style.display = 'block'} src={Menu} className="menu" /></li>
    </lu>
    </div>
    <div className='menu-block'id="menu-block-like" >
      <center className="top-s">
      <a href='/add-fonud'><button id='AddFonud-btn-mobile' className='AddFonud-btn-mobile'><img src={Wallet}/>Add Founds</button></a>
      <a href='/withdraw'><button id='AddFonud-btn-mobile' className='AddFonud-btn-mobile'><img src={Money}/> Withdraw</button></a>
      <div className='squre'>
      <img src={x} className="x" alt="" onClick={Close} srcset="" />
      </div>
      </center>
    </div>
  </nav>
  )
}

export default Navbar