import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Popup from "../component/reuse/Popup";



const columns: GridColDef[] = [
  {
    field: "id",
    filterable: false,
    headerName: "S/n",
    renderCell: (params: any) =>
      params.api.getRowIndexRelativeToVisibleRows(params.row.id) + 1,
  },
  {
    field: "hospital_id",
    headerName: "Hospital number",
    width: 110,
  },
  {
    field: "patient_name",
    headerName: "Name",
    width: 110,
  },
  {
    field: "patient_sex",
    headerName: "Sex",
    width: 110,
  },
  {
    field: "dob",
    headerName: "DOB",
    width: 110,
  },
  {
    field: "residential_address",
    headerName: "Address",
    width: 110,
  },
  {
    field: "patient_email",
    headerName: "Email",
    width: 110,
  },
  {
    field: "patient_phone_no",
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
  {
    field: "actions",
    headerName: "Actions",
    width: 110,
    renderCell: (params: any) => {
      return (
        <Popup/>
        
      //   <button
      //     type="button"
      //     title="button"
      //     style={{ background: "transparent", border: "none" }}
      //     id={params.row.id}
      //   >
      // <Popup id={params.row.id}
      //   </button>
      );
    },
  },
];

interface DataProps {
  rows: {
    id: number;
    name: string;
    sex: string;
    dob: string;
    address: string;
    email: string;
    phone_no: string;
    next_of_kin_name: string;
    next_of_kin_phone: string;
  }[];
}


export default function DataGridDemo({ rows }: DataProps) {
  return (
    <DataGrid
      loading={!rows ? true : false}
      rows={rows}
      rowHeight={38}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection={false}
      disableRowSelectionOnClick
     onRowClick={(rows:any) => localStorage.setItem('editRowId', rows.id)}
    />
  );
}
