import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import { Container } from "@mui/material";

interface Props {
    data:{patients_name:string, sex:string, email:string, patients_id:string, phone_no:string}[]
}
function MyTable( {data} : Props) {
  return (
    <Container>
      <TableContainer >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: 10 }}>Name</TableCell>
              <TableCell style={{ fontSize: 10 }}>Sex</TableCell>
              <TableCell style={{ fontSize: 10 }}>Email</TableCell>
              <TableCell style={{ fontSize: 10 }}>Hospital number</TableCell>
              <TableCell style={{ fontSize: 10 }}>Phone</TableCell>
              <TableCell style={{ fontSize: 10 }}>Doctor</TableCell>
              <TableCell style={{ fontSize: 10 }}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: any) => (
              <TableRow key={row.id}>
                <TableCell>{row.patients_name}</TableCell>
                <TableCell>{row.sex}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.patients_id}</TableCell>
                <TableCell>{row.phone_no}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default MyTable;
