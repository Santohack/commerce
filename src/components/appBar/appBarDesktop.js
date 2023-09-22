import React from 'react'
import { AppBarContainer, AppBarHeader, MyList } from '../../styles/appBar'
import { ListItemText } from '@mui/material'


const AppBarDesktop = () => {
  return (
    <>
        <AppBarContainer>
            <AppBarHeader > MyTask</AppBarHeader>
            <MyList type="row">
               <ListItemText primary="Home" />
               <ListItemText primary="Product" />
               <ListItemText primary="Contact-Us" />
               <ListItemText primary="Categories" />
            </MyList>
        </AppBarContainer>
    </>
  )
}

export default AppBarDesktop