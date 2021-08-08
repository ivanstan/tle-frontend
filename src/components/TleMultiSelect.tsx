import React, { ChangeEvent } from "react"
import TextField from "@material-ui/core/TextField"
import CircularProgress from "@material-ui/core/CircularProgress"
import Autocomplete from "@material-ui/lab/Autocomplete"
import { Tle, TleProvider } from "tle-client"
import { TleSelect, TleSelectPropsInterface } from "./TleSelect";
import { Checkbox } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small"/>;
const checkedIcon = <CheckBoxIcon fontSize="small"/>;

export default class TleMultiSelect extends TleSelect {

  render() {
    const { open, options, value, inputValue, loading } = this.state
    const { onChange } = this.props

    let width = (window.innerWidth < 500) ? 'auto' : 400

    return (
      <Autocomplete
        multiple
        disableCloseOnSelect
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.name}
          </React.Fragment>
        )}
        onChange={(event, newValue: any) => {
          this.setState({ value: newValue })

          if (onChange !== null && typeof onChange === 'function') {
            onChange(newValue)
          }
        }}
        style={{ width: width, margin: 'auto' }}
        open={open}
        onOpen={() => {
          if (options.length === 0) {
            this.query()
          }
          this.setState({ open: true })
        }}
        onClose={() => {
          this.setState({ open: false })
        }}
        getOptionSelected={(option: any, value) => option.name === value.name}
        getOptionLabel={(option: any) => option.name || '-'}
        options={options}
        loading={loading}
        noOptionsText={"No results found"}
        renderInput={(params) => (
          <TextField
            {...params}
            value={inputValue}
            onChange={(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
              this.setState({ inputValue: event.target.value, loading: true }, () => this.query(event.target.value))
            }}
            label="Search satellites"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? <CircularProgress color="inherit" size={20}/> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    );
  }
}
