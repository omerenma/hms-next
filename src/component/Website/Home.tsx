import React from 'react'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Description from './Description'
import Subscription from './Subscription'

const HomePage = () => {
  return (
    <div style={{width:"100%"}}>
        <Navbar/>
        <Header />
    <div className='content-container'>
        <div style={{maxWidth:1200}}>
        <Description/>
        <Subscription/>
        </div>
    </div>
        <Footer />
    </div>
    )
}

export default HomePage
