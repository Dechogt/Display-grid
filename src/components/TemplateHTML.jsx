import React from 'react'
import { Grid2 as Grid } from '@mui/material'

function TemplateHTML() {
  return (
    <>
        <Grid
            container
            spacing={1}
            sx={{width:'99%', bgcolor:'whitesmoke', border:'2px solid red', marginTop:'20px', alignContent:'center'}}
        >
            <Grid
                sx={{width:'99%', bgcolor:'blue', border:'1px solid black', fontFamily:'insaniburger', fontSize:'16px', color:'white', fontWeight: 'bolder', display:'flex', justifyContent:'center', alignItems:'center'}}
            >
                <p>{"<header>"} </p>
            </Grid>

            <Grid
                sx={{width:'99%', bgcolor:'gray', border:'1px solid black', fontFamily:'insaniburger', fontSize:'16px', color:'white', fontWeight: 'bolder', display:'flex', justifyContent:'center', alignItems:'center'}}
            >
                <p>{"<navbar>"} </p>
            </Grid>

            <Grid
                container
                sx={{width:'99%', height:'200px'}}
            >
                <Grid
                    sx={{width:'68%', bgcolor:'gray', border:'1px solid black', fontFamily:'insaniburger', fontSize:'16px', color:'white', fontWeight: 'bolder', display:'flex', justifyContent:'center', alignItems:'center'}}
                >
                    <Grid
                        sx={{width:'99%', bgcolor:'gray', border:'1px solid black', fontFamily:'insaniburger', fontSize:'16px', color:'white', fontWeight: 'bolder', display:'flex', justifyContent:'center', alignItems:'center'}}
                    >
                        <p>{"<section 1>"} </p>
                    </Grid>

                    <Grid
                        sx={{width:'99%', bgcolor:'gray', border:'1px solid black', fontFamily:'insaniburger', fontSize:'16px', color:'white', fontWeight: 'bolder', display:'flex', justifyContent:'center', alignItems:'center'}}
                    >
                        <p>{"<section 2>"} </p>
                    </Grid>
                </Grid>
                <Grid
                    sx={{width:'30%', height:'99%', bgcolor:'#8d00ac', border:'1px solid black', fontFamily:'insaniburger', fontSize:'16px', color:'white', fontWeight: 'bolder', display:'flex', justifyContent:'center', alignItems:'center'}}
                >
                    <p>{"<aside>"} </p>
                </Grid>
            </Grid>

            <Grid
                sx={{width:'99%', bgcolor:'brown', border:'1px solid black', fontFamily:'insaniburger', fontSize:'16px', color:'white', fontWeight: 'bolder', display:'flex', justifyContent:'center', alignItems:'center'}}
            >
                <p>{"<footer>"} </p>
            </Grid>

        </Grid>
    </>
  )
}

export default TemplateHTML