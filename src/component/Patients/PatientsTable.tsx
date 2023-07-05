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
import Form from "./PatientsForm";
export const Context = createContext('')
interface Props {
data:{}[];
title:string
};
function PatientsTable({data, title}:Props) {
    const [open, setOpen] = useState(false)
    const showForm = () => {
        setOpen(prev => !prev)
    }
  return (
   
    <Box>
       {open ?  <Form close={setOpen} title={title}/> : null}
       <Typography style={{textAlign:'center'}} variant="h6">View patients detailes</Typography>
       <Button sx={{float:'right'}} onClick={showForm}>Add patient</Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell>Name</TableCell>
              <TableCell>Sex</TableCell>
              <TableCell>Dob</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Hospital number</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Next of kin</TableCell>
              <TableCell>Next of kin phone number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row:any) => (
            <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.sex}</TableCell>
            <TableCell>{row.dob}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.residential_address}</TableCell>
            <TableCell>{row.patients_id}</TableCell>
            <TableCell>{row.phone_no}</TableCell>
            <TableCell>{row.next_of_kin_name}</TableCell>
            <TableCell>{row.next_of_kin_phone_no}</TableCell>
          </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
   
  );
}

export default PatientsTable;
