import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import img from "./static/images/samuraj.jpg";
import stary from "./static/images/ojciec.jpg";
import bareja from "./static/images/mis.jpg";
import szwed from "./static/images/potop.jpg";
import piesel from "./static/images/wyspa_psow.jpg";
import dris from "./static/images/nietykalni.jpg";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import reklama_lewa from "./static/images/reklama_lewa.jpg";
import reklama_prawa from "./static/images/reklama_prawa.jpg";
import Grid from '@mui/material/Grid';

const titlestyle = {

  //textAlign: 'left',
  verticalAlign: 'middle',
  margin: 'auto',
  fontWeight: 900,
  //marginBottom: 16
};

const filtrstyle = {
  backgroundColor: '#000000',
  borderRadius: '5px',
  border: '1px solid #566963',
  display: 'inline-block',
  cursor: 'pointer',
  color: '#fcfcfc',
  //font-family:Arial;
  fontSize: '15px',
  fontWeight: 900,
  padding: '11px 23px',
  textDecoration: 'none'
};

const rankingStyle = {
  height: 890,
  // width: 1200,
  //display: 'table-cell', 
  // textAlign: 'center',
  // verticalAlign: 'middle',
  //padding: '30px',
  paddingLeft: '50px',
  // margin: 'auto',
  fontWeight: 'bold',
};

const ad1 = {
  // height: 890,
  // width: 1200,
  //display: 'table-cell', 
  // textAlign: 'center',
  // verticalAlign: 'middle',
  // //padding: '30px',
  // //paddingLeft: '350px',
  // margin: 'auto',
  // fontWeight: 'bold'
  marginTop: '30px',
  
};

const ad2 = {
  // height: 890,
  // width: 1200,
  //display: 'table-cell', 
  // textAlign: 'center',
  // verticalAlign: 'middle',
  //padding: '30px',
  //paddingLeft: '350px',
  // margin: 'auto',
  // fontWeight: 'bold'
  marginTop: '30px'

};

const columns = [
  { field: 'id', headerName: 'POZYCJA', width: 130 },
  {
    field: 'image',
    headerName: 'PLAKAT',
    width: 150,
    border: 3,
    //editable: true,
    // generateData: () => {},
    renderCell: (params) => <img src={params.value} style={{ width: '150px', height: '160px' }} alt="" />, // renderCell will render the component
  },
  {
    field: 'movieName',
    headerName: 'NAZWA FILMU',
    width: 250,
    //editable: true,
  },
  {
    field: 'directorName',
    headerName: 'REŻYSERIA',
    width: 150,
    //editable: true,
  },
  {
    field: 'datePremiere',
    headerName: 'DATA PREMIERY',
    width: 200,
    //editable: true,
  },
  {
    field: 'genre',
    headerName: 'GATUNEK',
    type: 'number',
    width: 150,
    //editable: true,
  },
  {
    field: 'rate',
    headerName: 'OCENA',
    description: 'Ocena filmu',
    width: 160,
  },
];
//debugger;
const rows = [
  { id: 1, datePremiere: '2003-11-12', movieName: 'OSTATNI SAMURAJ', genre: 'historyczny', rate: '4,5/5', directorName: 'E. Zwick', image: img },
  { id: 2, datePremiere: '2011-09-23', movieName: 'NIETYKALNI', genre: 'dramat', rate: '5/5', directorName: 'O. Nakache', image: dris },
  { id: 3, datePremiere: '1972-03-15', movieName: 'OJCIEC CHRZESTNY', genre: 'gangsterski', rate: '5/5', directorName: 'F.F. Coppola', image: stary },
  { id: 4, datePremiere: '1981-05-04', movieName: 'MIŚ', genre: 'komedia', rate: '5/5', directorName: 'S. Bareja', image: bareja },
  { id: 5, datePremiere: '1974-09-02', movieName: 'POTOP', genre: 'historyczny', rate: '5/5', directorName: 'J. Hoffman', image: szwed },
  { id: 6, datePremiere: '2018-02-15', movieName: 'WYSPA PSÓW', genre: 'animowany', rate: '3,5/5', directorName: 'W. Anderson', image: piesel },
];

export default function DataGridDemo() {
  return (
    <div className='ranking' style={rankingStyle}>
      <Grid container spacing={2}>
        <Grid item xs={2} style={{marginRight: '10px'}}>
          <div className='advertisement1'style={ad1}>
          <Typography variant="h5" > Reklama</Typography>
            <img src={reklama_lewa}  alt="" />
          </div>
        </Grid>
        <Grid item xs={7.5} style={{height: '1000px'}}>

          <br></br>
          <Typography variant='h4' style={titlestyle}  > RANKING NAJLEPSZYCH FILMÓW</Typography>
          <br></br>
          <Button variant="contained" size="small" style={filtrstyle} >Filtruj</Button>
          <DataGrid
            rows={rows}
            columns={columns}
            pgenreSize={10}
            rowsPerPgenreOptions={[5]}
            //checkboxSelection
            disableSelectionOnClick
            style={{ fontWeight: 'bold', fontSize: '20px', boxSizing: 'border-box' }}
            rowHeight={150}
          />

        </Grid>
        <Grid item xs={1}>
          <div className='advertisement2' style={ad2}>
          <Typography variant="h5" style={{marginLeft:'100px'}} > Reklama</Typography>
            <img src={reklama_prawa}  alt="" />
          </div>
        </Grid>
      </Grid >
    </div>



  );
}
