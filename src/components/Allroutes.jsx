import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Boys_cloths from '../pages/boys_cloths'
import Cart from '../pages/cart'
import Get_boys from '../pages/get_boys'
import Get_girls from '../pages/get_girls'
import Girls_cloths from '../pages/girls_cloths'
import Login from '../pages/Login'
import Homepremium from '../pages/premium'
import Register from '../pages/register'
import SingleProduct from '../pages/Single'
import SingleProduct2 from '../pages/Single2'
import Homeslider from './homeSlider'
import PrivateRoute from './PrivateRoute'

export default function Allroutes() {

  return (
    <Routes>
        <Route path="/" element={<><Homeslider /><Homepremium /></>} />
        <Route path='/login' element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        } />
        <Route path="/boys_catagory" element={<Boys_cloths />} />
        <Route path="/girls_catagory" element={<Girls_cloths />} />
        <Route path="/girls_products" element={<Get_girls />} />
        <Route path="/boys_products" element={<Get_boys />} />
        <Route path="/girls_products/:id" element={<SingleProduct />}/>
        <Route path="/boys_products/:id" element={<SingleProduct2 />}/>
    </Routes>
  )
}
