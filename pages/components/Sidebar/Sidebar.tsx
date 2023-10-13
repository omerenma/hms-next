    import * as React from 'react';
    import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
    import Box from '@mui/material/Box';
    import MuiDrawer from '@mui/material/Drawer';
    import List from '@mui/material/List';
    import CssBaseline from '@mui/material/CssBaseline';
    import Divider from '@mui/material/Divider';
    import IconButton from '@mui/material/IconButton';
    import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
    import ChevronRightIcon from '@mui/icons-material/ChevronRight';
    import ListItem from '@mui/material/ListItem';
    import ListItemButton from '@mui/material/ListItemButton';
    import ListItemIcon from '@mui/material/ListItemIcon';
    import ListItemText from '@mui/material/ListItemText';
    import scss from './SideMenu.module.scss'
    import { useMediaQuery } from '@mui/material';
    import NextLink from 'next/link'
import { adminMenuList, receptionMenuList, doctorMenuList } from '../../../src/component/pages/pages';
import Main from '../Main/Main';
    const drawerWidth = 240;

    const openedMixin = (theme: Theme): CSSObject => ({
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: 'hidden',
    });

    const closedMixin = (theme: Theme): CSSObject => ({
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: `calc(${theme.spacing(7)} + 1px)`,
      [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
      },
    });

    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
      ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        }),
      }),
    );

    const DrawerHeader = styled('div')(({ theme }) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    }));

    type Props = {
      children?: React.ReactNode
      role:string
    }
    const SideMenu = ({children, role}: Props) => {
      const theme = useTheme();
      const [open, setOpen] = React.useState(false);
      const mobileCheck = useMediaQuery(`(min-width:600px)`)
      

      const handleDrawerClose = () => {
        setOpen(!open);
      };


      return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
        <Drawer 
        variant="permanent" 
        open={open}
        anchor='left'
        sx={{
          width:drawerWidth,
          [`& .MuiDrawer-paper`]:{
            top:mobileCheck ? 64 : 57,
            flexShrink:0,
            whiteSpace:'nowrap',
            boxSizing:'border-box',
            ...(open && {
              ...openedMixin(theme),
              "& .MuiDrawer-paper":openedMixin(theme)
            }),
            ...(!open && {
              ...closedMixin(theme),
              "& .MuiDrawer-paper":closedMixin(theme)
            })
          },
        }}
        >
        <div className={scss.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          { 
          role === 'admin' ? adminMenuList.map((menu, index) => (
            <ListItem key={index}>
              <NextLink href={`${menu.link}`}>
              <ListItemButton onClick={() => setOpen(false)}>
                <ListItemIcon>
                  {menu.icon}
                </ListItemIcon>
                <ListItemText>
                  {menu.name}
                </ListItemText>
              </ListItemButton>
              </NextLink>
            </ListItem>
          )) : role === 'reception' ? receptionMenuList.map((menu, index) => (
            <ListItem key={index}>
            <NextLink href={`${menu.link}`}>
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemIcon>
                {menu.icon}
              </ListItemIcon>
              <ListItemText>
                {menu.name}
              </ListItemText>
            </ListItemButton>
            </NextLink>
          </ListItem>
          )): role === 'doctor' ? doctorMenuList.map((menu, index) => (
            <ListItem key={index}>
            <NextLink href={`${menu.link}`}>
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemIcon>
                {menu.icon}
              </ListItemIcon>
              <ListItemText>
                {menu.name}
              </ListItemText>
            </ListItemButton>
            </NextLink>
          </ListItem>
          )) : ""
          }
        </List>
      </Drawer>
        <DrawerHeader />
      <Box component="main" sx={{flexGrow:1, p:3}}>
        <Main children={children} />
      </Box>
      </Box>
      )
    }

    export default SideMenu