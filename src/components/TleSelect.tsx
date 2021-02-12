import React, { ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TleProvider } from "../Tle/TleProvider";
import { Tle } from "../Tle/Tle";


export interface TleSelectPropsInterface {
  value: Tle | null;
  onChange: Function
}

export class TleSelect extends React.Component<any, any> {

  private service: TleProvider;

  public readonly state = {
    open: false,
    loading: false,
    options: [],
    value: null,
    inputValue: null,
  };

  constructor(props: any) {
    super(props);

    this.state.value = props.value;

    this.service = new TleProvider();
  }

  public async query() {
    const { inputValue } = this.state;

    this.service.search(inputValue)
      .then(data => {
        this.setState({ options: data.hasOwnProperty('member') ? data['member'] : [], loading: false });
      })
      .catch(() => this.setState({ options: [], loading: false }));
  }

  render() {
    const { open, options, value, inputValue, loading } = this.state;
    const { onChange } = this.props;

    return <Autocomplete
      value={value}
      onChange={(event, newValue: any) => {
        this.setState({ value: newValue });

        if (onChange !== null && typeof onChange === 'function') {
          onChange(newValue);
        }
      }}
      style={{ width: 400, margin: 'auto' }}
      open={open}
      onOpen={() => {
        if (options.length === 0) {
          this.query();
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
            this.setState({ inputValue: event.target.value, loading: true }, this.query);
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
    />;
  }
}
