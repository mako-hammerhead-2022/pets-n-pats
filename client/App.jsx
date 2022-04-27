import React from 'react'
import { Link, Routes } from 'react-router-dom'
import MyPets from './components/MyPets'


import './App.css'
import Login from './components/Login'

function App() {
  return (
    <div className='App'>
      < MyPets userId = '6'/>
      <nav>
        <Login />
        <ul>
          <li>
            <Link to='/'>Home</Link>
            
          </li>
        </ul>
      </nav>
      <h2>{"Welcome to Pets 'n' Pats"}</h2>
    </div>
  )
}

export default App
