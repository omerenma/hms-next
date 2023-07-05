    import React, {useState} from "react";
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
    import Form from "./Form";

    interface Props {
    data:{}[];
    title:string
    };
    function MyTable({data, title}:Props) {
        const [open, setOpen] = useState(false)
        const showForm = () => {
            setOpen(prev => !prev)
        }

        // if(data.length === 0){
        //   return "Loading"
        // }else{
        //   console.log(data)
        // }
      return (
        <Box>
          {open ? <Form close={setOpen} title={title}/> : null}
            <Button sx={{float:'right'}} onClick={showForm}>{title}</Button>
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
                {  data.length === 0 ? "Loading" :
                data.map((row:any) => (
                <TableRow key={row.id}>
                  <TableCell>{row.patients_name}</TableCell>
                  <TableCell>{row.sex}</TableCell>
                  <TableCell>{row.dob}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.residential_address}</TableCell>
                  <TableCell>{row.patients_id}</TableCell>
                  <TableCell>{row.phone_no}</TableCell>
                  <TableCell>{row.next_of_kin_name}</TableCell>
                  <TableCell>{row.next_of_kin_phone_no}</TableCell>
                  
                </TableRow>
              ))
              }
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      );
    }

    export default MyTable;
