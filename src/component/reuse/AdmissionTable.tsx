import React, {useState, useEffect} from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@material-ui/core";
import { Button } from "@mui/material";
import Form from "./AdmissionForm";

interface Props {
data:{}[];
title:string
};
function MyTable({data, title}:Props) {
    const [open, setOpen] = useState(false)
    const showForm = () => {
        setOpen(prev => !prev)
    }
   
  return (
    <Box>
       {open ? <Form close={setOpen} title={title}/> : null}
        <Button sx={{float:'right'}} onClick={showForm}>{title}</Button>
        <h3>View admissions</h3>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Sex</TableCell>
              <TableCell>Dob</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Hospital number</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Next of kin</TableCell>
              <TableCell>Next of kin phone number</TableCell>
              <TableCell>Ailment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!Array.isArray(data) ? "No data found" : data.map((row:any) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.sex}</TableCell>
              <TableCell>{row.dob}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.patients_id}</TableCell>
              <TableCell>{row.phone_no}</TableCell>
              <TableCell>{row.next_of_kin_name}</TableCell>
              <TableCell>{row.next_of_kin_phone_no}</TableCell>
              <TableCell>{row.ailment}</TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default MyTable;
