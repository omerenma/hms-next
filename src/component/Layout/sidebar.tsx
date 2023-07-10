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
  BedOutlined
} from "@mui/icons-material";

import { useRouter } from "next/router";
import { logout } from "../../state/authSlice/authSlice";
import { useAppDispatch } from "@/src/store/hooks";

// Admin menu list
const adminMenuList = [
  { name: "Home", icon: <Home />, link: "/dashboard/admin" },
  { name: "Add user", icon: <People />, link: "/dashboard/admin/adduser" },
  { name: "Admissions", icon: <Bed />, link: "/dashboard/admin/admissions" },
  { name: "Appointments", icon: <Bed />, link: "/dashboard/admin/appointments" },
  { name: "Users", icon: <People />, link: "/dashboard/admin/users" },
  { name: "Patients", icon: <Medication />, link: "/dashboard/admin/patients" },
  // {
  //   name: "Reception",
  //   icon: <HealthAndSafety />,
  //   link: "/dashboard/admin/reception",
  // },
  {
    name: "Doctors",
    icon: <LocalHospital />,
    link: "/dashboard/admin/doctors",
  },
  { name: "Block", icon: <Close />, link: "/admin/block" },
];

// Reception menu list
const receptionMenuList = [
  { name: "Patients", icon: <People />, link: "/dashboard/reception/" },
  {
    name: "Book appointments",
    icon: <MeetingRoom />,
    link: "/dashboard/reception/book",
    
  },
 
  {
    name: "View appointments",
    icon: <MeetingRoom />,
    link: "/dashboard/reception/appointments",
  },
  {
    name:"Admissions",
    icon:<BedOutlined/>,
    link:"/dashboard/reception/admissions"
  }
];

// Doctor menu list
const doctorMenuList = [
  //{ name: "Home", icon: <Home />, link: "/dashboard/admin/home" },
  { name: "Appointments", icon: <Bed />, link: "/dashboard/doctor/appointments" },
  { name: "Patients", icon: <People />, link: "/dashboard/doctor/users" },
];

const drawerWidth = 220;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

type Props = {
  open: boolean;
  handleClose: Function;
  role: string | string[] | undefined;
};

const logoutMenu = [{ name: "Logout", icon: <Logout /> }];

export const SideDrawer: FC<Props> = ({ open, handleClose, role }) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const router = useRouter();

  const handleRouting = (url: string) => {
    router.push(url);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => handleClose()}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {role === "admin".toLocaleLowerCase()
            ? adminMenuList.map((text, index) => (
                <ListItem
                  key={index + 1}
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <ListItemButton
                    onClick={() => handleRouting(text.link)}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {text.icon}
                      {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                    </ListItemIcon>
                    <ListItemText
                      primary={text.name}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))
            : role === "Reception".toLocaleLowerCase()
            ? receptionMenuList.map((text, index) => (
                <ListItem
                  key={index + 1}
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <ListItemButton
                    onClick={() => handleRouting(text.link)}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {text.icon}
                      {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                    </ListItemIcon>
                    <ListItemText
                      primary={text.name}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))
            : role === "doctor".toLocaleLowerCase()
            ? doctorMenuList.map((text, index) => (
                <ListItem
                  key={index + 1}
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <ListItemButton
                    onClick={() => handleRouting(text.link)}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {text.icon}
                      {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                    </ListItemIcon>
                    <ListItemText
                      primary={text.name}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))
            : null}
        </List>
        <List>
          {logoutMenu.map((text, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => dispatch(logout())}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {text.icon}
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText
                  primary={text.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ display:"grid", placeItems:"center" }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
};
