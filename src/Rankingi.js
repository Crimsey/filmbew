import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import img from "./static/images/samuraj.jpg";

const rankingStyle ={
  height: 600, 
  width: 1000, 
  //display: 'table-cell', 
  textAlign: 'center', 
  verticalAlign: 'middle',
  //padding: '30px',
  //paddingLeft: '350px',
  margin: 'auto',
  fontWeight: 'bold'
};

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'image',
    headerName: 'PLAKAT',
    width: 150,
    border: 3,
    //editable: true,
    generateData: () => {},
    renderCell: (params) => <img src={params.image} alt={params.image} />, // renderCell will render the component
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
debugger;
const rows = [
  { id: 1, datePremiere: '2003-11-12', movieName: 'OSTATNI SAMURAJ', genre: 'historyczny', rate: '4,5/5', directorName: 'E. Zwick', image: './static/images/samuraj.jpg'  },
  { id: 2, datePremiere: '1972-03-15', movieName: 'OJCIEC CHRZESTNY', genre: 'gangsterski', rate: '5/5',directorName: 'F.F. Coppola' },
  { id: 3, datePremiere: '1981-05-04', movieName: 'MIŚ', genre: 'komedia', rate: '5/5', directorName: 'S. Bareja' },
  { id: 4, datePremiere: '1974-09-02', movieName: 'POTOP', genre: 'historyczny', rate: '5/5',directorName: 'J. Hoffman' },
  { id: 5, datePremiere: '2018-02-15', movieName: 'WYSPA PSÓW', genre: 'animowany', rate: '3,5/5',directorName: 'W. Anderson' },
];

export default function DataGridDemo() {
  debugger;
  return (
    <div className='ranking' style={rankingStyle}>
        <br></br>
        RANKING NAJLEPSZYCH FILMÓW
        <br></br>
      <DataGrid
        rows={rows}
        columns={columns}
        pgenreSize={10}
        rowsPerPgenreOptions={[5]}
        //checkboxSelection
        disableSelectionOnClick
        style={{fontWeight: 'bold',fontSize: '20px',  boxSizing: 'border-box'}}
      />
    </div>
  );
}
