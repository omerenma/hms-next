
import React, {ReactElement, useEffect, useState} from 'react'
import Layout from '@/src/component/Layout/layout'

type Props = {
    pages:ReactElement
}

const Dashbord = ({pages}: Props) => {

  useEffect(() => {
    const id = localStorage.getItem('id')
  }, [])
  return (
    <Layout >{pages}</Layout>
  )
}

export default Dashbord
Dashbord.getLayout= function getLayout(page:ReactElement){
    return <Layout>{page}</Layout>
}