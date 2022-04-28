import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Voting from './components/Voting'

// styles
import './App.css'
import { Heading } from '@chakra-ui/react'

// react front-end components
import Home from './components/Home'
import Login from './components/Login'

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
      <Login />
      <Heading>{"Welcome to Pets 'n' Pats"}</Heading>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/voting" element={<Voting />} />
      </Routes>
    </div>
  )
}

export default App
