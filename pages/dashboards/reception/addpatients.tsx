import React, {useState, useEffect} from "react";
import Dashboardlayout from "../DashboardLayout/layout";
import { Box, Button } from "@mui/material";
import DataGridDemo from "@/src/common/dataDrid";
import Form from "@/src/component/Patients/PatientsForm";
import { getPatientsAction } from "@/src/state/patients/getPatientsSlice";
import { useAppDispatch } from "@/src/store/hooks";
import axios from "axios";

const Addreception = () => {
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false)
  const [rows, setRows] = useState([])
  const showForm = () => {
      setOpen(prev => !prev)
  }
  useEffect(() => {
    dispatch(getPatientsAction())
    .then(response => {
      if(response.payload === 'Request failed with status code 403'){
        axios.get('http://localhost:5000/users/token', {
          withCredentials:true,
          headers:{
            "Content-Type":"application/json"
          }
        })
        .then(result => {
          localStorage.removeItem('token')
          localStorage.setItem('token', result.data)
        })
        .then(() => dispatch(getPatientsAction()))
      }else{
       setRows(response.payload)
      }
      
    })
  }, [])
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "rgba(0, 12, 43, 0.05) 0px 4px 8px",
        // width: 1200,
        paddingTop:2,
        paddingBottom:2,
        paddingLeft:5,
        paddingRight:5
      }}
    >
      <button
      title="add patients"
        style={{
          borderRadius: "100%",
          width: "30px",
          height: "30px",
          background: "#fff",
          fontSize: "10px",
          border: "solid 1px #ccc",
          fontWeight: 600,
          color: "blue",
          cursor:'pointer',
          alignSelf:'self-end',
           position:'relative',
          right:70,
           bottom:5
          
        }}
        onClick={showForm}
      >
        +
      </button>
      {open ?  <Form close={setOpen} title={"Add patients"}/> : null}
      <DataGridDemo rows={rows} />
    </Box>
  );
};

export default Addreception;
Addreception.getLayout = (pages: React.ReactElement) => {
  return <Dashboardlayout>{pages}</Dashboardlayout>;
};
