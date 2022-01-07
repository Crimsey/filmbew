import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <table>
                <tr>
                    <td>
                        <FormControl sx={{ m: 1, minWidth: 200 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Rok premiery</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={age}
                                onChange={handleChange}
                                autoWidth
                                label="Rok"
                            >
                                <MenuItem value={10}>2021</MenuItem>
                                <MenuItem value={21}>2020</MenuItem>
                                <MenuItem value={22}>2019</MenuItem>
                            </Select>
                        </FormControl>
                    </td>
                </tr>
            </table>
        </div>
    );
}
