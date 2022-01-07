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
                            <InputLabel id="demo-simple-select-autowidth-label">Kraj pochodzenia</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={age}
                                onChange={handleChange}
                                autoWidth
                                label="Kraj"
                            >
                                <MenuItem value={10}>Polska</MenuItem>
                                <MenuItem value={21}>Stany Zjednoczone</MenuItem>
                                <MenuItem value={22}>Francja</MenuItem>
                            </Select>
                        </FormControl>
                    </td>
                </tr>
            </table>
        </div>
    );
}
