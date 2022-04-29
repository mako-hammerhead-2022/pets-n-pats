import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'

// styles
import './App.css'
import { Heading, Box } from '@chakra-ui/react'

// react front-end components
import Home from './components/Home'
import Login from './components/Login'
import PetForm from './components/PetForm'


function App() {
  return (
    
    <Box className='App'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
      </nav>
      <Login />
      <PetForm />
      <Heading fontSize='3xl' opacity='80%'>
        {"Welcome to Pets 'n' Pats"}
      </Heading>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      
    </Box>
  )
}

export default App
