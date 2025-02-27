import React from 'react';
import { Grid2 as Grid } from '@mui/material';

function Col({x,y}) {
  return (
    <>
        {
           !! x && <Grid 
            size={x}
            sx= {{bgcolor:'black', border:'3px solid red', height: '50px', color: 'white', paddingLeft: '10px'}}
        >
            <p>{x}</p>
        </Grid> 
        }
        {
           !! y && <Grid 
            size={y}
            sx= {{bgcolor:'black', border:'3px solid green', height: '50px', color: 'white', paddingLeft: '10px'}}
        >
            <p>{y}</p>
        </Grid>
        }
    </>
  )
}

export default Col