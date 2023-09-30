import { Box, Typography, styled } from "@mui/material"
import { Colors } from "../theme"


export const BannerContainer = styled(Box)(({ theme }) => ({

    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '0 0 ',
    background: Colors.light_gray,
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))

export const BannerImage = styled('img')(({src,theme})=>({
    src : `url(${src})`,
    width:'430px',
    [theme.breakpoints.down('sm')]:{
        width:'320px',
        height:'300px',
    
    },
    [theme.breakpoints.down('md')]:{
        width:'320px'
    }

}))

export const BannerContent = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '32px',
    maxWidth: 420
}))


export const BannerTitle = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    justifyContent: 'center',
    fontSize: '73px',
    marginBottom:'20px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '43px'
    }


}))

export const BannerDescription = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    letterSpacing: 1.5,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]:{
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: '1.5em',
    }

}))