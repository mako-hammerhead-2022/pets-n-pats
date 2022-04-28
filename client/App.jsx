import React, { useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// styles
import './App.css'
import { Heading } from '@chakra-ui/react'

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
    <div className="App">
      <nav>
        <Login />
        <Link to="/"> HOME </Link>
      </nav>
      <Heading>{"Welcome to Pets 'n' Pats"}</Heading>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App
