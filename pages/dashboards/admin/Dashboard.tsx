import React, {useEffect} from 'react'
import {Box, Grid, Paper} from '@mui/material'
import scss from './Admin.module.scss'
import Main from '@/pages/components/Main/Main'
import Dashboardlayout from '../DashboardLayout/layout'
const Dashboards = () => {
  return (
        <h1>Main page component</h1>
  )
}


export default Dashboards;
Dashboards.getLayout = function getLayout(page: React.ReactElement) {
  return <Dashboardlayout>{page}</Dashboardlayout>;
};