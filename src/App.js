import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Navbar from './components/Navbar';


export default function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
      <Route path='/Home' element={<Home
        />} />
        <Route path='/' element={<Home
        />} exact/>
      </Routes>
    </Router>


  )
}
