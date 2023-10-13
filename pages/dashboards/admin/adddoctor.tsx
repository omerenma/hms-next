import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import {
  Box,
  Grid,
  Typography,
  SelectChangeEvent,
  Button,
} from "@mui/material";
import Main from "@/pages/components/Main/Main";
import { InputField, PasswordField } from "@/src/common";
import { SelectInput, StyledTextField } from "@/src/component/reuse";
import { useAppDispatch, useAppSeletor } from "@/src/store/hooks";
import { addAdminAction } from "@/src/state/adminSlice/adminSlice";
import Dashboardlayout from "../DashboardLayout/layout";
import { addDoctorsAction } from "@/src/state/doctor/addDoctorSlice";

interface MyFormValues {
  name: string;
}

const AddDoctor = () => {
  const [specialty, setSpecialty] = useState("");
  const dispatch = useAppDispatch();
  const { loading,  message, success } = useAppSeletor( (state) => state.addAdminSlice);
  const [bizId, setBizId] = useState("")

  const [value, setData] = useState({
    name: "",
    email: "",
    sex:"",
    phone_no:"",
    specialty:"",
    dob:""
    
  });
  const id = useAppSeletor((state) => state.loginSlice.business_id);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const bId:any = localStorage.getItem('business_id')
    setBizId(bId)
  }, [bizId])
  const handleSubmits = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = {
      business_id: bizId,
      name: value.name,
      email: value.email,
      sex:value.sex,
      specialty:specialty,
      phone_no:value.phone_no,
      dob:value.dob
    };

  dispatch(addDoctorsAction(data));
  };

  const item = [
    "Gynaecologist",
    "Dermatologist",
    "Pediatrician"
  ];

  return (
    <Box
      style={{
        display: "grid",
        placeItems: "center",
      }}
    >
      <Main>
        <Box
          sx={{
            boxShadow: "rgba(0, 12, 43, 0.05) 0px 4px 8px",
            padding: 5,
          }}
        >
          <Typography
            sx={{
              fontSize: 20,
              fontWeight:"bolder",
              position: "relative",
              bottom: 20,
              textAlign: "center",
              color:'#ccc'
            }}
          >
            Add Doctor
          </Typography>

          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              rowGap: 6.5,
            }}
          >
            <InputField
              label="Name"
              name="name"
              value={value.name}
              onChange={(e) => handleChangeInput(e)}
              placeholder="Name"
            />
             <InputField
              label="Sex"
              name="sex"
              value={value.sex}
              onChange={(e) => handleChangeInput(e)}
              placeholder="Genda"
            />
             <InputField
              label="Phone"
              name="phone_no"
              value={value.phone_no}
              onChange={(e) => handleChangeInput(e)}
              placeholder="Phone number"
            />
           
             <StyledTextField
            label="Date of birth"
            type="date"
            variant="outlined"
            onChange={ handleChangeInput}
            name="dob"
            value={value.dob}
          />
            <InputField
              label="Email"
              name="email"
              value={value.email}
              onChange={(e) => handleChangeInput(e)}
              placeholder="Email"
            />
            <SelectInput
              value={specialty}
              name="specialty"
              onChange={(e: SelectChangeEvent) =>
                setSpecialty(e.target.value as string)
              }
              item={item}
              variant="none"
            />
            {/* <PasswordField name="password" value={value.password} onChange={(e) => handleChangeInput(e)}/> */}
            <button
              type="button"
              style={{
                backgroundColor: "green",
                border: "none",
                width: 350,
                padding: 10,
                cursor: "pointer",
                borderRadius:5,
                color:'#ccc',
                fontWeight:600
              }}
              onClick={handleSubmits}
            >
              {" "}
              {loading === true ? "Loading..." : "Submit"}
            </button>
          </Box>
        </Box>
      </Main>
    </Box>
  );
};

export default AddDoctor;
AddDoctor.getLayout = function getLayout(page: React.ReactElement) {
  return <Dashboardlayout>{page}</Dashboardlayout>;
};
