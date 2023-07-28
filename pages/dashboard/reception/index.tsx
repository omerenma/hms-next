import React, { ReactElement , useEffect} from 'react'
import Layout from '@/src/component/Website/layout'
import { Container } from '@mui/material'
import { useAppDispatch, useAppSeletor } from '@/src/store/hooks'
import PatientsTable from '@/src/component/Patients/PatientsTable'
import { getPatientsAction } from '@/src/state/patients/getPatientsSlice'
const Patients = () => {
    const {data} = useAppSeletor(state => state.getPatientsSlice)
const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getPatientsAction())
    }, [dispatch])
    
  return (

        <Container>
          
           <PatientsTable data={data} title='Add patient' />
           
        </Container>
  )
}

export default Patients
Patients.getLayout = function(pages:ReactElement){
  return <Layout>{pages}</Layout>
}