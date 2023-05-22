import React, { FC, ReactElement, useState, useEffect } from "react";
import Topbar from "./topbar";
import { SideDrawer } from "./sidebar";
import {useRouter} from 'next/router'
import { useAppSeletor } from "@/src/store/hooks";
import Login from "../Auth/Login";
import { useSelector } from "react-redux";
interface Props {
   window?: () => Window;
  children: ReactElement;
}
const Layout= ({children}: Props) => {
  const { role, token} =  useAppSeletor(state => state.loginSlice)
  const [access, setToken] = useState('')

   const router = useRouter()

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

useEffect(() => {
  const token = localStorage.getItem('token')
  !token ? router.push('/') :setToken(token as string) 
}, [router])
  
  


  return (
   <div>
    
      <Topbar open={open} handleOpen={handleDrawerOpen} />
         <SideDrawer open={open} handleClose={handleDrawerClose} role={role} />
         <main>{children}</main>
    
   </div>
  );
};

export default Layout;
