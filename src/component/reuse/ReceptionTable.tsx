import React, {useState, createContext, useEffect} from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography
} from "@material-ui/core";
import { Button } from "@mui/material";
import Form from "./AppointmentForm";
import { getAppointmentsAction } from "@/src/state/appointments/getAppointments";
import { useAppDispatch } from "@/src/store/hooks";
export const Context = createContext('')
interface Props {
data:{}[];
title:string
};
function ReceptionTable({data, title}:Props) {

    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false)
    const [appointments, setAppointments] = useState([])
    const [id, setId] = useState('')
    const showForm = (id:string) => {
        setOpen(prev => !prev)
        setId(id)
    }

    useEffect(() => {
      dispatch(getAppointmentsAction())
      .then(data => {
        console.log("Appoinmtetns :", data)
        setAppointments(data.payload)
      })
    }, [])

 
  return (
    <Box>
        { 
          !Array.isArray(data) ? <div style={{display:"grid", placeItems: "center"}}>No data available for display</div>  : 
          <Box>
              <Typography style={{textAlign:'center'}} variant="h6">View appointments</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Doctor name</TableCell>
                <TableCell>Sex</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Specialty</TableCell>
                <TableCell>Patients name</TableCell>
                <TableCell>Patients phone</TableCell>
                <TableCell>Patients email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {  data.map((row:any) => (
                  <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.sex}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.specialty}</TableCell>
                  <TableCell>{row[4]}</TableCell>
                  <TableCell>{row.phone_no}</TableCell>
                </TableRow>
              ))
              }
            </TableBody>
          </Table>
        </TableContainer>
          </Box>
        }
   
    </Box>
   
  );
}

export default ReceptionTable;
