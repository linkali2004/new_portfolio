import { Box, IconButton, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
  return (
    <Box className = "wow fadeIn data-wow-delay = 4s" sx = {{width:"100%" , backgroundColor:"#2b2f4b" , position:"relative" , zIndex:1 , display:"flex" , justifyContent:"space-evenly" , flexDirection:{sm:"column" ,xs :"column" , lg:"row" , alignItems:"center"}}}>
        <Typography variant = "caption" sx={{fontSize:"18px" , fontFamily:"ubuntu" , color:"white"}}>Made by Shrey varad dwivedi</Typography>
      <Box>
      <IconButton size = "small">
            <FacebookIcon sx={{color:"white"}}></FacebookIcon>
        </IconButton>
        <IconButton size = "small">
            <InstagramIcon sx={{color:"white"}}></InstagramIcon>
        </IconButton>
        <IconButton size = "small">
            <TwitterIcon sx={{color:"white"}}></TwitterIcon>
        </IconButton>
        <IconButton size = "small">
            <LinkedInIcon sx={{color:"white"}}></LinkedInIcon>
        </IconButton>
      </Box>
</Box>
  )
}
