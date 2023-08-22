import React from 'react'
import Logins from '@/src/component/Auth/Login'
import Navbar from '@/src/component/Website/Navbar/Navbar'
import Footer from '@/src/component/Website/Footer/Footer'


const Login = () => {
  return (
    <div>
    <div style={{display:'grid', placeItems:'center', height:'100vh'}}>
      <Logins/>
    </div>
    </div>
  )
}

export default Login
