import React , {useState, useEffect}from 'react'
import axios from 'axios'

import {useSearchParams} from 'next/navigation'
const Verify = () => {
    const [params, setParams] = useState("")
    const [data, setData] = useState("")
    const url = 'https://rymistc0jk.execute-api.us-east-1.amazonaws.com/dev/subscription/verify'
    const searchParams = useSearchParams()
    const reference = searchParams.get('reference')
   



    const verifyToken = async() => {
       const response =  await axios.get(`${url}/${reference}`)
        setData(response.data)
    }
   




  return (
    <div style={{display:'grid', placeItems:'center'}}>
      <h1>Verify your subscription</h1>
      <div>
        {JSON.parse(data)}
      </div>
      <button type="submit" onClick={verifyToken}>Click to verify</button>
      
    </div>
  )
}

export default Verify
