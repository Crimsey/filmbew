import react from "react";
import Grid from "@mui/material/Grid";
import img from "./static/images/nietykalni.jpg";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Typography } from "@mui/material";
import { border, borderColor } from "@mui/system";

const titlestyle = {
 
    textAlign: 'left',
    verticalAlign: 'middle',
    margin: 'auto',
    fontWeight: 900,
    marginBottom: 16
  };
const textstyle = {
 
    textAlign: 'left',
    verticalAlign: 'middle',
    fontWeight: 600,
    marginBottom: 8
  };
 
  const secondtextstyle = {
 
    textAlign: 'left',
    verticalAlign: 'middle',
    marginBottom: 8
  };
  const imgstyle = {
      display: 'flex',
      border: '2px solid black',
      borderColor: 'black'
  }

  export default function Nietykalni() {
    const [value, setValue] = react.useState(0); //user rating stuff
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{ mt: 2}}>
          <Grid item  xs={4}>
          <Box  container sx={{ display: 'grid', ml:3 }}>
                <img src={img} style={imgstyle} />
                <Button variant="outlined" sx={{mt:2}} >
                   Wyświetl plakaty
                </Button>
                <Button variant="outlined" sx={{mt:2}} >
                   Obejrzyj zwiastuny
                </Button>
            </Box>
          </Grid>
          <Grid item xs={6} >
            <Typography variant="h2" style={titlestyle}>
                NIETYKALNI
            </Typography>
            <Grid item xs= {8}>
            <Box sx={{display: 'grid', gap:'1', gridTemplateColumns: 'repeat(2, 1fr)', textAlign: 'left',}}>  
                <Typography variant="h5" style={textstyle}>
                    Rok produkcji 
                </Typography>
                <Typography variant="h5" style={secondtextstyle}>
                    2011
                </Typography>
                <Typography variant="h5" style={textstyle}>
                    Tytył Oryginalny
                </Typography>
                <Typography variant="h5" style={secondtextstyle}>
                   Intouchables
                </Typography>
                <Typography variant="h5" style={textstyle}>
                    Boxoffice
                </Typography>
                <Typography variant="h5" style={secondtextstyle}>
                    426 588 510$ (świat)
                </Typography>
                <Typography variant="h5" style={textstyle}>
                    Widzowie oceniają
                </Typography>
                <Rating name="viewersRate" value={4.5} precision={0.5} readOnly size="large">

                </Rating>
                <Typography variant="h5" style={textstyle}>
                    Twoja ocena
                </Typography>
                <Rating name="viewersRate" value={value} 
                     onChange={(event, newValue) => {
                            setValue(newValue);}} 
                     precision={0.5} size="large">
                </Rating>
                <Typography variant="h5" style={textstyle}>
                    Scenariusz 
                </Typography>
                <Typography variant="h5" style={secondtextstyle}>
                    Olivier Nakache / Éric Toledano 
                </Typography>
                <Typography variant="h5" style={textstyle}>
                    Reżyseria 
                </Typography>
                <Typography variant="h5" style={secondtextstyle}>
                    Olivier Nakache / Éric Toledano 
                </Typography>
                <Typography variant="h5" style={textstyle}>
                    Gatunek 
                </Typography>
                <Typography variant="h5" style={secondtextstyle}>
                    Biograficzny / Dramat / Komedia
                </Typography>
                <Typography variant="h5" style={textstyle}>
                    Produkcja  
                </Typography>
                <Typography variant="h5" style={secondtextstyle}>
                    Francja
                </Typography>
                <Typography variant="h5" style={textstyle}>
                    Premiera
                </Typography>
                <Typography variant="h5" style={secondtextstyle}>
                    22 września 2011 (świat) 
                </Typography>
              </Box>
              </Grid>
          </Grid>
         
        </Grid>
      </Box>
    );
}

