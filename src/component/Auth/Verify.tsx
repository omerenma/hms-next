import React , {useState, useEffect}from 'react'
import axios from 'axios'

import {useSearchParams} from 'next/navigation'
const Verify = () => {
    const [params, setParams] = useState("")
    const [data, setData] = useState("")
    const url = "http://locahost:5000/subscription/verify"
    const searchParams = useSearchParams()
    const query = searchParams.get('reference')
   console.log(query, 'query')

   const verify = () => {
    fetch(url, {
        method:""
    })
   }



  return (
    <div>
      <h1>Verify subscription</h1>
      {query}
      
    </div>
  )
}

export default Verify
