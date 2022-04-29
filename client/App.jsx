import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'

// styles
import './App.css'
import { Heading, Box } from '@chakra-ui/react'

// react front-end components
import Home from './components/Home'
import Login from './components/Login'

function App() {
  return (
    <Box className='App'>
      <nav>
        <Login />
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
      </nav>
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
