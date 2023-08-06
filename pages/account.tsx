import React from 'react'
import AddBusiness from '@/src/component/Initialization/Account'
import Navbar from '@/src/component/Website/Navbar/Navbar'
import Footer from '@/src/component/Website/Footer/Footer'
const account = () => {
  return (
    <div>
<Navbar />
    <div style={{display:'grid', placeItems:'center', height:'100vh'}}>
      <AddBusiness />
    </div>
    <Footer />
    </div>
  )
}

export default account
