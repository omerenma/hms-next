import React, {ReactElement} from 'react'
import SideMenu from '../Sidebar/Sidebar'
import scss from './Layout.module.scss'
import Header from '../Header/Header'
import Main from '../Main/Main'
import AddUser from '@/pages/dashboards/admin/adduser'
interface Props {
  window?: () => Window;
 children: React.ReactNode;
}
const Layout = ({children}:Props) => {
  return (
    <main className={scss.layout}>
        {/* <Header /> */}
        {/* <SideMenu role="admin" /> */}
    </main>
  )
}

export default Layout
