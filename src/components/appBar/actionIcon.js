import React from 'react'
import { ActionContainerDesktop, ActionContainerMobile, MyList } from '../../styles/appBar'
import { Divider, ListItemButton, ListItemIcon } from '@mui/material'
import { Favorite, Person, ShoppingCartOutlined } from '@mui/icons-material'
import { Colors } from '../../styles/theme'

const ActionIcon = ({match}) => {

    const Component = match ? ActionContainerMobile : ActionContainerDesktop
  return (
    <>
    <Component >

  
        <MyList type = "row">
            <ListItemButton 
            sx={{
                justifyContent: 'center',
                
            }}
            >
                <ListItemIcon 
                sx= {{
                    display: 'flex',
                    justifyContent: 'center',
                    color:match && Colors.secondary
                }}
                >
                    <ShoppingCartOutlined/>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation='vertical' flexItem />
            <ListItemButton
             sx={{
                justifyContent: 'center',
            }}
            >
                <ListItemIcon
                
                sx= {{
                    display: 'flex',
                    justifyContent: 'center',
                    color:match && Colors.secondary
                }}>
                    <Person />
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation='vertical' flexItem />
            <ListItemButton
             sx={{
                justifyContent: 'center',
            }}
            >
                <ListItemIcon
                 sx= {{
                    display: 'flex',
                    justifyContent: 'center',
                    color:match && Colors.secondary
                }}
                >
                  <Favorite />
                </ListItemIcon>
            </ListItemButton>
        </MyList>
        </Component>
    </>
  )
}

export default ActionIcon