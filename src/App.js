import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Auth from './components/Auth';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <Router>
     <Navbar/>
      <Routes>
      <Route path='/Home' element={<Home
        />} />
        <Route path='/' element={<Home
        />} exact/>
        <Route path='/login' element={<Auth/>} exact/>
        <Route path='/login/todos' element={<TodoList/>}exact/>
      </Routes>
    </Router>


  )
}
