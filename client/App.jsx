import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'

// styles
import './App.css'
import { Heading, Box } from '@chakra-ui/react'

// react front-end components
import Home from './components/Home'
import Login from './components/Login'
import MyPets from './components/MyPets'

function App() {
  return (
    <Box className="App">
      <nav>
        <Login />
        <Link to="/"> HOME </Link>
      </nav>

      <Heading fontSize="3xl" opacity="80%">
        {"Welcome to Pets 'n' Pats"}
      </Heading>
      <Routes>
      
        <Route path="/" element={<Home />}></Route>
        <Route path="/myPet" element={<MyPets/>}></Route>
      </Routes>
    </Box>
  )
}

export default App
