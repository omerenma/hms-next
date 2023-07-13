import React , {useState, useEffect}from 'react'
import {useSearchParams} from 'next/navigation'
const Verify = () => {
    const searchParams = useSearchParams()
    console.log(searchParams)
    useEffect(() => {

    }, [])
  return (
    <div>
      <h1>Verify subscription</h1>
    </div>
  )
}

export default Verify
