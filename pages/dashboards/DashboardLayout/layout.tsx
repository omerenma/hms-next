import React, { useEffect, useState, useContext } from "react";

import Header from "@/pages/components/Header/Header";
import SideMenu from "@/pages/components/Sidebar/Sidebar";


type LayoutProps = {
  children?: React.ReactNode;
};
export default function Dashboardlayout({ children }: LayoutProps) {
  const [role, setRole] = useState<any>("")
  useEffect(() => {
    const role = localStorage.getItem('role')
    setRole(role)
  }, [])
  return (
    <div>
     
      <main >
        <Header />
        <SideMenu children={children} role={role} />
      </main>
    </div>
  );
}
