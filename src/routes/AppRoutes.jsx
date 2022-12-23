import React, { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../pages/Home'
import Login from '../pages/Login'
import { AuthProvider, AuthContext } from '../contexts/auth'

const AppRoutes = () => {
  const Private = ({children}) => {
    const { authenticated } = useContext(AuthContext);
    if(!authenticated){
      return <Navigate to="/" />;
    } 
    else {
      return children
    }
  
  }

  return (
    <BrowserRouter>
      <Header />
      <AuthProvider>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/home' element={<Private><Home /></Private>} /> {/*PRIVAR*/}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default AppRoutes