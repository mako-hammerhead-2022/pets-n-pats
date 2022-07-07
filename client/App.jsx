import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'

import { Heading, Container } from '@chakra-ui/react'

import Home from '@/pages/Home'
import MyPets from '@/pages/MyPets'
import NotFound from '@/pages/NotFound'

// import Login from '@/components/Header'

function App() {
  // const { pathname } = useLocation()

  return (
    <>
      {/* {pathname !== '*' && Login}
      {pathname !== '*' && Heading} */}

      <Container maxW='4xl' centerContent>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/my-pets' element={<MyPets />} />
          </Route>
        </Routes>
      </Container>
    </>
  )
}

export default App
