'use client'
import React from 'react'
import HeaderComponent from './HeaderComponent'
import {motion} from 'framer-motion'
import HeaderImage from '../../../assets/Shutterstock_1677798643.png'
import Image from 'next/image'
const Header = () => {
  return (
    <div className='home-header'>
      {/* <motion.circle 
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      /> */}
      <HeaderComponent />
      <Image 
      src={HeaderImage}
      alt='Mountain snow '
      fill={true}
       />
    </div>
  )
}

export default Header