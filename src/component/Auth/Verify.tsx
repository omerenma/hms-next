import React , {useState, useEffect}from 'react'
import axios from 'axios'

import {useSearchParams} from 'next/navigation'
const Verify = () => {
    const [params, setParams] = useState("")
    const [data, setData] = useState("")
    const url = "http://locahost:5000/subscription/verify"
    const searchParams = useSearchParams()
    const query = searchParams.get('reference')
   
    const verifyToken = async() => {
       const response =  await axios.post(url, query)
       console.log(response.data, 'verify token')
       return setData(response.data)
    }
   



  return (
    <div style={{display:'grid', placeItems:'center'}}>
      <h1>Verify your subscription</h1>
      <button type="submit" onClick={verifyToken}>Click to verify</button>
      
    </div>
  )
}

export default Verify
