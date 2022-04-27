import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'

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
        <Login />
        <Link to="/"> HOME </Link>
      </nav>
      <Heading>{"Welcome to Pets 'n' Pats"}</Heading>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App
