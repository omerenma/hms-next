import React, { useState, useContext } from "react";
import { Paper } from "@material-ui/core";
import CircularProgress from "@mui/material/CircularProgress";
import {
  StyledForm,
  StyledButton,
  StyledTextField,
  Heading,
} from "../reuse/index";
import { useAppDispatch, useAppSeletor } from "@/src/store/hooks";
import { getPatientsAction } from "@/src/state/patients/getPatientsSlice";
import { bookAppointmentsAction } from "@/src/state/appointments/bookAppointments";
import { Context } from "./BookAppointment";
import getAppointments, {
  getAppointmentsAction,
} from "@/src/state/appointments/getAppointments";
import { Box } from "@mui/material";

interface Props {
  close: Function;
  title: string;
}

const Form = ({ close, title }: Props) => {
  const dispatch = useAppDispatch();
  const id = useContext(Context);

  const { loading, success } = useAppSeletor((state) => state.addPatientSlice);
  const [formData, setFormData] = useState({
    patient_id: "",
    appointment_date: "",
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
      patient_id: formData.patient_id,
      doctor_id: JSON.stringify(id),
      appointment_date: formData.appointment_date,
    };
    dispatch(bookAppointmentsAction(data));

    setFormData({
      patient_id: "",
      appointment_date: "",
    });
    dispatch(getAppointmentsAction());
  };
  return (
    <div className="form-container">
      <Box
        component={"div"}
        style={{
          width: "400px",
          height: "90vh",
          position: "absolute",
          right: 0,
          top: 70,
        }}
      >
        <button
          onClick={() => close(false)}
          style={{
            color: "tomato",
            position: "relative",
            right:50,
            top: 25,
            backgroundColor: "transparent",
            border: "none",
            float:'right',
            fontSize:15,
            cursor:'pointer'
            
          }}
        >
          x
        </button>
        <StyledForm onSubmit={handleSubmit}>
          <Heading variant="h6">{title}</Heading>
          <StyledTextField
            label="Patient id"
            variant="outlined"
            onChange={handleFormChange}
            name="patient_id"
            value={formData.patient_id}
          />
          <StyledTextField
            label="Date"
            type="date"
            variant="outlined"
            onChange={handleFormChange}
            name="appointment_date"
            value={formData.appointment_date}
          />

          <StyledButton type="submit" variant="contained">
            {loading ? <CircularProgress size={15} /> : "Submit"}
          </StyledButton>
        </StyledForm>
      </Box>
    </div>
  );
};

export default Form;
