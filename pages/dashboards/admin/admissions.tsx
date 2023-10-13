import React, { useEffect, useState } from "react";
import Dashboardlayout from "../DashboardLayout/layout";
import { getAdmissionsAction } from "@/src/state/admissionSlice/getAdmissionsSlice";
import { useAppDispatch } from "@/src/store/hooks";
import DataGridDemo from "@/src/common/dataDrid";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Form from "@/src/component/reuse/AdmissionForm";
import { Button } from "@mui/material";
import { getPatientsAction } from "@/src/state/patients/getPatientsSlice";
import Popup from "@/src/component/reuse/Popup";

const columns: GridColDef[] = [
  // { field: "", filterable:false, headerName:"#",  renderCell: (params:any) =>
  // params.api.getRowIndexRelativeToVisibleRows(params.row.id) + 1,},
  {
    field: "id",
    filterable: false,
    headerName: "S/n",
    renderCell: (params: any) =>
      params.api.getRowIndexRelativeToVisibleRows(params.row.id) + 1,
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
    field: "hospital_id",
    headerName: "Hospital number",
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
    field: "status",
    headerName: "Addmission status",
    width: 110,
  },
];

const Admissions = (title?: string) => {
  const [open, setOpen] = useState(false);
  const showForm = () => {
    setOpen((prev) => !prev);
  };
  const data = {
    urlencode: "userID=ABCDEF-8910",
  };
  const [rows, setRows] = useState([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAdmissionsAction()).then((data: any) => {
      setRows(data.payload);
    });
  }, []);
  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <h3>View admissions</h3>
      {open ? <Form close={setOpen} /> : null}
      {
        rows.length > 0 ? 
        <Button
        style={{}}
        onClick={showForm}
      >
        +
      </Button> : null
      }
      {rows.length > 0 ? (
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(rows) => rows.id}
          pageSizeOptions={[5]}
        />
      ) : (
        "No records found"
      )}
    </div>
  );
};

export default Admissions;
Admissions.getLayout = (pages: React.ReactElement) => (
  <Dashboardlayout>{pages}</Dashboardlayout>
);
