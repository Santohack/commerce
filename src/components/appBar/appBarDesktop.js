import React from 'react'
import { AppBarContainer, AppBarHeader, MyList } from '../../styles/appBar'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import ActionIcon from './actionIcon'
import SearchIcon from '@mui/icons-material/Search';


const AppBarDesktop = ({match}) => {
  return (
    <>
        <AppBarContainer>
            <AppBarHeader > MyTask</AppBarHeader>
            <MyList type="row">
               <ListItemText primary="Home" />
               <ListItemText primary="Product" />
               <ListItemText primary="Contact-Us" />
               <ListItemText primary="Categories" />
               <ListItemButton>
                <ListItemIcon >
                  <SearchIcon />
                </ListItemIcon>
               </ListItemButton>
            </MyList>
            <ActionIcon match = {match} />
        </AppBarContainer>
    </>
  )
}

export default AppBarDesktop