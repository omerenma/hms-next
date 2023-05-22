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
import Form from "./BookAppointmentForm";
export const Context = createContext('')
interface Props {
data:{}[];
title:string
};
function BookAppointmentTable({data, title}:Props) {
    const [open, setOpen] = useState(false)
    const [id, setId] = useState('')
    const showForm = (id:string) => {
        setOpen(prev => !prev)
        setId(id)
    }
  return (
   
    <Box>
       {open ?  <Context.Provider value={id}><Form close={setOpen} title={title}/> </Context.Provider>: null}
       <Typography style={{textAlign:'center'}} variant="h6">View and schedule appointments</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Doctor name</TableCell>
              <TableCell>Sex</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Specialty</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row:any) => (
            <TableRow key={row.id_doctor}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.sex}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone_no}</TableCell>
              <TableCell>{row.specialty}</TableCell>
              <TableCell>
                <Button  id={row.id} onClick={() =>showForm(row.id_doctor)} sx={{textTransform:"capitalize"}}>Schedule</Button>
                </TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
   
  );
}

export default BookAppointmentTable;
