
import React, {ReactElement,  useEffect} from 'react'
import Layout from '@/src/component/Layout/layout'
import { Container } from '@mui/material'
import Table from '../../../src/component/doctor/DoctorTable'
import {  useAppDispatch,useAppSeletor } from '@/src/store/hooks'
import { getDoctorsAction } from '@/src/state/doctor/getDoctorsSlice'


const Doctor = () => {
  const dispatch = useAppDispatch()
   const {data, success} = useAppSeletor(state => state.getDoctorsSlice)
  useEffect(() => {
    dispatch(getDoctorsAction())
  }, [dispatch, success])
   
  return (
    <Container component={'div'}>
      <Table data={data} title='Add Doctor' />
    </Container>
  )
}

export default Doctor
Doctor.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
  };