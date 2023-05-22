
import Layout from "@/src/component/Layout/layout";
import React, { ReactElement, useEffect } from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import MyTable from "@/src/component/reuse/AdminAppointmentTable";
import { useAppDispatch, useAppSeletor } from "@/src/store/hooks";

import { getAppointmentsAction } from "@/src/state/appointments/getAppointments";

const Appointments = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSeletor((state) => state.getAppointments);
  console.table(data)
  useEffect(() => {
    dispatch(getAppointmentsAction());
  }, [dispatch]);
  return (
      <Box component={Container}>
        
                  <MyTable data={data} />
                  {/* <DataTable data={data}/> */}
      </Box>
  );
};

export default Appointments;
Appointments.getLayout = function (pages: ReactElement) {
  return <Layout>{pages}</Layout>;
};
