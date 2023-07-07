import React, { ReactElement } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";

import { Box, Typography } from "@mui/material";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


export const Main = (data:ReactElement) => {
  return (
    <Box  sx={{ flexGrow: 1, p: 3 }}>
      {/* <DrawerHeader /> */}
      {/* <h1 style={{color:'red'}}>Main</h1> */}
      {/* {data} */}
    </Box>
  );
};
// component="main"
