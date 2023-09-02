
import React, { FC, ReactElement } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import {
  Home,
  People,
  Bed,
  Logout,
  Close,
  Medication,
  HealthAndSafety,
  LocalHospital,
  MeetingRoom,
  BedOutlined,
  Equalizer
} from "@mui/icons-material";

// Admin menu list
export const adminMenuList = [
    // { name: "Home", icon: <Equalizer />, link: "/dashboards" },
    { name: "Add user", icon: <People />, link: "/dashboards/admin/adduser" },
    { name: "Admissions", icon: <Bed />, link: "/dashboards/admin/admissions" },
    { name: "Appointments", icon: <Bed />, link: "/dashboards/admin/appointments" },
    { name: "Users", icon: <People />, link: "/dashboards/admin/users" },
    { name: "Patients", icon: <Medication />, link: "/dashboards/admin/patients" },
    {
      name: "History",
      icon: <HealthAndSafety />,
      link: "/dashboard/admin/history",
    },
    {
      name: "Reports",
      icon: <HealthAndSafety />,
      link: "/dashboards/admin/reports",
    },
    {
      name: "Doctors",
      icon: <LocalHospital />,
      link: "/dashboards/admin/doctors",
    },
  ];
  
  // Reception menu list
 export  const receptionMenuList = [
  {name:"Home", icon:<Home />, link:'/dashboards/reception/'},
    { name: "Patients", icon: <People />, link: "/dashboards/reception/addpatients" },
    {
      name: "Book appointments",
      icon: <MeetingRoom />,
      link: "/dashboards/reception/appointments",
      
    },
   
    {
      name: "View appointments",
      icon: <MeetingRoom />,
      link: "/dashboards/reception/appointments",
    },
    {
      name:"Admissions",
      icon:<BedOutlined/>,
      link:"/dashboards/reception/admissions"
    }
  ];
  
  // Doctor menu list
  export const doctorMenuList = [
    //{ name: "Home", icon: <Home />, link: "/dashboard/admin/home" },
    { name: "Appointments", icon: <Bed />, link: "/dashboard/doctor/appointments" },
    { name: "Patients", icon: <People />, link: "/dashboard/doctor/users" },
  ];