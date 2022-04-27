import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'

import './App.css'

import HeadToHead from './components/HeadToHead'

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/HeadToHead">HeadToHead</Link>
          </li>
        </ul>
      </nav>
      <h2>{"Welcome to Pets 'n' Pats"}</h2>
      <Routes>
        <Route path="/HeadToHead" element={<HeadToHead />}></Route>
      </Routes>
    </div>
  )
}

export default App
