import React from 'react'
import {Grid2 as Grid} from '@mui/material'; 

function Section({children}) {
  return (
    
        <Grid 
            container
            spacing= {2}
            width= {"99%"}
            sx= {{display: 'flex', border: "1px solid red"}}
        >
            {children}
        </Grid>
    
  )
}

export default Section