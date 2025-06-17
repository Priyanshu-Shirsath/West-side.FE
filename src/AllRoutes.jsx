import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Prouduct from './Page/Prouduct'
import Manproduct from './Page/Manproduct'
import Description from './Page/Description'
import Cart from './Page/Cart'
import Suits from './Page/Suits'
import Homes from './Page/Homes'
import Loginpage from './Page/Loginpage'
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product' element={<Prouduct />}></Route>
        <Route path='/description/:id' element={<Description />}></Route>
        <Route path='/manproduct' element={<Manproduct />}></Route>
        <Route path='/suits' element={<Suits />}></Route>
        <Route path='/homes' element={<Homes />}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
        <Route path='/Login' element={<Loginpage />}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
