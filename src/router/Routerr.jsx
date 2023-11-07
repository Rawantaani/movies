import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
import MovieDb from './Screen/MovieDb'
import Trending from './Screen/Trending'

const Routerr = () => {
  return (
   <Router>
    <Navbar/>
    <Routes>
        <Route index element={<MovieDb/>}/>
        <Route path='trending' element={<Trending/>}/>
    </Routes>
   </Router>
  )
}

export default Routerr