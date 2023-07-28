'use client'
import React, { useState, useEffect } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { redirect } from "next/navigation";
import { useAppDispatch } from "@/src/store/hooks";
import { addBusinessAction } from "@/src/state/accountSlice/addBusiness";


const AddBusiness = () => {
 
  const dispatch = useAppDispatch();

  const [value, setData] = useState({
    email:"",
    name:"",
    phone:"",
    address:"",
    password:""
  })

  const handleFormChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setData({
        ...value, 
        [e.target.name]:e.target.value
    })
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = {
        name:value.name,
        email:value.email,
        phone:value.phone,
        address:value.address,
        password:value.password
    };
   
    dispatch(addBusinessAction(data))
    .then(() => {
        window.location.href = '/subscription'
    })
    .catch(err => {
        console.log(err)
    })
   
}
 

  return (
    <Box>
      <Typography sx={{ textAlign: "center" }}>
        {" "}
        Register your business
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "400px",
        //   height: 300,
          flexDirection: "column",
          border: "1px solid #eee",
          padding: 2,
          borderRadius: 3,
        }}
      >
        <Box>
          <TextField
            label="Name"
            size="small"
            type="text"
            name="name"
            value={value.name}
            onChange={handleFormChange}
            fullWidth
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField
            label="Email"
            size="small"
            type="email"
            name="email"
            value={value.email}
            onChange={handleFormChange}
            fullWidth
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField
            label="Phone number"
            size="small"
            type="text"
            name="phone"
            value={value.phone}
            onChange={handleFormChange}
            fullWidth
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField
            label="Address"
            size="small"
            type="text"
            name="address"
            value={value.address}
            onChange={handleFormChange}
            fullWidth
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField
            label="Address"
            size="small"
            type="text"
            name="address"
            value={value.address}
            onChange={handleFormChange}
            fullWidth
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField
            label="Password"
            size="small"
            type="password"
            name="password"
            value={value.password}
            onChange={handleFormChange}
            fullWidth
          />
        </Box>
        <Box sx={{ mt: 5, textAlign: "center", minWidth: 100 }}>
          <input
            style={{ minWidth: 200, padding: 10, cursor: "pointer" }}
            type="submit"
            value="Submit"
            onClick={handleSubmit}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AddBusiness;
