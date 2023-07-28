
import React, {ReactElement} from 'react'
import { Container } from '@mui/material'
import Layout from '@/src/component/Website/layout'

const Reception = () => {
  return (
    <Container>
      <h1>Reception</h1>
    </Container>
  )
}

export default Reception

Reception.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
  };