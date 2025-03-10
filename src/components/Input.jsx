import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../public/information.css';
import '../public/Input.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  '5年',
  '10年',
  '15年',
  '20年',
  '25年',
  '30年',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, selectedName, theme) {
  return {
    fontWeight:
      name === selectedName
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
  };
}

export default function SingleSelectChip() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState('');

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <div className="center-container">
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="demo-single-chip-label"  style={{ color: 'blue' }}>築年数</InputLabel>
        <Select
          labelId="demo-single-chip-label"
          id="demo-single-chip"
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-single-chip" label="Chip" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
