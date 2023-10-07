import { Box, Typography , Button, Stack, Card, CardMedia, CardContent, CardActions } from "@mui/material";

export default function Services() {
  return (
    <Box className = "wow fadeIn data-wow-delay = 4s" sx = {{width:"100%" , backgroundColor:"#2b2f4b" , position:"relative" , zIndex:1 , paddingBottom:"20px"}}>
        <Box sx = {{display:"flex" , justifyContent:"space-between" , padding:"40px"}}>
        <Typography variant = "h4" sx={{color:"white" , fontSize:{xs:'26px'} , fontFamily:"Ubuntu"}}>SERVICES</Typography>
        <Button variant = "contained" size = "small" sx={{color:"#fff" , fontFamily:"Ubuntu",borderRadius:"6px" , paddingLeft:"25px",paddingRight:"25px",background:"#2b2f4b",boxShadow:"0px 5px 15px rgba(0,0,0,0.35)"}}>Know More</Button>
        </Box>
        <Box sx={{width:"100%" , display:"flex" , justifyContent:"center"}}>
        <Stack direction = {{xs:"column" , sm:"column" , md:"row" , lg:"row"}} spacing={2} sx ={{margin:"0 auto"}}>
        <Card  sx={{ maxWidth: 345 ,background:"#2b2f4b" , boxShadow:"0 5px 15px rgba(0,0,0,0.35)" , color:"#fff"}} >
        <CardMedia
        sx={{ height: 140 }}
        image="/top11.png"
        title="green iguana"
      />
          <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:"Ubuntu"}}>
          Web Development
        </Typography>
        <Typography variant="body2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant = "contained" size="small" sx = {{backgroundColor:"#2b2f4b" , ":hover":{background:"#2b2f4b"} , fontFamily:"Ubuntu"}}>Learn More</Button>
      </CardActions>
        </Card>

        <Card  sx={{ maxWidth: 345 , background:"#2b2f4b" , boxShadow:"0 5px 15px rgba(0,0,0,0.35)" , color:"#fff"}}>
        <CardMedia
        sx={{ height: 140 }}
        image="/What is UIUX Transformation and How Does it Benefit Businesses-04_0.jpg"
        title="green iguana"
      />
          <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:"Ubuntu"}}>
          UI / UX 
        </Typography>
        <Typography variant="body2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant = "contained" size="small" sx = {{backgroundColor:"#2b2f4b" , ":hover":{background:"#2b2f4b"},fontFamily:"Ubuntu"}}>Learn More</Button>
      </CardActions>
        </Card>

        <Card  sx={{ maxWidth: 345 ,background:"#2b2f4b" , boxShadow:"0 5px 15px rgba(0,0,0,0.35)" , color:"#fff"}}>
        <CardMedia
        sx={{ height: 140 }}
        image="/blockchain.jpg"
        title="green iguana"
      />
          <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:"Ubuntu"}}>
          Blockchain Development
        </Typography>
        <Typography variant="body2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant = "contained" size="small" sx = {{backgroundColor:"#2b2f4b" , ":hover":{background:"#2b2f4b"},fontFamily:"Ubuntu"}}>Learn More</Button>
      </CardActions>
        </Card>
      </Stack>
    </Box>
        </Box>
  )
}
