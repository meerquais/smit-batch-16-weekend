import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import About from './Component/About'
import Contact from './Component/Contact'
import NotFound from './Component/NotFound'
import Home from './Component/Home'
import Dashboard from './Component/Dashboard'
import Profile from './Component/Profile'
import Settings from './Component/Settings'
import Login from './Component/Login'
import ProtectedRoutes from './Component/ProtectedRoutes'
import User from './Component/User'
import ProductDetails from './Component/ProductDetails'
import Products from './Component/Products'
import UserDetails from './Component/UserDetails'

function App() {

  const [isAuth, setIsAuth] = useState(false);
 

  return (
    <>
      <h1>App </h1>

      {/* <Routes>
      <Route path='*'  element={<NotFound />}   />


      <Route path='/about'  element={<About />}   />
      <Route path='/contact'  element={<Contact />}   />

      

      </Routes> */}

{/* <Link to="/about" >About</Link> || <Link to="/contact" >Contact</Link> */}




        {/* <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/dashboard' element={<Dashboard />} >

        <Route path='profile' element={<Profile />} />
        <Route path='settings' element={<Settings />} />


        </Route>


        </Routes> */}



          {/* <Routes>

            <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />

            <Route path='/dashboard' element={
            <ProtectedRoutes isAuth={isAuth} >

              <Dashboard setIsAuth={setIsAuth} />

            </ProtectedRoutes>} />
            <Route path='/profile' element={
            <ProtectedRoutes isAuth={isAuth} >

              <Profile />

            </ProtectedRoutes>} />


          </Routes> */}



            <Routes>

            <Route path='/' element={<Home />}  />
            <Route path='/user/:id' element={<UserDetails />}  />


            </Routes>

            {/* <Routes>
              <Route path='/' element={<Products />} />
              <Route path='/product/:id' element={<ProductDetails />} />
            </Routes> */}





    </>
  )
}

export default App
