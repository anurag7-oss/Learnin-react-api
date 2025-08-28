import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import Apis from './Apis'
const Routerr = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/apis' element={<Apis/>}  />
    </Routes>
  )
}

export default Routerr