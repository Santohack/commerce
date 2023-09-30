import { useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import AppBarMobile from './appBarMoblie';
import AppBarDesktop from './appBarDesktop';

const AppBar = () => {
    const theme = useTheme();
   const match  = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>

   
    {match ? <AppBarMobile match={match} /> : <AppBarDesktop match ={match} /> }
    </>
  )
}

export default AppBar