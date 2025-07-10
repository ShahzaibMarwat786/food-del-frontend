import React, { useState } from 'react'
import Navbar from './compomemts/Nav/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/place order/PlaceOrder'
import Footer from './compomemts/Footer/Footer'
import LoginPopup from './compomemts/LoginPopup/LoginPopup'


const App = () => {

  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/PlaceOrder' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App