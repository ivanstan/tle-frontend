import React from "react";
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { Drawer, IconButton, InputAdornment, MenuItem, Select, TextField } from '@material-ui/core';
import { TleProvider } from "tle-client";
import { If } from "react-if";
import { TleBrowser } from "../components/TleBrowser";
import styled from "styled-components";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SearchIcon from '@material-ui/icons/Search';

const Toolbar = styled.div`
  padding: 10px 0;
`;

const DrawerHeader = styled.div`
  padding: 20px;
`;

export const RETROGRADE = 'retrograde'
export const POSIGRADE = 'posigrade'

const formatTime = (seconds: number) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.round(seconds % 60);
  return [
    h,
    m > 9 ? m : (h ? '0' + m : m || '0'),
    s > 9 ? s : '0' + s
  ].filter(Boolean).join(':');
};

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    type: 'string',
    width: 250,
    disableColumnMenu: true,
  },
  {
    field: 'inclination',
    headerName: 'Inclination',
    type: 'float',
    width: 250,
    sortable: true,
    disableColumnMenu: true,
    filterable: true,
    valueGetter: (params) => {
      return params.row.extra.inclination;
    }
  },
  {
    field: 'eccentricity',
    headerName: 'Eccentricity',
    type: 'float',
    width: 250,
    valueGetter: (params) => {
      return params.row.extra.eccentricity;
    },
    disableColumnMenu: true,
    sortable: true
  },
  {
    field: 'period',
    headerName: 'Period',
    type: 'string',
    width: 250,
    valueGetter: (params) => {
      return formatTime(params.row.extra.period);
    },
    disableColumnMenu: true,
    sortable: true
  },
];

const TleBrowserWrapper = styled.div`
  padding: 20px;
`;

export class Browse extends React.Component<any, any> {

  private static URL: string = "https://tle.ivanstanojevic.me";

  private provider: TleProvider;

  constructor(props: any) {
    super(props);

    this.provider = new TleProvider();
  }

  public readonly state: any = {
    data: [],
    total: 0,
    loading: true,
    parameters: {
      extra: 1,
    },
    open: false,
    current: null,
  };

  componentDidMount() {
    this.collection();
  }

  public async collection(): Promise<any[]> {

    this.setState({
      loading: true,
    });

    let url: string = Browse.URL + '/api/tle';

    const response = await fetch(url + '?' + new URLSearchParams(this.state.parameters).toString());
    const data: any = await response.json();

    const result: any[] = [];

    if (result.hasOwnProperty('member')) {
      return result;
    }

    this.setState({
      data: data.member,
      total: data.totalItems,
      loading: false,
    });

    return data.member;
  }

  handlePageChange = (event: any) => {
    let parameters: any = this.state.parameters;

    parameters['page-size'] = event.pageSize;

    if (event.page > 0) {
      parameters['page'] = event.page;
    }

    this.setState({ parameters: parameters }, this.collection);
  };

  handleSortModelChange = (event: any) => {
    let parameters: any = this.state.parameters;

    if (!event.sortModel.hasOwnProperty(0)) {
      return;
    }

    parameters['sort'] = event.sortModel[0].field;
    parameters['sort-dir'] = event.sortModel[0].sort;

    this.setState({ parameters: parameters }, this.collection);
  };

  handleModelSelectChange = (event: any) => {
    this.provider.get(event.selectionModel[0]).then(current => this.setState({ current: current }));

    this.setState({
      open: true,
    })
  }

  toggleDrawer = () => {
    this.setState({
      open: !this.state.open
    })
  };

  handleSearchChange = (event: any) => {
    let value = event.target.value.trim();

    if (value !== '') {
      let parameters: any = this.state.parameters;

      parameters['search'] = value;

      this.setState({ parameters: parameters }, this.collection);
    }
  }

  handleInclinationFilter = (event: any): void => {
    let value = event.target.value.trim();

    let parameters: any = this.state.parameters;

    if (value === RETROGRADE) {
      parameters['inclination[gt]'] = 90
      delete parameters['inclination[lt]']
    }

    if (value === POSIGRADE) {
      parameters['inclination[lt]'] = 90
      delete parameters['inclination[gt]']
    }

    if (value === '') {
      delete parameters['inclination[lt]']
      delete parameters['inclination[gt]']
    }

    this.setState({ parameters: parameters }, this.collection)
  };

  render() {
    return (
      <div style={{ height: 'calc(100% - 144px)', padding: 5 }}>
        <Toolbar>
          <TextField
            label="Search..."
            variant="filled"
            onChange={this.handleSearchChange}
            style={{ width: 245 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon/>
                </InputAdornment>
              ),
            }}
          />

          <Select style={{ width: 245, marginLeft: 10 }} variant="filled" onChange={this.handleInclinationFilter}>
            <MenuItem value={''}>
              -
            </MenuItem>
            <MenuItem value={RETROGRADE}>
              Retrograde
            </MenuItem>
            <MenuItem value={POSIGRADE}>
              Posigrade
            </MenuItem>
          </Select>
        </Toolbar>

        <DataGrid
          pagination rows={this.state.data}
          loading={this.state.loading}
          columns={columns}
          pageSize={20}
          getRowId={(row) => row.satelliteId}
          rowHeight={52}
          rowCount={this.state.total}
          columnBuffer={8}
          density={"standard"}
          onPageChange={this.handlePageChange}
          onSortModelChange={this.handleSortModelChange}
          paginationMode={'server'}
          disableColumnMenu={false}
          onSelectionModelChange={this.handleModelSelectChange}
          sortingMode={'server'}
          sortingOrder={['desc', 'asc']}
          disableColumnSelector={true}
        />

        <Drawer
          variant="persistent"
          anchor={'right'}
          open={this.state.open}
          onClose={this.toggleDrawer}
          BackdropProps={{ invisible: true }}
        >
          <DrawerHeader>
            <IconButton onClick={this.toggleDrawer}>
              <ArrowForwardIosIcon/>
            </IconButton>
          </DrawerHeader>

          <If condition={this.state.current}>
            <TleBrowserWrapper>
              <TleBrowser data={this.state.current}/>
            </TleBrowserWrapper>
          </If>
        </Drawer>
      </div>
    );
  }
}
