import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Box
} from "@material-ui/core";
import AppointmentRemarkForm from "../reuse/AppointmentRemarkForm";
interface Props {
  data: {
    patients_name: string;
    sex: string;
    email: string;
    patients_id: string;
    phone_no: string;
  }[];
}
function MyTable({ data }: Props) {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const showForm = (id?: string) => {
    setOpen((prev) => !prev);
    // setId(id)
  };
  return (
    <TableContainer>
      {open ? <AppointmentRemarkForm close={setOpen} /> : null}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: 10 }}>Doctor name</TableCell>
              <TableCell style={{ fontSize: 10 }}>Doctor sex</TableCell>
              <TableCell style={{ fontSize: 10 }}>Doctor email</TableCell>
              <TableCell style={{fontSize:10}}>Patient name</TableCell>
              <TableCell style={{fontSize:10}}>Patient sex</TableCell>
              <TableCell style={{ fontSize: 10 }}>Hospital number</TableCell>
              <TableCell style={{ fontSize: 10 }}>Patient phone_no</TableCell>
              <TableCell style={{ fontSize: 10 }}>Appointment date</TableCell>
              <TableCell style={{ fontSize: 10 }}>Remark</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!Array.isArray(data)
              ? ""
              : data.map((row: any) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.sex}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.patient_name}</TableCell>
                    <TableCell>{row.patient_sex}</TableCell>
                    <TableCell>{row.patients_id}</TableCell>
                    <TableCell>{row.patient_phone_no}</TableCell>
                    <TableCell>{row.appointment_date}</TableCell>
                    <TableCell>
                      <button
                        type="button"
                        id={row.id}
                        onClick={() => showForm()}
                        style={{
                          background: "transparent",
                          border: "none",
                          color: "#cecece",
                          cursor:"pointer",
                          fontWeight:"bolder"
                        }}
                      >
                        Remark
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableContainer>
  );
}

export default MyTable;
