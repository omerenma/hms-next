import Head from 'next/head'
import React, {useMemo, useState} from 'react'
import { Inter, Roboto, Poppins } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Login from '@/src/component/Auth/Login'
import { Box, PaletteMode } from '@mui/material'
import {useTheme, ThemeProvider, createTheme} from '@mui/material/styles'
import {Brightness4, Brightness7} from '@mui/icons-material'
import IconButton from '@mui/material/IconButton';
import Subscription from '@/src/component/Initialization/Subscription'
import Navbar from '@/src/component/Website/Navbar/Navbar'
import HomePage from '@/src/component/Website/Home'
const inter = Inter({ subsets: ['latin'] })
const ColorModeContext = React.createContext({toggleColorMode: () => {}})

export default function Home() {
 

  return (
    <div className='home-container'>

      <HomePage/>
    </div>
      // <main className={`${styles.main} `}>
      // </main>
  )
}