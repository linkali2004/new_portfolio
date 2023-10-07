import { Box, Typography , Button, Card, CardContent, CardActions } from "@mui/material";

export default function About() {
  return (
    <Box className = "wow fadeIn" id  ="about" sx = {{width:"100%" , backgroundColor:"#2b2f4b" , position:"relative" , zIndex:1 , paddingBottom:"20px"}}>
        <Box sx = {{display:"flex" , justifyContent:"space-between" , padding:"40px"}}>
        <Typography variant = "h4" sx={{color:"white" , fontSize:{xs:'26px'} , fontFamily:"Ubuntu"}}>ABOUT ME</Typography>
        <Button variant = "contained" size = "small" sx={{color:"#fff" , fontFamily:"Ubuntu",borderRadius:"6px" , paddingLeft:"25px",paddingRight:"25px",background:"#2b2f4b",boxShadow:"0px 5px 15px rgba(0,0,0,0.35)"}}>Hire Me</Button>
        </Box>
        <Card sx={{ maxWidth:"100vh"  , margin:"auto" , background:"#2b2f4b" , boxShadow:"0 5px 15px rgba(0,0,0,0.35)" , color:"#fff" , padding:"5px"}}>
      <CardContent>
        <Typography variant = "h4" sx={{fontSize:{xs:"20px" , fontWeight:"bold"} ,fontFamily:"Ubuntu"}}>My Name Is Shrey Varad Dwivedi</Typography>
        <br></br>
        <Typography variant = "body1" sx={{fontSize:{xs:"16px"}}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
      </CardContent>
      <CardActions>
        <Button variant = "contained" size="small" sx = {{backgroundColor:"#2b2f4b" , ":hover":{background:"#2b2f4b"}}}>Learn More</Button>
      </CardActions>
    </Card>
    </Box>
  )
}
