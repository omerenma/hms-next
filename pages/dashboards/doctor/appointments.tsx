'use client'
import Dashboardlayout from "../DashboardLayout/layout";
import React, { ReactElement, useEffect } from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import MyTable from "@/src/component/doctor/Table";
import { useAppDispatch, useAppSeletor } from "@/src/store/hooks";
import { getAppointmentsByIdAction } from "@/src/state/appointments/getAppointmentByDoctorId";
import {
  BarChart,
   Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import DataTable from "@/src/component/reuse/DataGrid";

const Appointments = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSeletor((state) => state.getAppointmentByDoctorId);
  const id  = useAppSeletor((state) => state.loginSlice.id);
  
  // I need to get the id of the logged in doctor and pass it to along with the request
  
  useEffect(() => {
  //  const id:any = 'f0bf5605-b85a-488f-b97a-81ff0c8ed57e'
  if(!id){
    return
  }
    dispatch(getAppointmentsByIdAction(id));
  }, [dispatch]);

  return (
    <Box>
      <Box component={Container}>
        <Grid container spacing={1.2}>
          <Grid item xs={12} sm={12}>
            <Box
              sx={{
                height: 300,
                display: "flex",
                columnGap: 2,
                flexWrap: "wrap",
                marginTop: 1,
                boxShadow: "-5px -2px 8px 0px rgba(144,127,127,0.75)",
                webkitBoxShadow: "-5px -2px 8px 0px rgba(144,127,127,0.75)",
                mozBoxShadow: "-5px -2px 8px 0px rgba(144,127,127,0.75)",
              }}
            >
              <Grid container spacing={1.2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <MyTable data={data} />
                  {/* <DataTable data={data}/> */}
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
         <Grid container spacing={1.2}>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                height: 300,
                display: "flex",
                columnGap: 2,
                flexWrap: "wrap",
                marginTop: 1,
                boxShadow: "-5px -2px 8px 0px rgba(144,127,127,0.75)",
                webkitBoxShadow: "-5px -2px 8px 0px rgba(144,127,127,0.75)",
                mozBoxShadow: "-5px -2px 8px 0px rgba(144,127,127,0.75)",
              }}
            >
              <Grid container spacing={1.2} sx={{padding:3}}>
                <Grid item xs={12} sm={6} md={4}>
                  <Box style={{ boxShadow: "-5px -2px 8px 0px rgba(144,127,127,0.75)", height:100}}>
                    <Typography sx={{textAlign:'center'}}>Number of patient(s)</Typography>
                  <Typography sx={{textAlign:'center'}}>{data.length}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Box style={{ boxShadow: "-5px -2px 8px 0px rgba(144,127,127,0.75)", height:100}}>
                    <Typography sx={{textAlign:'center'}}>Specialty</Typography>
                      {
                        data.map((item:any) =>(
                          <Typography sx={{textAlign:'center'}} key={item.name}></Typography>
                        ))
                      }
                  </Box>
                </Grid>{" "}
                <Grid item xs={12} sm={6} md={4}>
                <Box style={{ boxShadow: "-5px -2px 8px 0px rgba(144,127,127,0.75)", height:100}}>
                    <Typography sx={{textAlign:'center'}}>3</Typography>
                  <Typography sx={{textAlign:'center'}}>{data.length}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid> 
      </Box>
    </Box>
  );
};

export default Appointments;

Appointments.getLayout = (pages: React.ReactElement) => {
  return <Dashboardlayout>{pages}</Dashboardlayout>;
};