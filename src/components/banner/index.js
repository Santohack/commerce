import { Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from '../../styles/banner';

const Banner = () => {
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
      <BannerContainer>
      <BannerImage src="/images/banner/banner.png" />
        <BannerContent>
          <Typography variant='h6'>
            New style
          </Typography>
          <BannerTitle  variant='h2'>
            Today Sale
          </BannerTitle>
          <BannerDescription  variant='subtitle1'>
            Today sale for new style
          </BannerDescription>
        </BannerContent>
      </BannerContainer>
    </>
  )
}

export default Banner