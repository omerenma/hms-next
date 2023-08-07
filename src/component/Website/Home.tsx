import React, {useEffect, useState, useRef} from 'react'

import {motion, useInView, useAnimation} from 'framer-motion'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Description from './Description'
import Subscription from './Subscription'
import Contact from './Header/Contact'

const HomePage = () => {
  return (
    <div  style={{width:"100%"}}>
       
        <Navbar/>
        <Header /> 
    <div className='content-container'>
        <div style={{maxWidth:1200}}>
        <Description/>
        <Contact />
        </div>
    </div>
        <Footer />
    </div>
    )
}

export default HomePage
