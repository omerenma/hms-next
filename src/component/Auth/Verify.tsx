import React , {useState, useEffect}from 'react'
import {useSearchParams} from 'next/navigation'
const Verify = () => {
    const searchParams = useSearchParams()
    const query = searchParams.get('reference')
    console.log(query, 'query params')
    useEffect(() => {

    }, [])
  return (
    <div>
      <h1>Verify subscription</h1>
    </div>
  )
}

export default Verify
