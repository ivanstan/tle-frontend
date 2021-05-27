import React from "react";
import { GeoMap } from "../components/GeoMap";
import TleApi from "../services/TleApi";
import AbstractTlePage, { AbstractTlePageStateInterface } from "./AbstractTlePage";
import { Tle } from "tle-client/index";

interface FlyOverStateInterface extends AbstractTlePageStateInterface {
  flyOver: any[]
}

export class FlyOver extends AbstractTlePage<any, FlyOverStateInterface> {

  readonly state: FlyOverStateInterface = {
    flyOver: [],
    data: null,
  };

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    super.componentDidMount();
  }

  onObserverPositionChange = (latLng: any) => {
    const { data } = this.state;

    if (data) {
      TleApi.flyOver(data, latLng).then(result => this.setState({ flyOver: result }));
    }
  };

  // protected updateTle = (tle: Tle | null) => {
  //   // super.updateTle(tle);
  // };

  render() {
    const { flyOver } = this.state;

    return (
      <div className={'d-flex'}>

        <div className={'flex-grow-1 d-flex flex-column'}>

          <div className={'flex-grow-1'} style={{ maxHeight: '50%' }}>

            <GeoMap
              renderObserver={true}
              onObserverPositionChange={this.onObserverPositionChange}
              containerElement={<div style={{ height: window.innerHeight - 64, width: '100%' }}/>}
              mapElement={<div style={{ height: `50%` }}/>}
            />

          </div>

          <div className={'flex-grow-1'}>


          </div>

        </div>

        <div className={'flex-grow-1'}>
          {flyOver.map((element: any, index: number) => {
            return <p key={index}>{element.aos.date}</p>;
          })}
        </div>


      </div>

    );
  }
}
