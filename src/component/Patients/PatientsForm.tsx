"use client";
import React, { useEffect, useState } from "react";
import { Paper } from "@material-ui/core";
import CircularProgress from "@mui/material/CircularProgress";
import {
  StyledForm,
  StyledButton,
  StyledTextField,
  Heading,
} from "../reuse/index";
import { addPatientAction } from "@/src/state/patients/addPatientSlice";
import { useAppDispatch, useAppSeletor } from "@/src/store/hooks";
import { getPatientsAction } from "@/src/state/patients/getPatientsSlice";
import axios from "axios";
import { toggleAddClose } from "@/src/state/patients/toggleAddPatientSlice";
import { getSinglePatientsAction } from "@/src/state/patients/getSinglePatient";
import { editPatientAction } from "@/src/state/patients/editPatientSlice";

interface Props {
  close: Function;
  title: string;
}

const Form = ({ close, title }: Props) => {
  const [editId, setId] = useState<any>(undefined);
  const [data, setData] = useState<any>({});

  const dispatch = useAppDispatch();
  const { loading, success } = useAppSeletor((state) => state.addPatientSlice);
  const { editOpen } = useAppSeletor((state) => state.toggleEditPatientSlice);

  useEffect(() => {
    const id: any = localStorage.getItem("editRowId");
    setId(id);
    if (editId) {
      dispatch(getSinglePatientsAction(editId)).then((result) => {
        setData(result.payload);
      });
    }
  }, [editId]);

  const [formData, setFormData] = useState({
    patient_name: "",
    patient_email: "",
    dob: "",
    patient_sex: "",
    patient_phone_no: "",
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

  const handleEditFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const datas = {
       patient_name: formData. patient_name,
      patient_sex: formData.patient_sex,
      dob: formData.dob,
      residential_address: formData.residential_address,
      patient_email: formData.patient_email,
      patient_phone_no: formData.patient_phone_no,
      next_of_kin_name: formData.next_of_kin_name,
      next_of_kin_phone: formData.next_of_kin_phone,
    };

    const editData = {
      id: title === "Edit patients" && editId,
      name: data && data.patient_name,
      sex: data && data.patient_sex,
      dob: data && data.dob,
      residential_address: data && data.residential_address,
      email: data.patient_email,
      phone_no: data && data.patient_phone_no,
      next_of_kin_name: data && data.next_of_kin_name,
      next_of_kin_phone: data && data.next_of_kin_phone,
    };

    if(title === 'Edit patients') {
      dispatch(editPatientAction(editData))
      .then(data => data.payload)
    }else {
      dispatch(addPatientAction(datas)).then((response) => {
        // @ts-ignore
        if (response.payload.message === "Patient added successfully") {
          dispatch(getPatientsAction());
        } else {
          // @ts-ignore
          if (response.payload.status === "403") {
            axios
              .get("http://localhost:5000/users/token", {
                withCredentials: true,
                headers: {
                  "Content-Type": "application/json",
                },
              })
              .then((result) => {
                localStorage.removeItem("token");
                localStorage.setItem("token", result.data);
              });
          }
        }
      });
    }

    setFormData({
      patient_name: "",
      patient_email: "",
      dob: "",
      patient_sex: "",
      patient_phone_no: "",
      residential_address: "",
      next_of_kin_name: "",
      next_of_kin_phone: "",
    });
  };

  const handleClose = () => {
    close(false);
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
        {editOpen ? (
          <button
            type="button"
            onClick={handleClose}
            style={{
              borderRadius: "100%",
              width: "30px",
              height: "30px",
              background: "#fff",
              fontSize: "10px",
              border: "solid 1px #ccc",
              fontWeight: 600,
              color: "blue",
              cursor: "pointer",
              alignSelf: "self-end",
              position: "relative",
              right: 2,
              bottom: 2,
            }}
          >
            x
          </button>
        ) : (
          <button
            type="button"
            onClick={() => dispatch(toggleAddClose())}
            style={{
              borderRadius: "100%",
              width: "30px",
              height: "30px",
              background: "#fff",
              fontSize: "10px",
              border: "solid 1px #ccc",
              fontWeight: 600,
              color: "blue",
              cursor: "pointer",
              alignSelf: "self-end",
              position: "relative",
              right: 2,
              bottom: 2,
            }}
          >
            x
          </button>
        )}
        <StyledForm onSubmit={handleSubmit}>
          <Heading variant="h6">{title}</Heading>
          <StyledTextField
            label="Name"
            variant="outlined"
            onChange={
              title === "Edit patients"
                ? handleEditFormChange
                : handleFormChange
            }
            name="patient_name"
            value={title === "Edit patients" ? data.name : formData.patient_name}
          />
          <StyledTextField
            label="Gender"
            type="select"
            variant="outlined"
            onChange={
              title === "Edit patients"
                ? handleEditFormChange
                : handleFormChange
            }
            name="patient_sex"
            value={title === "Edit patients" ? data.sex : formData.patient_sex}
          />
          <StyledTextField
            label="Date of birth"
            type="date"
            variant="outlined"
            onChange={
              title === "Edit patients"
                ? handleEditFormChange
                : handleFormChange
            }
            name="dob"
            value={title === "Edit patients" ? data.dob : formData.dob}
          />
          <StyledTextField
            label="Email"
            variant="outlined"
            onChange={
              title === "Edit patients"
                ? handleEditFormChange
                : handleFormChange
            }
            name="patient_email"
            value={title === "Edit patients" ? data.email : formData.patient_email}
          />
          <StyledTextField
            label="Phone number"
            variant="outlined"
            onChange={
              title === "Edit patients"
                ? handleEditFormChange
                : handleFormChange
            }
            name="patient_phone_no"
            value={
              title === "Edit patients" ? data.phone_no : formData.patient_phone_no
            }
          />
          <StyledTextField
            label="Residential address"
            variant="outlined"
            onChange={
              title === "Edit patients"
                ? handleEditFormChange
                : handleFormChange
            }
            name="residential_address"
            value={
              title === "Edit patients"
                ? data.residential_address
                : formData.residential_address
            }
          />
          <StyledTextField
            label="Next of kin"
            variant="outlined"
            onChange={
              title === "Edit patients"
                ? handleEditFormChange
                : handleFormChange
            }
            name="next_of_kin_name"
            value={
              title === "Edit patients"
                ? data.next_of_kin_name
                : formData.next_of_kin_name
            }
          />
          <StyledTextField
            label="Next of kin phone number"
            variant="outlined"
            onChange={
              title === "Edit patients"
                ? handleEditFormChange
                : handleFormChange
            }
            name="next_of_kin_phone"
            value={
              title === "Edit patients"
                ? data.next_of_kin_phone
                : formData.next_of_kin_phone
            }
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
