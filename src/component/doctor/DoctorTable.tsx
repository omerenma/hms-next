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
import Form from "./DoctorForm";
export const Context = createContext('')
interface Props {
data:{}[];
title:string
};
function DoctorTable({data, title}:Props) {
    const [open, setOpen] = useState(false)
    const showForm = () => {
        setOpen(prev => !prev)
    }
  return (
   
    <Box>
       {open ?  <Form close={setOpen} title={title}/> : null}
       <Typography style={{textAlign:'center'}} variant="h6">View Doctor detailes</Typography>
       <Button sx={{float:'right'}} onClick={showForm}>Add Doctor</Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Sex</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Dob</TableCell>
              <TableCell>Specialty</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row:any) => (
            <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.sex}</TableCell>
            <TableCell>{row.phone_no}</TableCell>
            <TableCell>{row.dob}</TableCell>
            <TableCell>{row.specialty}</TableCell>
          </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
   
  );
}

export default DoctorTable;
