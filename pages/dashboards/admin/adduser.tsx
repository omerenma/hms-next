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
import { SelectInput } from "@/src/component/reuse";
import { useAppDispatch, useAppSeletor } from "@/src/store/hooks";
import { addAdminAction } from "@/src/state/adminSlice/adminSlice";
import Dashboardlayout from "../DashboardLayout/layout";

interface MyFormValues {
  name: string;
}

const AddUser = () => {
  const [role, setRole] = useState("");
  const dispatch = useAppDispatch();
  const { loading,  message, success } = useAppSeletor( (state) => state.addAdminSlice);

  const [value, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const id = useAppSeletor((state) => state.loginSlice.business_id);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
  }, [])
  const handleSubmits = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = {
      business_id: id,
      name: value.name,
      email: value.email,
      password: value.password,
      role: role,
    };

  dispatch(addAdminAction(data));
  };

  const item = [
    "admin",
    "reception",
    "doctor",
    "patients",
    "finance",
    "lab technician",
    "nurse",
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
            Add user
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
              label="Your name"
              name="name"
              value={value.name}
              onChange={(e) => handleChangeInput(e)}
              placeholder="Your name"
            />
            <InputField
              label="Your email"
              name="email"
              value={value.email}
              onChange={(e) => handleChangeInput(e)}
              placeholder="Your email"
            />
            <SelectInput
              value={role}
              name="role"
              onChange={(e: SelectChangeEvent) =>
                setRole(e.target.value as string)
              }
              item={item}
              variant="none"
            />
            <PasswordField name="password" value={value.password} onChange={(e) => handleChangeInput(e)}
 />
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

export default AddUser;
AddUser.getLayout = function getLayout(page: React.ReactElement) {
  return <Dashboardlayout>{page}</Dashboardlayout>;
};
