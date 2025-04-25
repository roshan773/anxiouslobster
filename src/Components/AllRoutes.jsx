import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Store from '../Pages/Store'
import Mac from '../Pages/Mac'
import Ipad from '../Pages/Ipad'
import Iphone from '../Pages/Iphone'
import Watch from '../Pages/Watch'
import Visions from '../Pages/Visions'
import Airpods from '../Pages/Airpods'
import Tv_Homes from '../Pages/Tv_Homes'
import Entertainment from '../Pages/Entertainment'
import Accessories from '../Pages/Accessories'
import Support from '../Pages/Support'
import Cart from '../Pages/Cart'

function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/store' element={<Store />}/>
      <Route path='/mac' element={<Mac />}/>
      <Route path='/ipad' element={<Ipad />}/>
      <Route path='/iphone' element={<Iphone />}/>
      <Route path='/watch' element={<Watch />}/>
      <Route path='/vision' element={<Visions />}/>
      <Route path='/airpods' element={<Airpods />}/>
      <Route path='/tv&homes' element={<Tv_Homes />}/>
      <Route path='Entertainment' element={<Entertainment />}/>
      <Route path='/accessories' element={<Accessories />}/>
      <Route path='/support' element={<Support />}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}

export default AllRoutes