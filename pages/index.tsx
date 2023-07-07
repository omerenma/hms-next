import Head from 'next/head'
import React, {useMemo, useState} from 'react'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Login from '@/src/component/Auth/Login'
import { Box, PaletteMode } from '@mui/material'
import {useTheme, ThemeProvider, createTheme} from '@mui/material/styles'
import {Brightness4, Brightness7} from '@mui/icons-material'
import IconButton from '@mui/material/IconButton';

const inter = Inter({ subsets: ['latin'] })
             

const ColorModeContext = React.createContext({toggleColorMode: () => {}})

  
export default function Home() {

  return (
    
    
      <main className={`${styles.main} `}>
        <Login/>
      </main>
  )
}

// export default function ToggleColorMode() {
//   const [mode, setMode] = React.useState<'light' | 'dark'>('light');
//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//       },
//     }),
//     [],
//   );

//   const theme = React.useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode,
//         },
//       }),
//     [mode],
//   );

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <Home />
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }