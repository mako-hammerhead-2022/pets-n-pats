import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from '@chakra-ui/react'

import Home from '@/pages/Home'
import MyPets from '@/pages/MyPets'
import NotFound from '@/pages/NotFound'

function App() {
  return (
    <>
      <Container maxW='4xl' centerContent>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route exact path='/' element={<Home />} />
          <Route exact path='/my-pets' element={<MyPets />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
