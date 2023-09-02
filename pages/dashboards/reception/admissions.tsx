import React, {useEffect, useState} from 'react'
import Dashboardlayout from '../DashboardLayout/layout'
import { getAdmissionsAction } from '@/src/state/admissionSlice/getAdmissionsSlice'
import { useAppDispatch } from '@/src/store/hooks'
import DataGridDemo from '@/src/common/dataDrid'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Form from '@/src/component/reuse/AdmissionForm'
import { Button } from '@mui/material'
import { getPatientsAction } from '@/src/state/patients/getPatientsSlice'
import axios from 'axios'
const columns: GridColDef[] = [
  { field: "#", filterable:false, headerName:"#",  renderCell: (params:any) =>
  params.api.getRowIndexRelativeToVisibleRows(params.row.id) + 1,},
  // {field:'#', headerName:"S/n", width:110},
 
 
  {
    field: "name",
    headerName: "Name",
    width: 110,
  },
  {
    field: "sex",
    headerName: "Sex",
    width: 110,
  },
  {
    field: "dob",
    headerName: "DOB",
    width: 110,
  },
  {
    field: "hospital_id",
    headerName: "Hospital number",
    width: 110,
  },
  {
    field: "address",
    headerName: "Address",
    width: 110,
  },
  {
    field: "email",
    headerName: "Email",
    width: 110,
  },
  {
    field: "phone_no",
    headerName: "Phone number",
    type: "number",
    width: 110,
  },
  {
    field: "next_of_kin_name",
    headerName: "next_of_kin_name",
    width: 110,
  },
  {
    field: "next_of_kin_phone",
    headerName: "Next of phne",
    width: 110,
  },
  // {
  //     field: "actions",
  //     headerName: "Actions",
  //     width: 110,
  //     renderCell:(params:any) => {
  //         return (
  //             <button type="button" title="button" style={{background:'transparent', border:'none'}} onClick={() => console.log(params.row, 'params')}>
  //                 <Popup id={params.row.id} />
  //             </button>
  //         )
  //     }
  //   },
];



const Admissions = (title:string,) => {
  const [open, setOpen] = useState(false)
  const showForm = () => {
      setOpen(prev => !prev)
  }
 const data = {
  urlencode :'userID=ABCDEF-8910',
 }
  const [rows, setRows] = useState([])
  const dispatch = useAppDispatch()
  useEffect(() => {
    // dispatch(getAdmissionsAction()).then((data:any) => {
    //   setRows(data.payload)
    // })
    axios.post('https://testtk.nimc.gov.ng/api/v1/tokenization/vNIN', data, {
      headers:{
        'x-api-key': 'nudjthujPIIi0FnmnYGKaXj1mDWfjhgvjhgj'
      }
    })
    
  }, [])
  return (
    <div style={{display:'grid', placeItems:"center"}}>
        {open ? <Form close={setOpen} title={title}/> : null}
        <Button sx={{float:'right'}} onClick={showForm} title='{title}' />
        <h3>View admissions</h3>
    {
      rows.length > 0 ?  <DataGrid rows={rows} columns={columns} pageSizeOptions={[5]}/> : 'No records found'
    }
    </div>
  )
}

export default Admissions
Admissions.getLayout = (pages:React.ReactElement) => <Dashboardlayout>{pages}</Dashboardlayout>


