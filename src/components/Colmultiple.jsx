import React from 'react';
import { Grid2 as Grid} from '@mui/material';

function ColMu({x,y}) {
    
  return (
    <>
        {
        !!x && <Grid 
            size={y}
            sx= {{bgcolor:'black', border:'3px solid red', height: '50px', color: 'white', paddingLeft: '10px'}}
        >
            <p>{x}</p>
        </Grid> 
        }
    </>
  )
}

export default ColMu