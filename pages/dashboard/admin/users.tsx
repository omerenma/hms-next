
import React, {ReactElement, useEffect} from 'react'
import { Container, } from '@mui/material'
import Layout from '@/src/component/Layout/layout'
import Table from '../../../src/component/reuse/Table'
import { getUsersAction } from '@/src/state/adminSlice/getUsersSlice'
import { useAppDispatch, useAppSeletor } from '@/src/store/hooks'


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
    }, [dispatch, success])
    console.log(data, 'users')
  return (
    <Container>
     <Table data={data} />
    </Container>
  )
}

export default Users


Users.getLayout= function getLayout(page:ReactElement){
    return <Layout>{page}</Layout>
}