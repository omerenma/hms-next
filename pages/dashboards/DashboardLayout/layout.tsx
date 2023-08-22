import React, {useEffect, useState} from 'react'
useAppSeletor

import Header from '@/pages/components/Header/Header'
import SideMenu from '@/pages/components/Sidebar/Sidebar'
import { useAppSeletor } from '@/src/store/hooks'
import { stat } from 'fs'
type LayoutProps = {
    children?: React.ReactNode,
}
export default function Dashboardlayout({children}:LayoutProps) {
    const role = useAppSeletor(state => state.loginSlice.role)
    return (
        <main>
          <Header />
          <SideMenu children={children} role={role} />
        </main>
    )
}