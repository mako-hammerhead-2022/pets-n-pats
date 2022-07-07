import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from '@chakra-ui/react'

import Home from '@/pages/Home'
import MyPets from '@/pages/MyPets'
import NotFound from '@/pages/NotFound'

import MainLayout from '@/components/layouts/MainLayout'

function App() {
  return (
    <>
      <Container maxW='4xl' centerContent>
        <Routes>
          <Route element={<MainLayout />}>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/my-pets' element={<MyPets />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
