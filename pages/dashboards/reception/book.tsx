import React from 'react'
import Dashboardlayout from '../DashboardLayout/layout'

const BookApointment = () => {
  return (
    <div>
      <h1>Book appointment</h1>
    </div>
  )
}

export default BookApointment
BookApointment.getLayout = (pages:React.ReactElement) => <Dashboardlayout>{pages}</Dashboardlayout>