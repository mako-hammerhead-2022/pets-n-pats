import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Voting from './components/Voting'

import './App.css'

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <h2>{"Welcome to Pets 'n' Pats"}</h2>
      <Routes>
        <Route path="/" element={<div>Home Route</div>} />
        <Route path="/voting" element={<Voting />} />
      </Routes>
    </div>
  )
}

export default App
