import React, {useState, createContext} from "react";
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
export const Context = createContext('')
interface Props {
data:{}[];
title:string
};
function ReceptionTable({data, title}:Props) {
    const [open, setOpen] = useState(false)
    const [id, setId] = useState('')
    const showForm = (id:string) => {
        setOpen(prev => !prev)
        setId(id)
    }
  return (
   
    <Box>
       <Typography style={{textAlign:'center'}} variant="h6">View appointments</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Doctor name</TableCell>
              <TableCell>Sex</TableCell>
              <TableCell>Dob</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Specialty</TableCell>
              <TableCell>Patients name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row:any) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.sex}</TableCell>
              <TableCell>{row.dob}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone_no}</TableCell>
              <TableCell>{row.specialty}</TableCell>
              <TableCell>{row.patients_name}</TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
   
  );
}

export default ReceptionTable;
