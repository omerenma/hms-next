
import React, { ReactElement } from 'react'
import Layout from '@/src/component/Layout/layout'
import { Container } from '@mui/material'

const Home = () => {
  return (

        <Container>
            <h1>Admin Home Page</h1>
            <p>Display of charts</p>
        </Container>
  )
}

export default Home
Home.getLayout = function(pages:ReactElement){
  return <Layout>{pages}</Layout>
}