import React from 'react'
import Box from '@mui/system/Box'
import Switch from '@mui/material/Switch';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Container from '@mui/system/Container';
import Grid from '@mui/material/Grid';




const MaterialLayout = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <>
    <Box component ="h2" sx={{backgroundColor:"red",}}>MaterialLayout</Box>
    <Box component = "section" sx={{border:"2px solid green", height:100, 
    backgroundColor:"primary.main"}}>sample Section Content</Box>
    
    <Box component="form" color="purple">
<button>Submit</button>
<h3>Hello Material Ui</h3>
   </Box>
    <Switch {...label} defaultChecked />


    <Stack spacing={1}>
      <Rating name="size-small" defaultValue={2} size="small" />
      <Rating name="size-medium" defaultValue={2} />
      <Rating name="size-large" defaultValue={2} size="large" />
    </Stack>

    <Container maxWidth="sm" color="red" sx={{ backgroundColor: "aqua" , border:"2px solid red",}}>
    <Box>Div Container</Box>
<Box component="p">Paragraph 1</Box>
<Box component = "h1">Hello Material UI</Box>
    </Container>
<br/>
    <Grid container spacing={0} rowSpacing = {0} columnSpacing = {1} direction = "row" >
    <Grid item > <Box content ="h3" sx={{ backgroundColor: "aqua" , border:"2px solid red", width:500}}>Sample Content 1</Box></Grid>
    <Grid item > <Box content ="h3" sx={{ backgroundColor: "green" , border:"2px solid red",}}>Sample Content 2</Box></Grid>
    <Grid item > <Box content ="h3" sx={{ backgroundColor: "blue" , border:"2px solid red",}}>Sample Content 3</Box></Grid>
    <Grid item > <Box content ="h3" sx={{ backgroundColor: "red" , border:"2px solid red",}}>Sample Content 4</Box></Grid>
    <Grid item > <Box content ="h3" sx={{ backgroundColor: "yellow" , border:"2px solid red",}}>Sample Content 5</Box></Grid>
    <Grid item > <Box content ="h3" sx={{ backgroundColor: "orange" , border:"2px solid red",}}>Sample Content 6</Box></Grid>
    <Grid item > <Box content ="h3" sx={{ backgroundColor: "pink" , border:"2px solid red",}}>Sample Content 7</Box></Grid>
    <Grid item > <Box content ="h3" sx={{ backgroundColor: "crimson" , border:"2px solid red",}}>Sample Content 8</Box></Grid>
</Grid>

<Grid Container>
<Grid item><Box content = "h1">Hello Material UI restaurent Billig sofware And website Development</Box></Grid>
</Grid>

<Stack direction="row" flexWrap="wrap" justifyContent="spaceBetween" >
<Grid sx = {{ width:"20%", padding:10 , backgroundColor: "aqua"}}>Stack Sample 1</Grid>
<Grid sx = {{  width:"20%",padding:10 , backgroundColor: "blue"}}>Stack Sample 2</Grid>
<Grid sx = {{ width:"20%",padding:10 ,backgroundColor: "green"}}>Stack Sample 3</Grid>
<Grid sx = {{ width:"20%",padding:10 ,backgroundColor: "yellow"}}>Stack Sample 4</Grid>
<Grid sx = {{ width:"20%",padding:10 ,backgroundColor: "orange"}}>Stack Sample 5</Grid>
<Grid sx = {{ width:"20%",padding:10 ,backgroundColor: "pink"}}>Stack Sample 6</Grid>
<Grid sx = {{ width:"20%",padding:10 ,backgroundColor: "red"}}>Stack Sample 7</Grid>
<Grid sx = {{ width:"20%",padding:10 ,backgroundColor: "navy"}}>Stack Sample 8</Grid>
</Stack>

    </>
  )
}

export default MaterialLayout