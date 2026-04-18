import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { listenToAuth } from './features/auth/authSlice'
import { loadCart } from './features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoute from './components/ProtectedRoute'
import CartPage from './pages/CartPage'
import Admin from './pages/Admin'
import Home from './pages/Home'


function App() {

  const dispatch = useDispatch();
  const {user} = useSelector((s)=>s.auth);

  useEffect(()=>{
    dispatch(listenToAuth())
  },[])

  useEffect(()=>{
    if(user){
      dispatch(loadCart(user.uid))
    }
  },[user])





  return (
    <>
    

    <Navbar />

    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />

      <Route path='/' element={<ProtectedRoute>
        <Home />
      </ProtectedRoute>} />
      <Route path='/cart' element={<ProtectedRoute>
        <CartPage />
      </ProtectedRoute>} />

      <Route path='/admin' element={<ProtectedRoute>
        <Admin />

      </ProtectedRoute>} />


    </Routes>







    </>
  )
}

export default App