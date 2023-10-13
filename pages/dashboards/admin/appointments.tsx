import React, {useState, useEffect} from 'react'
import Dashboardlayout from '../DashboardLayout/layout'


import { Container } from '@mui/material'
import { useAppDispatch, useAppSeletor } from '@/src/store/hooks'
import { getAppointmentsAction } from '@/src/state/appointments/getAppointments'
import ReceptionTable from '@/src/component/reuse/ReceptionTable'
import DataGridDemo from '@/src/common/dataDrid'

const Appointments = () => {
  const {data} = useAppSeletor(state => state.getAppointments)
const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getAppointmentsAction())
    }, [dispatch])
  return (
    
    <Container>
            <ReceptionTable data={data} title='Book Appintment' />
            </Container>
  )
}

export default Appointments
Appointments.getLayout = (pages:React.ReactElement) => <Dashboardlayout>{pages}</Dashboardlayout>
