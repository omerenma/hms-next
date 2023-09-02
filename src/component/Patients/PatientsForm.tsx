import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import CircularProgress from "@mui/material/CircularProgress";
import {
  DateInput,
  StyledForm,
  StyledButton,
  StyledTextField,
  Heading,
} from "../reuse/index";
import { addPatientAction } from "@/src/state/patients/addPatientSlice";
import { useAppDispatch, useAppSeletor } from "@/src/store/hooks";
import { getPatientsAction } from "@/src/state/patients/getPatientsSlice";
import axios from "axios";

interface Props {
  close: Function;
  title: string;
}

const Form = ({ close, title }: Props) => {
  const dispatch = useAppDispatch();
  const { loading, success } = useAppSeletor((state) => state.addPatientSlice);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    sex: "",
    phone_no: "",
    residential_address: "",
    next_of_kin_name: "",
    next_of_kin_phone: "",
  });
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const data = {
      name: formData.name,
      sex: formData.sex,
      dob: formData.dob,
      residential_address: formData.residential_address,
      email: formData.email,
      phone_no: formData.phone_no,
      next_of_kin_name: formData.next_of_kin_name,
      next_of_kin_phone: formData.next_of_kin_phone,
    };
    const response = await dispatch(addPatientAction(data))
    // @ts-ignore
  if(response.payload.message === 'Patient added successfully'){
    dispatch(getPatientsAction())
  }else{
    // @ts-ignore
    if(response.payload.status === '403'){
      axios.get('http://localhost:5000/users/token', {
       withCredentials:true,
       headers:{
         "Content-Type":"application/json"
       }
     })
     .then(result => {
       localStorage.removeItem('token')
       localStorage.setItem('token', result.data)
     })
   }
  }
 

    setFormData({
      name: "",
      email: "",
      dob: "",
      sex: "",
      phone_no: "",
      residential_address: "",
      next_of_kin_name: "",
      next_of_kin_phone: "",
    });
  };
  return (
    <div className="form-container">
      <Paper
        style={{
          width: "400px",
          height: "90vh",
          position: "absolute",
          right: 0,
          top: 70,
        }}
      >
        <button onClick={() => close(false)}  style={{
          borderRadius: "100%",
          width: "30px",
          height: "30px",
          background: "#fff",
          fontSize: "10px",
          border: "solid 1px #ccc",
          fontWeight: 600,
          color: "blue",
          cursor:'pointer',
          alignSelf:'self-end',
          position:'relative',
          right:2,
          bottom:2
          
        }}>x</button>
        <StyledForm onSubmit={handleSubmit}>
          <Heading variant="h6">{title}</Heading>
          <StyledTextField
            label="Name"
            variant="outlined"
            onChange={handleFormChange}
            name="name"
            value={formData.name}
          />
          <StyledTextField
            label="Gender"
            type="select"
            variant="outlined"
            onChange={handleFormChange}
            name="sex"
            value={formData.sex}
          />
          <StyledTextField
            label="Date of birth"
            type="date"
            variant="outlined"
            onChange={handleFormChange}
            name="dob"
            value={formData.dob}
          />
          <StyledTextField
            label="Email"
            variant="outlined"
            onChange={handleFormChange}
            name="email"
            value={formData.email}
          />
          <StyledTextField
            label="Phone number"
            variant="outlined"
            onChange={handleFormChange}
            name="phone_no"
            value={formData.phone_no}
          />
          <StyledTextField
            label="Residential address"
            variant="outlined"
            onChange={handleFormChange}
            name="residential_address"
            value={formData.residential_address}
          />
          <StyledTextField
            label="Next of kin"
            variant="outlined"
            onChange={handleFormChange}
            name="next_of_kin_name"
            value={formData.next_of_kin_name}
          />
          <StyledTextField
            label="Next of kin phone number"
            variant="outlined"
            onChange={handleFormChange}
            name="next_of_kin_phone"
            value={formData.next_of_kin_phone}
          />
          <StyledButton type="submit" variant="contained">
            {loading ? <CircularProgress size={15} /> : "Submit"}
          </StyledButton>
        </StyledForm>
      </Paper>
    </div>
  );
};

export default Form;
