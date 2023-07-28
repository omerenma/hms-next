import React, { useState, useEffect } from "react";
import { PaystackButton } from "react-paystack";
import {Box, Input, TextField,FormLabel, Typography} from '@mui/material'
import {redirect} from 'next/navigation'
import axios from "axios";
const Subscription = () => {
  //   const amount = 200000;
  const publicKey = "pk_test_63026ffa99ca33bb3911cd04bf5aeaeb5828b330";

  interface PaystackResponse {
    data:{
        data:{
            access_code:string;
            authorization_url:string;
            reference:string
        }
    }  
}
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("200000");
  const [paystackData, setPaystackData] = useState("")

  const config = {
    // reference: (new Date()).getTime().toString(),
    name,
    email: email,
    amount: parseInt(amount), //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: publicKey,
    phone: phone,
  };

   
  const url = 'https://rymistc0jk.execute-api.us-east-1.amazonaws.com/dev/subscription/initialize'
  const data = {email, name, phone, amount}
  const paystackPay = async(e:any) => {
    e.preventDefault()
    await axios.post(url, data, {
        headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer `
        }
    })
    .then(response => {
        if(response.status === 200){
            setPaystackData(response.data.data.authorization_url);
            window.open(paystackData)
        }else{
            return "Loading..."
        }
        
    })
     .catch(error => console.log(error, 'error'))


  }


  // you can call this function anything
  const handlePaystackSuccessAction = (reference: string) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Pay with paystack",
    onSuccess: (reference: string) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <Box>

        <Typography sx={{textAlign:'center'}}>Please fill the form to subscribe</Typography>

    <Box
    sx={{
        display: "flext",
        width:"400px",
        height:300,
        flexDirection: "column",
        border: "1px solid #eee",
        padding:2,
        borderRadius:3,

    }}
    >
      
            <Box>
              <TextField
                label="Name"
                size="small"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                
              />
            </Box>
            <Box
            sx={{mt:2}}
            >
              <TextField
                label="Email"
                size="small"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
            </Box>
            <Box
            sx={{mt:2}}
            >
              <TextField
              label="Phone number"
                size="small"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                fullWidth

                />
            </Box>
            <Box
            sx={{mt:2}}
            >
              <TextField
              label="Amount"
              size="small"
              type="text"
              value={amount}
              onChange={(e) => setPhone(e.target.value)}
              fullWidth
              />
            </Box>
            <Box
            sx={{mt:2}}
            >
                <button onClick={paystackPay}>Pay with paystack</button>
                {/* <PaystackButton {...componentProps} className="paystack-btn" /> */}

                </Box>
            </Box>
    </Box>
  );
};

export default Subscription;
