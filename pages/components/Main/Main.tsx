import React, {ReactElement} from 'react'
import {Box, Grid, Paper} from '@mui/material'
import scss from '../../dashboards/admin/Admin.module.scss'


const Main= ({children}:any) => {
  return (
   <main>
    {children}
   </main>
  )
}

export default Main

