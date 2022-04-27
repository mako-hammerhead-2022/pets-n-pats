import React from 'react'
import { Link, Routes } from 'react-router-dom'
import MyPets from './components/MyPets'
import './App.css'

function App() {
  return (
    <div className='App'>
      < MyPets userId = '6'/>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
            
          </li>
        </ul>
      </nav>
      <h2>{"Welcome to Pets 'n' Pats"}</h2>
      <Routes></Routes>
    </div>
  )
}

export default App
