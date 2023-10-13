import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  Button,
  Tooltip,
  MenuItem,
  Container,
  Avatar,
} from "@mui/material/";
import { useAppDispatch, useAppSeletor } from "@/src/store/hooks";
// import { logout } from "@/src/state/authSlice/authSlice";
import { useRouter } from "next/router";
import { logoutAction } from "@/src/state/authSlice/logoutSlice";


const pages = ["Products", "Pricing", "Blog"];

const Header = () => {
  // const token: string = useAppSeletor((state) => state.loginSlice.accessToken);
  // const name = useAppSeletor(state => state.loginSlice.name)

  const dispatch = useAppDispatch();
  const router = useRouter();
  // const settings = [token ? "Logout" : "Login"];
  const settings = ["Logout", "Login"];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logouts = () => {
    
    dispatch(logoutAction())
    .then(response => {
      if(response.payload === 'Logout success'){
        localStorage.clear()
       return router.push("/");
        
      }
    })
  };
  return (
    <AppBar
      position="static"
      sx={{
        background: "transparent",
        boxShadow: " rgba(0, 12, 43, 0.05) 0px 4px 8px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#cecece",
              textDecoration: "none",
            }}
          >
            {/* {name} */}
          </Typography>
           
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Medsoft
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open profile settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={logouts}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
