
import React, { ReactElement, useEffect } from "react";
import Layout from "@/src/component/Website/layout";
import { Container } from "@mui/material";
import {Box } from "@material-ui/core";
// import Table from "../../../src/component/reuse/ReuseableTable";
import { useAppDispatch, useAppSeletor } from "@/src/store/hooks";
import { getPatientsAction } from "@/src/state/patients/getPatientsSlice";



const Patients = () => {
    const dispatch = useAppDispatch()
    const data = useAppSeletor(state =>  state.getPatientsSlice.data)
    const { success} = useAppSeletor(state => state.addPatientSlice)
useEffect(() => {
    dispatch(getPatientsAction())
}, [dispatch, success])
    
  return (
    <Box>
      <Container>
        {/* <Table data={data} title="Add patient"/>  */}
      </Container>
    </Box>
  );
};

export default Patients;
Patients.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
