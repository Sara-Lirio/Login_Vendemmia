import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} /> {/*PRIVAR*/}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes