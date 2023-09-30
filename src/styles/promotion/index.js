import { Box, Typography, styled } from "@mui/material";
import { Colors } from "../theme";
import "@fontsource/montez";
export const PromotionContainer = styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center',
    overflow: 'hidden',
    padding:'20px 0px 20px 0px',
    background:Colors.secondary,
    [theme.breakpoints.down('md')]:{
        padding:'40px 0px 40px 0px'
    }

}))
export const PromotionContent = styled(Box)(()=>({
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
}))

export const PromotionMessage = styled(Typography)(({theme})=>({

     fontFamily:'Montez',
     fontSize:'1.5em',
     alignItems:'center',
     justifyContent:'center',
     color:Colors.white,
     [theme.breakpoints.down('md')]:{
        fontSize:'2em'
     }
}))