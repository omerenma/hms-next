import React from 'react'
import Login from '@/src/component/Auth/Login'
import Navbar from '@/src/component/Website/Navbar/Navbar'
import Footer from '@/src/component/Website/Footer/Footer'


const login = () => {
  return (
    <div>
      <Navbar/>
    <div style={{display:'grid', placeItems:'center', height:'100vh'}}>
      <Login/>
    </div>
    <Footer />
    </div>
  )
}

export default login
