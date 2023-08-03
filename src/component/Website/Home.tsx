import React, {useEffect, useState, useRef} from 'react'

import {motion, useInView, useAnimation} from 'framer-motion'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Description from './Description'
import Subscription from './Subscription'

const HomePage = () => {
   
    // const ref = useRef(null)
    // const isInView = useInView(ref)
    // const mainControls = useAnimation()

    // useEffect(() => {
    //     if(isInView){
    //         mainControls.start("visible")
    //     }
    // }, [isInView])

  return (
    <div  style={{width:"100%"}}>
       
        <Navbar/>
        <Header /> 
        {/* <motion.div
        variants={{
            hidden:{opacity:0, y:75},
            visible: {opacity:1, y:0}
        }}
        initial="hidden"
        // animate={mainControls}
        transition={{duration:0.5, delay:0.25}}
        >
        </motion.div> */}
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
