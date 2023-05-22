
import React, { useState, ReactElement } from "react";
 import Layout from "@/src/component/Layout/layout";
import { Container, SelectChangeEvent, Typography } from "@mui/material";
import { TextFields, SelectInput, Buttons } from "@/src/component/reuse";
import { addAdminAction } from "@/src/state/adminSlice/adminSlice";
import { useAppDispatch, useAppSeletor } from "@/src/store/hooks";
import SnackBar from "../../../src/component/reuse/SnackBar";
import Progress from "../../../src/component/reuse/Progress";

const item = [
  "admin",
  "reception",
  "doctor",
  "patients",
  "finance",
  "lab technician",
  "nurse",
];
const Adduser = () => {
  const dispatch = useAppDispatch();
  const { loading,  message, success } = useAppSeletor(
    (state) => state.addAdminSlice
  );

  const [role, setRole] = useState("");
  const [value, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = {
      name: value.name,
      email: value.email,
      password: value.password,
      role: role,
    };
    dispatch(addAdminAction(data));
  };
  return (
    <div>
      {success && <SnackBar message={message} />}
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid #eee",
          height: 400,
        }}
      >
        <Typography variant="h5">Add New User</Typography>

        <TextFields
          label="Name"
          name="name"
          type="text"
          onChange={handleChange}
          value={value.name}
          width={400}
        />

        <TextFields
          label="Email"
          name="email"
          type="text"
          onChange={handleChange}
          value={value.email}
          width={400}
        />

        <TextFields
          label="Password"
          name="password"
          type="password"
          onChange={handleChange}
          value={value.password}
          width={400}
        />
        <SelectInput
          value={role}
          name="role"
          onChange={(e: SelectChangeEvent) => setRole(e.target.value as string)}
          item={item}
          width={400}
          variant="none"
        />
        <Buttons submit={handleSubmit}>
          {loading ? <Progress /> : "Submit"}
        </Buttons>
      </Container>
    </div>
  );
};


export default Adduser;
Adduser.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
