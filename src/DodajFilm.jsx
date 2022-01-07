import React from "react";
import TextField from '@mui/material/TextField';
import WybierakKraju from "./wybieraki/WybierakKraju";
import WybierakRoku from "./wybieraki/WybierakRoku";
import WybierakTypu from "./wybieraki/WybierakTypu";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const formularzStyle = {
  height: 600,
  width: 1000,
  //display: 'table-cell', 
  textAlign: 'left',
  verticalAlign: 'middle',
  paddingTop: '20px',
  //padding: '30px',
  //paddingLeft: '350px',
  margin: 'auto',
  fontWeight: 'bold'
};

function Dodajfilm() {
  return (

    <div className="Application">
      <h1>DODAWANIE FILMU</h1> 
      Wypełnij formularz, by dodać nowy film
      <Box sx={{ flexGrow: 1 }} >
        <Grid container spacing={2} columns={16}>
          <Grid item xs={10} style={{ paddingLeft: '250px' }}>
            <div className='formularz' style={formularzStyle}  >
              <table>
                <tr>
                  <td>
                    <label>Skąd pochodzi tytuł:</label>
                  </td>
                  <td><WybierakKraju /></td>
                </tr>
                <tr>
                  <td>
                    <label>Rodzaj filmu:</label>
                  </td>
                  <td>
                    <WybierakTypu />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Tytuł oryginalny:</label>
                  </td>
                  <td>
                    <TextField
                      required
                      id="outlined-required"
                      label="Pole wymagane"
                      style={{ width: 250, marginLeft: '10px' }}
                      placeholder="Tytuł w oryginalnym języku"
                    /></td>
                  <td><Button variant="contained">ZWERYFIKUJ</Button></td>
                </tr>
                <tr>
                  <td>
                    <label>Rok premiery:</label>
                  </td>
                  <td><WybierakRoku /></td>
                </tr>
                <tr>
                  <td>
                    <label>Źródła:</label>
                  </td>
                  <td>
                    <TextField
                      required
                      id="outlined"
                      label="Źródła"
                      style={{ width: 250, marginLeft: '10px' }}
                      placeholder="Linki do bibliografii"
                    /></td>
                  <td><Button variant="contained">USUŃ</Button></td>
                </tr>
                <tr>
                  <td></td>
                  <td><Button variant="contained" style={{marginLeft: '10px', marginTop: '5px'}}>DODAJ NOWE ŹRÓDŁO</Button></td>
                </tr>
                <tr>
                  <td>Komentarz osoby zgłaszającej:</td>
                  <td><textarea style={{marginLeft: '10px', marginTop: '5px'}}></textarea></td>
                </tr>
              </table>
              <Button variant="contained" style={{position: 'relative', left: '1010px', bottom: '45px'}}>DODAJ FILM</Button>
            </div>
          </Grid>
          <Grid item xs={6} style={{ paddingRight: '250px', paddingTop: '100px' }}>
            <label style={{ fontSize: '30px' }}>Zweryfikuj film w celu, potwierdzenia iż nie znajduje się już w bazie.</label>
          </Grid>
        </Grid>
      </Box>

    </div >
  );
}

export default Dodajfilm;
