import { Box, List, Typography, styled } from "@mui/material";
import "@fontsource/montez";
import { Colors } from "../theme";
import { red } from "@mui/material/colors";

//container

export const AppBarContainer = styled(Box)(()=>({
    justifyContent:'center',
    alignItems: 'center',
    display: 'flex',
    padding:'2px 4px',
    marginTop: '4',
   

}))


///header
export const AppBarHeader = styled(Typography)(()=>({
    flexGrow:1,
    justifyContent:'center',
    padding: '5px',
    fontFamily:'Montez',
    fontSize:'4em',
    color:Colors.secondary

}))


export const MyList = styled(List)(({type})=>({
    display:type === 'row'? 'flex': 'block',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow:3


}))

  export const ActionContainerMobile = styled(Box)(()=>({
   display:'flex',
   background:Colors.shaft,
   position:'fixed',
   bottom:0,
   left:0,
   zIndex:99,
   width:'100%',
   alignItems:'center',
   borderTop: `1px solid ${Colors.border}`

  }))
export const ActionContainerDesktop = styled(Box)(()=>({
    flexGrow:0
}))