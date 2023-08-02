'use client'
import React from 'react'
import HeaderComponent from './HeaderComponent'
import {motion} from 'framer-motion'
const Header = () => {
  return (
    <div className='home-header'>
      <motion.circle 
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      />
      {/* <HeaderComponent /> */}
    </div>
  )
}

export default Header