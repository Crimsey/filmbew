import react from "react";
import Grid from "@mui/material/Grid";
import Dumbledore from "./static/images/tajemnice_Dumbledorea.jpg";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Typography } from "@mui/material";
import { border, borderColor } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';
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
    borderColor: 'black',
    width: '400px',
    height: '500px'
}
const btnstyle={
    width:'50%',
    fontsize: 5
 }

export default function Fantastyczne_zwierzaki() {
    const [value, setValue] = react.useState(0); //user rating stuff
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={4}>
                    <Box container sx={{ display: 'grid', ml: 3 }}>
                        <img src={Dumbledore} style={imgstyle} />
                        <Button variant="outlined" sx={{ mt: 2 }} style={{ width: '70%' }} >
                            Wyświetl plakaty
                        </Button>
                        <Button variant="outlined" sx={{ mt: 2 }} style={{ width: '70%' }}>
                            Obejrzyj zwiastuny
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <Typography variant="h2" style={titlestyle}>
                        FANTASTYCZNE ZWIERZĘTA: TAJEMNICE DUMBLEDORE'A
                    </Typography>
                    <Grid item xs={8}>
                        <Box sx={{ display: 'grid', gap: '1', gridTemplateColumns: 'repeat(2, 1fr)', textAlign: 'left', }}>
                            <Typography variant="h5" style={textstyle}>
                                Rok produkcji
                            </Typography>
                            <Typography variant="h5" style={secondtextstyle}>
                                2022
                            </Typography>
                            <Typography variant="h5" style={textstyle}>
                                Tytył Oryginalny
                            </Typography>
                            <Typography variant="h5" style={secondtextstyle}>
                                Fantastic Beasts: The Secrets of Dubledore
                            </Typography>
                            
                            <Typography variant="h5" style={textstyle}>
                                Widzowie oceniają
                            </Typography>
                            <Rating name="viewersRate" value={0} precision={0.5} readOnly size="large">
                            
                            </Rating>                            
                            <Typography variant="h5" style={textstyle}>
                                Twoja ocena
                            </Typography>
                            <Rating name="viewersRate" value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                precision={0.5} size="large">
                            </Rating>
                            <p></p>
                            <Button onClick={(event, newValue) => {
                                setValue(0);
                            }} variant="outlined"  style={btnstyle} size="small" startIcon={<DeleteIcon/>} >Usuń ocenę</Button>
                            <Typography variant="h5" style={textstyle}>
                                Scenariusz
                            </Typography>
                            <Typography variant="h5" style={secondtextstyle}>
                                J.K Rowling / Steve Kloves 
                            </Typography>
                            <Typography variant="h5" style={textstyle}>
                                Reżyseria
                            </Typography>
                            <Typography variant="h5" style={secondtextstyle}>
                                David Yates
                            </Typography>
                            <Typography variant="h5" style={textstyle}>
                                Gatunek
                            </Typography>
                            <Typography variant="h5" style={secondtextstyle}>
                                Familijny / Fantasy / Przygodowy
                            </Typography>
                            <Typography variant="h5" style={textstyle}>
                                Produkcja
                            </Typography>
                            <Typography variant="h5" style={secondtextstyle}>
                                USA / Wielka Brytania
                            </Typography>
                            <Typography variant="h5" style={textstyle}>
                                Premiera
                            </Typography>
                            <Typography variant="h5" style={secondtextstyle}>
                                7 kwietnia 2022 (Polska)
                            </Typography>
                            <Typography style={{color: 'white'}}> ------------------------</Typography>
                
                <Typography style={{color: 'white'}}> ------------------------</Typography>
                <Typography style={{color: 'white'}}> ------------------------</Typography>
                
                <Typography style={{color: 'white'}}> ------------------------</Typography>
              <Typography variant="h5" style={textstyle} >Recenzje użytkowników (6)</Typography>
                <Button variant="outlined" size="small" style={btnstyle} >dodaj recenzję</Button>
                        </Box>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    );
}