import React from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { Box, Typography } from '@mui/material';
import {useTheme} from '@mui/system'
import useMediaQuery from '@mui/material/useMediaQuery'

export type ThemeToggleButtonProps = {
    ColorModeContext:React.Context<{ toggleColorMode: () => void}>
}
const ThemeToggleButton = (props:ThemeToggleButtonProps) => {
    const mobileCheck = useMediaQuery('(min-width: 500px)')
    const {ColorModeContext = React.createContext( {toggleColorMode: () => {} })} = props
    const theme = useTheme()
    const colorMode = React.useContext(ColorModeContext)
  return (
    <>
    {
        mobileCheck && (
            <Typography>{theme.palette.mode}</Typography>
        )
    }
    <IconButton sx={{ ml: 1 }} title={theme.palette.mode + 'mode'} onClick={colorMode.toggleColorMode} color="inherit">
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  </>
  )
}

export default ThemeToggleButton
