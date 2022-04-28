import React, { useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// styles
import './App.css'
import { Heading, Box } from '@chakra-ui/react'

// react front-end components
import Home from './components/Home'
import Login from './components/Login'

// import { fetchTwoPets } from './actions'

function App() {
  // const dispatch = useDispatch()
  // const randomPets = useSelector((state) => state.pets)

  // useEffect(() => {
  //   dispatch(fetchTwoPets())
  // }, [])
  return (
    <Box className="App">
      <nav>
        <Login />
        <Link to="/"> HOME </Link>
      </nav>
      <Heading fontSize="3xl" opacity="80%">{"Welcome to Pets 'n' Pats"}</Heading>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Box>
  )
}

export default App
