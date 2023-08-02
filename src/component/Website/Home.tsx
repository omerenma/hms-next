import React from 'react'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Description from './Description'
import Subscription from './Subscription'

const HomePage = () => {
  return (
    <div className='home-containter'>
        <Navbar/>
        <Header />
        <Description/>
        <Subscription/>
        <Footer />
    </div>
  )
}

export default HomePage
