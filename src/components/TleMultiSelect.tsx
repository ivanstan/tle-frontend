import React, { ChangeEvent } from "react"
import TextField from "@material-ui/core/TextField"
import CircularProgress from "@material-ui/core/CircularProgress"
import Autocomplete from "@material-ui/lab/Autocomplete"
import { TleSelect } from "./TleSelect";
import { Checkbox, Chip } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { If } from "react-if";

const icon = <CheckBoxOutlineBlankIcon fontSize="small"/>;
const checkedIcon = <CheckBoxIcon fontSize="small"/>;

export default class TleMultiSelect extends TleSelect {

  render() {
    const { open, options, value, inputValue, loading } = this.state
    const { onChange } = this.props

    let width = (window.innerWidth < 500) ? 'auto' : 400

    return (
      <Autocomplete
        size='small'
        multiple
        value={value}
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
        renderTags={(value, getTagProps) => {
          const newValue = [...value];

          let render = newValue.slice(0, 2);
          let left = newValue.splice(2, value.length)

          return <>
            {render.map((option, index) => (
              <Chip
                label={option.name}
                {...getTagProps({ index })}
              />
            ))}
            <If condition={value.length >= 2 && left.length > 0}>
              <Chip
                label={'+' + left.length}
              />
            </If>
          </>
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            value={inputValue}
            onChange={(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
              this.setState({ inputValue: event.target.value, loading: true }, () => this.query(event.target.value))
            }}
            label="Search satellites"
            variant="standard"
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
