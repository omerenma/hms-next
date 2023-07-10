import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { TablePagination } from '@mui/material';

const columns: GridColDef[] = [
   { field: '', headerName: 'S/n', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'sex', headerName: 'Sex', width: 130 },
  // {
  //   field: 'email',
  //   headerName: 'Email',
  //   type: 'number',
  //   width: 90,
  // },
  {
    field: 'patients_id',
    headerName: 'Hospital number',
    type: 'number',
    width: 90,
  },
  {
    field: 'appointment_date',
    headerName: 'Date',
    type: 'number',
    width: 90,
  },
  {
    field: 'phone_no',
    headerName: 'Phone',
    type: 'number',
    width: 90,
  },
  {
    field:"remark",
    headerName:"Remark",
    type:"number",
    width:90
  }
];

interface Props {
    data:{name:string, sex:string, email:string, patients_id:string, phone_no:string}[]
}
export default function DataTable({data}:Props) {
  return (
    <div style={{width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 3 },
          },
        }}
        pageSizeOptions={[3, 5]}
        
      />
    </div>
  );
}