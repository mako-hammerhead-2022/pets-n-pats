import React from 'react'
import { Link, Routes } from 'react-router-dom'

import './App.css'
import Login from './components/Login'

function App() {
  return (
    <div className='App'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
        <Login />
      </nav>
      <h2>{"Welcome to Pets 'n' Pats"}</h2>
      <Routes></Routes>
    </div>
  )
}

export default App
