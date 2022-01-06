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
    headerName: 'Image',
    width: 150,
    editable: true,
    renderCell: (params) => <img src={params.value} alt='PLAKAT' />, // renderCell will render the component
  },
  {
    field: 'movieName',
    headerName: 'NAZWA FILMU',
    width: 250,
    //editable: true,
  },
  {
    field: 'datePremiere',
    headerName: 'DATA PREMIERY',
    width: 200,
    //editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    //editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.movieName || ''} ${params.row.datePremiere || ''}`,
  },
];

const rows = [
  { id: 1, datePremiere: 'Snow', movieName: 'OSTATNI SAMURAJ', image: {img} },
  { id: 2, datePremiere: 'Lannister', movieName: 'OJCIEC CHRZESTNY', age: 42 },
  { id: 3, datePremiere: 'Lannister', movieName: 'MIŚ', age: 45 },
  { id: 4, datePremiere: 'Stark', movieName: 'POTOP', age: 16 },
  { id: 5, datePremiere: 'Targaryen', movieName: 'WYSPA PSÓW', age: null },
];

export default function DataGridDemo() {
  return (
    <div className='ranking' style={rankingStyle}>
        <br></br>
        RANKING NAJLEPSZYCH FILMÓW
        <br></br>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        //checkboxSelection
        disableSelectionOnClick
        style={{fontWeight: 'bold',fontSize: '20px'}}
      />
    </div>
  );
}
