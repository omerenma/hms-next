import React , {useState, useEffect}from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'

const Verify = () => {
    const [params, setParams] = useState("")
    const [data, setData] = useState("")
    const [verificationMessage, setverificationMessage] = useState("")

    const router = useRouter()
    const url = 'https://rymistc0jk.execute-api.us-east-1.amazonaws.com/dev/subscription/verify'
    
    useEffect(() => {
        const {reference} = router.query
        
            async function verifyPayment(args:string){
                await axios.get(`${url}/${reference}`)
                .then(response =>{
                    if(response.data.status === 200){
                        setverificationMessage(response.data.data.message)
                        setData(response.data.data.data.data)
                    }

                }
                     )
                .catch(err => console.log(err, 'err response'))
            }
            verifyPayment(reference as string)
           

        }, [router.query] )
   



  return (
    <div style={{display:'grid', placeItems:'center'}}>
      <h1>{verificationMessage === 'Subscription verified' ? <h1>Subscription successfull</h1>: "Subscription failed please try again"}</h1>
    </div>
  )
}

export default Verify
