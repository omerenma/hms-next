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
import { useAppDispatch, useAppSeletor } from "@/src/store/hooks";
import { addDoctorsAction } from "@/src/state/doctor/addDoctorSlice";

interface Props {
  close: Function;
  title: string;
}

const Form = ({ close, title }: Props) => {
  const dispatch = useAppDispatch();
  const { loading, success } = useAppSeletor((state) => state.addPatientSlice);
  const [formData, setFormData] = useState({
    // name: "",
    email: "",
    sex: "",
    phone_no: "",
    dob: "",
    specialty: ""
  });
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const data = {
    //   name: formData.name,
      email: formData.email,
      sex: formData.sex,
      phone_no: formData.phone_no,
      dob: formData.dob,
      specialty: formData.specialty,
    };
    dispatch(addDoctorsAction(data))

    setFormData({
        // name: "",
        email: "",
        sex: "",
        phone_no: "",
        dob: "",
        specialty: ""
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
        <button onClick={() => close(false)}>x</button>
        <StyledForm onSubmit={handleSubmit}>
          <Heading variant="h6">{title}</Heading>
          {/* <StyledTextField
            label="Name"
            variant="outlined"
            onChange={handleFormChange}
            name="name"
            value={formData.name}
          /> */}
           <StyledTextField
            label="Email"
            variant="outlined"
            onChange={handleFormChange}
            name="email"
            value={formData.email}
          />
          <StyledTextField
            label="Gender"
            type="text"
            variant="outlined"
            onChange={handleFormChange}
            name="sex"
            value={formData.sex}
          />
           <StyledTextField
            label="Phone number"
            variant="outlined"
            onChange={handleFormChange}
            name="phone_no"
            value={formData.phone_no}
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
            label="Specialty"
            type="text"
            variant="outlined"
            onChange={handleFormChange}
            name="specialty"
            value={formData.specialty}
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
