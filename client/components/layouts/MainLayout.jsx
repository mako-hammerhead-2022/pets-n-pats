import React from 'react'
import { Outlet, Routes, Route } from 'react-router-dom'
// import Home from '@/pages/Home'
// import MyPets from '@/pages/MyPets'
import { Heading, Container } from '@chakra-ui/react'
import Login from '@/components/Header'
//copy header into here
function MainLayout() {
  return (
    <>
      {/* <Container maxW='4xl' centerContent> */}
      <Login />

      <Heading fontSize='3xl' opacity='80%' mt={2} mb={4}>
        {"Welcome to Pets 'n' Pats"}
      </Heading>
      <Outlet />
      {/* <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/my-pets' element={<MyPets />}></Route>
        </Routes> */}
      {/* </Container> */}
      {/* //wrap mainlayout {Home, Mypets}
//about */}
    </>
  )
}

export default MainLayout
