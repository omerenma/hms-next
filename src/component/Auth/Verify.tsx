import React , {useState, useEffect}from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'

const Verify = () => {
    const [params, setParams] = useState("")
    const [data, setData] = useState("")

    const router = useRouter()
    const url = 'https://rymistc0jk.execute-api.us-east-1.amazonaws.com/dev/subscription/verify'
    
    useEffect(() => {
        const {reference} = router.query
        
            async function verifyPayment(args:string){
                const data = reference
                await axios.post(url, data, {
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
                .then(response => console.log(response, 'verify response'))
                .catch(err => console.log(err, 'err response'))
            }
            verifyPayment(reference as string)
           

        }, [router.query] )

    // const verifyToken = async() => {
    //    const response =  await axios.get(`${url}${reference}`)
    //    console.log(response.data, 'verify response data')
    //     return setData(response.data)
    // }




  return (
    <div style={{display:'grid', placeItems:'center'}}>
      <h1>Verify your subscription</h1>
      <div>
        {/* {JSON.parse(data)} */}
      </div>
      {/* <button type="submit" onClick={verifyToken}>Click to verify</button> */}
      
    </div>
  )
}

export default Verify
