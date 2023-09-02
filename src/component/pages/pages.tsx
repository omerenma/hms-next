
import React, { FC, ReactElement } from "react";


import {
  Home,
  People,
  Bed,
  
  Medication,
  HealthAndSafety,
  LocalHospital,
  MeetingRoom,
  BedOutlined,
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