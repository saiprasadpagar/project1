import  React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Box from '@mui/material/Box';

const Material=()=>{
  return (
    <React.Fragment>
    <div><Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
      </IconButton>
      <PhotoCamera />
    </Stack></div>
    

<Box component= "button" sx={{border: '1px dashed grey' }}>
<button>Delete</button>
</Box>

<Box component="button"  variant="contained"sx={{ border: '1px dashed grey' }}>Save</Box>


    </React.Fragment>
    );
}

export default Material;



