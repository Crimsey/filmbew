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
                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Przeznaczony na platformę</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={age}
                                onChange={handleChange}
                                autoWidth
                                label="Rodzaj"
                            >
                                <MenuItem value={10}>kinowy</MenuItem>
                                <MenuItem value={21}>platforma streamingowa</MenuItem>
                                <MenuItem value={22}>telewizyjny</MenuItem>
                            </Select>
                        </FormControl>
                    </td>
                </tr>
            </table>
        </div>
    );
}
