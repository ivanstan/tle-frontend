import React from "react";
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { Drawer } from "@material-ui/core";
import { TleProvider } from "tle-client";
import { If } from "react-if";
import { TleBrowser } from "../components/TleBrowser";
import styled from "styled-components";

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    type: 'string',
    width: 250,
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

  public readonly state = {
    data: [],
    total: 0,
    loading: true,
    parameters: {

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

    // if (query !== null) {
    //   url += '?search=' + query;
    // }

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
    parameters['page'] = event.page;

    this.setState({parameters: parameters}, this.collection);
  };

  handleSortModelChange = (event: any) => {
    let parameters: any = this.state.parameters;

    if (!event.sortModel.hasOwnProperty(0)) {
      return;
    }

    parameters['sort'] = event.sortModel[0].field;
    parameters['sort-dir'] = event.sortModel[0].sort;

    this.setState({parameters: parameters}, this.collection);
  };

  handleModelSelectChange = (event: any) => {
    this.provider.get(event.selectionModel[0]).then(current => this.setState({current: current}));

    this.setState({
      open: true,
    })
  }

  toggleDrawer() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <div style={{height: 'calc(100% - 64px)'}}>
        <DataGrid pagination rows={this.state.data}
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
                  disableColumnMenu={true}
                  onSelectionModelChange={this.handleModelSelectChange}
                  sortingMode={'server'}
        />
        <Drawer anchor={'right'} open={this.state.open} onClose={() => this.toggleDrawer()} BackdropProps={{ invisible: true }}>
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
