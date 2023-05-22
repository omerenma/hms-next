
import React, { ReactElement, useEffect } from "react";
import Layout from "@/src/component/Layout/layout";
import { Container } from "@mui/material";
import { Box } from "@material-ui/core";
import Table from "../../../src/component/reuse/AdmissionTable";
import { useAppDispatch, useAppSeletor } from "@/src/store/hooks";
import { getAdmissionsAction } from "@/src/state/admissionSlice/getAdmissionsSlice";


const Admissions = () => {
    const dispatch = useAppDispatch()
    const data = useAppSeletor(state =>  state.getAdmissionsSlice.data)
useEffect(() => {
    dispatch(getAdmissionsAction())
}, [dispatch])
    
  return (
    <Box>
      <Container>
        {/* <Table title="Add admission"/>  */}
        <Table data={data} title="Add admission"/> 

      </Container>
    </Box>
  );
};

export default Admissions;
Admissions.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
