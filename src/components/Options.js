import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Options = (props) => {
  const [item, setItem] = React.useState('burgers');
  const {onChange} = props;

  const handleChange = (event) => {
    onChange(event.target.value)
    setItem(event.target.value);
  };

  return (
    <div style={{flexDirection:'flex-end'}}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Item</InputLabel>
        <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={item}
            label="Item"
            onChange={handleChange}
        >
           
            <MenuItem value={'burgers'}>Burgers</MenuItem>
            <MenuItem value={'breads'}>Breads</MenuItem>
            <MenuItem value={'pizzas'}>Pizzas</MenuItem>
        </Select>
        </FormControl>
    </div>
  );
}

export default Options;