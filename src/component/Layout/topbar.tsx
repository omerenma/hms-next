import React, { FC, useState, useEffect } from "react";
import { Toolbar, IconButton, Typography, Avatar, Box } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import { Menu } from "@mui/icons-material";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useAppSeletor } from "@/src/store/hooks";

type Props = {
  open: boolean;
  handleOpen: Function;
};
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const drawerWidth = 220;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Topbar: FC<Props> = ({ open, handleOpen }) => {
  // const userName = useAppSeletor(state => state.loginSlice.data)
  return (
    <AppBar position="fixed" open={open} sx={{ background: "transparent" }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => handleOpen()}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <Menu />
        </IconButton>
        
          <Box>
           
          </Box>
          <Box>
            {/* <Avatar
              alt="Picture of logged in user"
              src={session?.user?.image}
              width={50}
              height={50}
            /> */}
          </Box>
        
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
