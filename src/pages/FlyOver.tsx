import React from "react";
import { GeoMap } from "../components/GeoMap";
import TleApi from "../services/TleApi";
import AbstractTlePage, { AbstractTlePageStateInterface } from "./AbstractTlePage";
import ObserverService, { ObserverService as ObserverServiceStatic } from "../services/ObserverService";
import { Observer } from "../model/Observer";
import { Tle } from "tle-client";

interface FlyOverStateInterface extends AbstractTlePageStateInterface {
  flyOver: any[],
  observer: Observer,
}

export class FlyOver extends AbstractTlePage<any, FlyOverStateInterface> {

  readonly state: FlyOverStateInterface = {
    flyOver: [],
    data: null,
    observer: ObserverServiceStatic.initial()
  };

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    super.componentDidMount();

    const { data } = this.state;

    ObserverService.get().then(observer => {
      this.setState({ observer: observer })

      if (data) {
        TleApi.flyOver(this.state.data, observer).then(result => this.setState({ flyOver: result }));
      }
    });
  }

  onObserverPositionChange = (latLng: any) => {
    const { data } = this.state;

    if (data) {
      this.setState({ observer: latLng })
      TleApi.flyOver(data, latLng).then(result => this.setState({ flyOver: result }));
    }
  };

  protected updateTle = (tle: Tle | null) => {
    if (!tle) {
      return
    }

    this.setState({
      data: tle
    })

    TleApi.flyOver(tle, this.state.observer).then(result => this.setState({ flyOver: result }));
  };

  render() {
    const { flyOver, observer } = this.state;

    return (
      <div className={'d-flex p-4'}>

        <div className={'flex-grow-1 d-flex flex-column'}>

          <div className={'flex-grow-1'} style={{ maxHeight: '50%' }}>
            <GeoMap
              observer={observer}
              renderObserver={true}
              onObserverPositionChange={this.onObserverPositionChange}
              containerElement={<div style={{ height: window.innerHeight - 64, width: '100%' }}/>}
              mapElement={<div style={{ height: `50%` }}/>}
            />
          </div>

          <div className={'flex-grow-1'}>


          </div>

        </div>

        <div className={'flex-grow-1 pl-4'}>
          {flyOver.map((element: any, index: number) => {
            return <p key={index}>{element.aos.date}</p>;
          })}
        </div>


      </div>

    );
  }
}
