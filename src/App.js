import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './page/Login'
import Register from './page/Register'
import WebApp from './page/App'
import ForgetPassword from './page/ForgetPassword'
import AddFonud from './page/Add-Founds'
import WithDraw from './page/Withdraw'
import BadPage from './page/404'
import Navbar from "./Components/Navbar";

function App() {

  return (
    <>

    <Router>
      
        <Routes>
        
            <Route path="/" element={<Login/>} /> 
            <Route path="/register" element={<Register/>} /> 
            <Route path="/forget-password" element={<ForgetPassword/>} /> 
            <Route path="/app" element={<WebApp/>} /> 
            <Route path="/add-fonud" element={<AddFonud/>} /> 
            <Route path="/withdraw" element={<WithDraw/>} /> 
            <Route path="*" element={<BadPage/>} />
        </Routes>
    </Router>
   
    </>
    
  )
}

export default App