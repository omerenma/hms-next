import React from 'react'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Description from './Description'
const HomePage = () => {
  return (
    <div className='home-containter'>
        <Navbar/>
        <Header />
        <Description/>
        <Footer />
      
    </div>
  )
}

export default HomePage
