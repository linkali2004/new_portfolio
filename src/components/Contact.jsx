import { Box, Typography, Button } from "@mui/material";

export default function Contact() {
  return (
    <Box className = "wow fadeIn" sx = {{width:"100%" , backgroundColor:"#2b2f4b" , position:"relative" , zIndex:1 , paddingBottom:"20px" , boxShadow:"rgba(0,0,0,0.35)"}}>
        <Box sx = {{display:"flex" , justifyContent:"space-between" , padding:"40px"}}>
        <Typography variant = "h4" sx={{color:"white" , fontSize:{xs:'26px'} , fontFamily:"Ubuntu"}}>CONTACT</Typography>
        </Box>
        <Box sx = {{padding:"20px" , display:"flex" , justifyContent:"center" , gap:2 , flexDirection:"column" , alignItems:"center"}}>
            <Typography variant = "h3" sx={{color:"#fff" , fontFamily:"ubuntu"}}>Get In Touch</Typography>
            <Typography variant = "body2" sx={{color:"#fff"}}>I’m always looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you ASAP!</Typography>
            <Button component = "a" href = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=22je0919@iitism.ac.in" variant = "outlined" size = "small" sx={{color:"#fff" , fontFamily:"Ubuntu",borderRadius:"6px" , paddingLeft:"25px",paddingRight:"25px",background:"#2b2f4b",boxShadow:"0px 5px 15px rgba(0,0,0,0.35)"}}>Say Hello</Button>
        </Box>
    </Box>
  )
}
