import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'

// styles
import './App.css'
import { Heading } from '@chakra-ui/react'

// react front-end components
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <nav>
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
