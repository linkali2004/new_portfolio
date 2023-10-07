import { Box, Button, Typography } from "@mui/material";
import Particlebackground from "./Particlebackground";
export default function Header() {
    const styles_box = {position:"relative", zIndex:1 , color:"#fff", display:"flex" , flexDirection:"column" , width:"100%" , height:"100vh" , justifyContent:"center" , alignItems:"center"
,gap:"0.8rem"};
  return (
    <>
<Particlebackground sx={{position:"relative" , zIndex:0 ,width:"100%" , height:"100vh"}} className = "wow fadeIn data-wow-delay=10s"></Particlebackground>
<Box sx={styles_box} className = "wow fadeIn  data-wow-delay = 10s">
    <Typography variant = "h1" sx={{fontFamily:"Ubuntu" , fontSize:{xs:"45px" , lg:"5rem"}}}>Hello There</Typography>
    <Typography variant = "caption" sx={{fontSize:{xs:"18px" , lg:"1.5rem"} , textAlign:{xs:"center"}}}>I am shrey varad dwivedi , a web and blockchain developer</Typography>
    <Button variant = "contained" component = "a" href = "#about" size = "small" sx = {{backgroundColor:"#2b2f4b" , ":hover":{background:"#2b2f4b"} , marginTop:"55px"}}>Know More</Button>
</Box>
</>
  )
}
