import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import CircularProgress from "@mui/material/CircularProgress";
import {
  StyledForm,
  StyledButton,
  StyledTextField,
  Heading,
} from "../reuse/index";
import { useAppDispatch, useAppSeletor } from "@/src/store/hooks";
import { getAdmissionsAction } from "@/src/state/admissionSlice/getAdmissionsSlice";
import { addAdmissionAction } from "@/src/state/admissionSlice/addAdmission";

interface Props {
  close: Function;
  title:string;
}

const Form = ({ close, title }: Props) => {
  const dispatch = useAppDispatch();
  const { loading, success } = useAppSeletor((state) => state.addPatientSlice);
  const [formData, setFormData] = useState({
    patients_id: "",
    admission_date: "",
    discharged_date: ""
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
        patients_id: formData.patients_id,
        admission_date: formData.admission_date,
        discharged_date: formData.discharged_date,
    };
    dispatch(addAdmissionAction(data));

    setFormData({
        patients_id: "",
        admission_date: "",
        discharged_date: "",
     
    });
    dispatch(getAdmissionsAction())
  };
  return (
    <div className="form-container">
      <Paper
        style={{
          width: "400px",
          position: "absolute",
          right: 0,
          top: 70,
        }}
      >
        <button onClick={() => close(false)}>x</button>
        <StyledForm onSubmit={handleSubmit}>
          <Heading variant="h6">{title}</Heading>
          <StyledTextField
            label="Hospital number"
            variant="outlined"
            onChange={handleFormChange}
            name="patients_id"
            value={formData.patients_id}
          />
          <StyledTextField
            label="Admission date"
            type="date"
            variant="outlined"
            onChange={handleFormChange}
            name="admission_date"
            value={formData.admission_date}
          />
          <StyledTextField
            label="Discharge date"
            type="date"
            variant="outlined"
            onChange={handleFormChange}
            name="discharged_date"
            value={formData.discharged_date}
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
