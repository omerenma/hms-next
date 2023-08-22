import React, {useEffect, useState} from "react";
import { Box, Grid, Paper } from "@mui/material";
import {useRouter} from 'next/router'





const Dashboards = () => {
  // TODO - get user role from state or local storage and redirect to the appropriate dashboard
  let userRole = '';
  const router = useRouter()
  useEffect(() => {
   const role =  localStorage.getItem('role')
    userRole = role as string
  }, [])

 
  return (
    <Box>
     <h1>Not aunthenticated</h1>
    </Box>
  );
};

export default Dashboards;
