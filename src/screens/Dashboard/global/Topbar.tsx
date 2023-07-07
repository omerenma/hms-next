import { Box, IconButton, InputBase } from "@mui/material";
import {
  LightModeOutlined,
  DarkModeOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutline,
  Search,
} from "@mui/icons-material";

const Topbar = () => {
  return <Box display="flex" justifyContent={"space-between"} p={2}>
    <Box 
    sx={{display:'flex', backgroundColor:'#c3c3c3', borderRadius:3}}
    >
        <InputBase sx={{ml:2, flex:1}} placeholder="Search" />
        <IconButton type="button" sx={{p:1}}>
            <Search />
        </IconButton>
    </Box>
    <Box sx={{display:"flex"}}>
        <IconButton><NotificationsOutlined/></IconButton>
        <IconButton><LightModeOutlined/></IconButton>
        <IconButton><DarkModeOutlined/></IconButton>
        <IconButton><SettingsOutlined/></IconButton>
        <IconButton><PersonOutline/></IconButton>

    </Box>
  </Box>;
};

export default Topbar;
