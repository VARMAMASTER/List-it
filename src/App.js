import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Login from './components/Login';


export default function App() {
  return (
    <Router>
    
      <Routes>
      <Route path='/Home' element={<Home
        />} />
        <Route path='/' element={<Home
        />} exact/>
        <Route path='/login' element={<Login/>} exact/>
      </Routes>
    </Router>


  )
}
