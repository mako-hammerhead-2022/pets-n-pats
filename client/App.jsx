import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Heading, Container } from '@chakra-ui/react'

import Home from '@/pages/Home'
import MyPets from '@/pages/MyPets'
import Leaderboard from '@/pages/Leaderboard'

import Login from '@/components/Header'

function App() {
  return (
    <>
      <Container maxW='4xl' centerContent>
        <Login />
        <Heading fontSize='3xl' opacity='80%' mt={2} mb={4}>
          {"Welcome to Pets 'n' Pats"}
        </Heading>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/my-pets' element={<MyPets />}></Route>
          <Route path='/leaderboard' element={<Leaderboard />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
