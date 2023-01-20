import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Boys_cloths from '../pages/boys_cloths'
import Cart from '../pages/cart'
import Get_girls from '../pages/get_girls'
import Girls_cloths from '../pages/girls_cloths'
import Login from '../pages/Login'
import Homepremium from '../pages/premium'
import Register from '../pages/register'
import Homeslider from './homeSlider'

export default function Allroutes() {

  return (
    <Routes>
        <Route path="/" element={<><Homeslider /><Homepremium /></>} />
        <Route path='/login' element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/boys_catagory" element={<Boys_cloths />} />
        <Route path="/girls_catagory" element={<Girls_cloths />} />
        <Route path="/girls_products" element={<Get_girls />} />
    </Routes>
  )
}
