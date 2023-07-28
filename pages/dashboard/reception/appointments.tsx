
import React, { ReactElement , useEffect} from 'react'
import Layout from '@/src/component/Website/layout'
import { Container } from '@mui/material'
import { useAppDispatch, useAppSeletor } from '@/src/store/hooks'
import { getAppointmentsAction } from '@/src/state/appointments/getAppointments'
import ReceptionTable from '@/src/component/reuse/ReceptionTable'
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
Appointments.getLayout = function(pages:ReactElement){
  return <Layout>{pages}</Layout>
}