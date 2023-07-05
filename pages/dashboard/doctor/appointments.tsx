'use client'
import Layout from "@/src/component/Layout/layout";
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
  console.table(data)
  const { id } = useAppSeletor((state) => state.getUserById);
  useEffect(() => {
    const id = localStorage.getItem("id");
    dispatch(getAppointmentsByIdAction(Number(id)));
  }, [dispatch, id]);
  return (
    <Box sx={{marginTop:-2}}>
      <Box component={Container}>
        <Grid container spacing={1.2}>
          <Grid item xs={6} sm={6}>
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
                <Grid item xs={12} sm={12} md={12}>
                  {/* <MyTable data={data} /> */}
                  <DataTable data={data}/>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                height: 300,
                display: "flex",
                justifyContent: "space-around",
                columnGap: 2,
                flexWrap: "wrap",
                marginTop: 1,
                boxShadow: "-5px -2px 8px 0px rgba(144,127,127,0.75)",
                webkitBoxShadow: "-5px -2px 8px 0px rgba(144,127,127,0.75)",
                mozBoxShadow: "-5px -2px 8px 0px rgba(144,127,127,0.75)",
              }}
            >
              <ResponsiveContainer>

              <BarChart
                width={600}
                height={300}
                data={data}
                margin={{
                  top: 50,
                  right: 100,
                  left: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="patients_name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="appointment_date" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
              </ResponsiveContainer>
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
                          <Typography sx={{textAlign:'center'}} key={item.name}>
                             
                      </Typography>
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
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                height: 300,
                display: "flex",
                justifyContent: "space-around",
                columnGap: 2,
                flexWrap: "wrap",
                marginTop: 1,
                boxShadow: "-5px -2px 8px 0px rgba(144,127,127,0.75)",
                webkitBoxShadow: "-5px -2px 8px 0px rgba(144,127,127,0.75)",
                mozBoxShadow: "-5px -2px 8px 0px rgba(144,127,127,0.75)",
              }}
            >
              <Typography>Container spacing 2</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Appointments;
Appointments.getLayout = function (pages: ReactElement) {
  return <Layout>{pages}</Layout>;
};
