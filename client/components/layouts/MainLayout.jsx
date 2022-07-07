import React from 'react'
import { Outlet } from 'react-router-dom'
import { Heading, Container } from '@chakra-ui/react'
import Header from '@/components/Header'

function MainLayout() {
  return (
    <Container maxW='4xl' centerContent>
      <Header />
      <Heading fontSize='3xl' opacity='80%' mt={2} mb={4}>
        {"Welcome to Pets 'n' Pats"}
      </Heading>
      <Outlet />
    </Container>
  )
}

export default MainLayout
