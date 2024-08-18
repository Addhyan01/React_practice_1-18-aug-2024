import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound/>} />


        
        
        
        </Route>

 
    </Routes>
    
    </BrowserRouter>
  )
}
