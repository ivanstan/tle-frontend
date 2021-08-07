import React from "react";
import { Chip, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { Input } from "@material-ui/icons";

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
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name: string, personName: string[], theme: any) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

class SatelliteMultiSelect extends React.Component<any, any> {

  handleSatelliteChange = () => {

  }

  render() {
    return <FormControl>
      <InputLabel id="demo-mutiple-chip-label">Chip</InputLabel>
      <Select
        labelId="demo-mutiple-chip-label"
        id="demo-mutiple-chip"
        multiple
        value={null}
        onChange={this.handleSatelliteChange}
        input={<Input id="select-multiple-chip"/>}
        renderValue={(selected) => (
          <div>
            {(selected as string[]).map((value) => (
              <Chip key={value} label={value}/>
            ))}
          </div>
        )}
        MenuProps={MenuProps}
      >
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>;
  }
}

export default SatelliteMultiSelect
