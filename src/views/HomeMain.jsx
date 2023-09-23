import React from 'react'
import Header from '../components/Header/Header'
import HomeHome from '../components/HomeHome/HomeHome'
import Signup from '../components/HomeSignup/Signup'
import Register from '../components/HomeRegister/Register'
import Players from '../components/HomePlayers/Players'
import Footer from '../components/Footer/Footer'

const HomeMain = () => {
  return (
    <>
      <Header/>
      <HomeHome />
      <Signup />
      <Register />
      <Players />
      <Footer />
    </>
  )
}

export default HomeMain