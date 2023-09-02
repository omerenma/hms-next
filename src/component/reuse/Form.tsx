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

interface Props {
  close: Function;
  title:string;
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
    hospital_card_no:"",
    next_of_kin_name: "",
    next_of_kin_phone: "",
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
      name: formData.name,
      sex: formData.sex,
      dob: formData.dob,
      residential_address: formData.residential_address,
      hospital_card_no:formData.hospital_card_no,
      email: formData.email,
      phone_no: formData.phone_no,
      next_of_kin_name: formData.next_of_kin_name,
      next_of_kin_phone: formData.next_of_kin_phone,
    };
    dispatch(addPatientAction(data));

    setFormData({
      name: "",
      email: "",
      dob: "",
      sex: "",
      phone_no: "",
      residential_address: "",
      hospital_card_no:"",
      next_of_kin_name: "",
      next_of_kin_phone: "",
    });
    dispatch(getPatientsAction())
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
          {/* <StyledTextField
            label="Date"
            type="date"
            variant="outlined"
            onChange={handleFormChange}
            name="date"
            value={formData.date}
          /> */}
          <StyledTextField
            label="Next of kin"
            variant="outlined"
            onChange={handleFormChange}
            name="next_of_kin"
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
