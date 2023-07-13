import React , {useState, useEffect}from 'react'
import axios from 'axios'

import {useSearchParams} from 'next/navigation'
const Verify = () => {
    const [params, setParams] = useState("")
    const [data, setData] = useState("")
    const url = "http://locahost:5000/subscription/verify"
    const searchParams = useSearchParams()
    const query = searchParams.get('reference')
    
   useEffect(() => {
    const query = searchParams.get('reference')
    if(query){
        const fetch = async () => {
            const data = await axios.post(url, query)
            console.log(data, 'verification')
        }
        fetch()
    }else{
        console.log('Something didnt go right')
        return 
    }
   }, [])
  return (
    <div>
      <h1>Verify subscription</h1>
      <h2>{!params ? "Loading..." : params}</h2>
    </div>
  )
}

export default Verify
