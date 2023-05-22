
import React, { ReactElement , useEffect} from 'react'
import Layout from '@/src/component/Layout/layout'
import { Container } from '@mui/material'
import { useAppDispatch, useAppSeletor } from '@/src/store/hooks'
import { getAppointmentsAction } from '@/src/state/appointments/getAppointments'
import BookAppointmentTable from '@/src/component/Appointments/BookAppointment'
import { getDoctorsAction } from '@/src/state/doctor/getDoctorsSlice'
const BookAppointments = () => {
    const {data} = useAppSeletor(state => state.getDoctorsSlice)
const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getDoctorsAction())
    }, [dispatch])
  return (

        <Container>
            <BookAppointmentTable data={data} title='Book Appintment' />
        </Container>
  )
}

export default BookAppointments
BookAppointments.getLayout = function(pages:ReactElement){
  return <Layout>{pages}</Layout>
}