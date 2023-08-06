import React from 'react'
import Navbar from '@/src/component/Website/Navbar/Navbar'
import Footer from '@/src/component/Website/Footer/Footer'

const about = () => {
  return (
    <div>
        <Navbar />
        <div style={{display:'grid', placeItems:'center', height:'100vh'}}>about</div>
        <Footer />
    </div>
  )
}

export default about