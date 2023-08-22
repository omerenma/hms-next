import React from 'react'
import Dashboardlayout from '../DashboardLayout/layout'

const Reception = () => {
  return (
    <div>
      <h1>Reception</h1>
    </div>
  )
}

export default Reception

Reception.getLayout = function getLayout(page: React.ReactElement) {
    return <Dashboardlayout>{page}</Dashboardlayout>;
  };
  