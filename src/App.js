import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Auth from './components/Auth';
import AboutDeveloper from './components/AboutDeveloper';

export default function App() {
  return (
    <Router>
      <Routes>
      <Route path='/Home' element={<Home
        />} />
        <Route path='/' element={<Home
        />} exact/>
        <Route path='/login' element={<Auth/>} exact/>
        <Route path='/AboutDeveloper' element={<AboutDeveloper/>} exact/>
      </Routes>
    </Router>


  )
}
