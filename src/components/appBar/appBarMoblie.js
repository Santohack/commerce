import React from 'react'
import { AppBarContainer, AppBarHeader } from '../../styles/appBar'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ActionIcon from './actionIcon';
const AppBarMobile = ({match}) => {
  return (
    <>
   <AppBarContainer>
    <IconButton>
      <MenuIcon />
    </IconButton>
    <AppBarHeader textAlign="center">
      My Test
    </AppBarHeader>
    <IconButton >
      <SearchIcon />
    </IconButton>
    <ActionIcon match={match}/>
   </AppBarContainer>


    </>
  )
}

export default AppBarMobile