import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import { Heading, Box } from '@chakra-ui/react'

import Home from './components/Home'
import Login from './components/Login'
import MyPets from './components/MyPets'

function App() {
  return (
    <Box className='App'>
      <Login />

      <Heading fontSize='3xl' opacity='80%' mt={2} mb={4}>
        {"Welcome to Pets 'n' Pats"}
      </Heading>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/mypets' element={<MyPets />}></Route>
      </Routes>
    </Box>
  )
}

export default App
