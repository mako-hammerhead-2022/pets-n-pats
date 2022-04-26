import React from 'react'
import { Link } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className='App'>
      <nav>
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
