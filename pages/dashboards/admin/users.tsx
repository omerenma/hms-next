
import React, {ReactElement, useEffect} from 'react'
import { Container, } from '@mui/material'
import Layout from '@/src/component/Website/layout'
import Table from '../../../src/component/reuse/Table'
import { getUsersAction } from '@/src/state/adminSlice/getUsersSlice'
import { useAppDispatch, useAppSeletor } from '@/src/store/hooks'
import Dashboardlayout from '../DashboardLayout/layout'
import axios from 'axios'


interface Users {
  name:string;
  email:string;
  role:string;
  id:number
}
const Users = () => {
    const dispatch = useAppDispatch()
    const data = useAppSeletor(state => state.getUsersSlice.data)
    const {success} = useAppSeletor(state => state.deleteUserSlice)
    useEffect(() => {
        dispatch(getUsersAction())
        .then(response => {
          if(response.payload === 'Request failed with status code 403'){
            axios.get('http://localhost:5000/users/token', {
              withCredentials:true,
              headers:{
                "Content-Type":"application/json"
              }
            })
            .then(result => {
              localStorage.removeItem('token')
              localStorage.setItem('token', result.data)
            })
            .then(() => dispatch(getUsersAction()))
          }
        })
        .catch(error => console.log('Get user error', error))
    }, [dispatch, success])
  return (
    <Container>
     <Table data={data} />
    </Container>
  )
}



export default Users;
Users.getLayout = function getLayout(page: React.ReactElement) {
  return <Dashboardlayout>{page}</Dashboardlayout>;
};