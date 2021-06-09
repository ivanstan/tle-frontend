import React from "react";
import { styles } from "../util/map";
import { GoogleMap, withGoogleMap } from "react-google-maps"
import Marker from "react-google-maps/lib/components/Marker";
import { If } from "react-if";
import { LatLng } from "../model/LatLng";
import { Observer } from "../model/Observer";
import { ObserverService } from "../services/ObserverService";

interface GeoMapPropsInterface {
  zoom?: number;
  renderObserver?: boolean;
  onObserverPositionChange?: Function;
  observer?: Observer;
}

interface GeoMapStateInterface {
  observer?: Observer
}

class CustomGoogleMap extends React.Component<GeoMapPropsInterface, GeoMapStateInterface> {

  readonly state = {
    observer: ObserverService.initial()
  }

  private _map: any;

  componentDidMount() {
    const { observer } = this.props;

    if (observer) {
      this.callOnObserverPositionChange(observer.latitude, observer.longitude)
    }
  }

  onObserverDragEnd = (event: any): void => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    const observer: LatLng = {
      latitude: lat,
      longitude: lng,
    };

    this.setState({
      observer: observer,
    })

    this.callOnObserverPositionChange(lat, lng);
  };

  callOnObserverPositionChange = (lat: number, lng: number) => {
    const { onObserverPositionChange } = this.props;

    if (typeof onObserverPositionChange === 'function') {
      onObserverPositionChange({
        lat: lat,
        lng: lng
      });
    }
  };

  render() {
    let { zoom, renderObserver, observer } = this.props;

    if (!observer) {
      observer = ObserverService.initial();
    }

    return (
      <GoogleMap
        ref={(map) => this._map = map}
        defaultCenter={{ lat: -10, lng: 8 }}
        defaultZoom={zoom || 1}
        defaultOptions={{
          styles: styles,
          streetViewControl: false,
          mapTypeControl: false,
          scrollwheel: false,
          restriction: {
            latLngBounds: {
              north: 85,
              south: -85,
              west: -180,
              east: 180
            }
          },
        }}
      >
        {this.props.children}
        <If condition={renderObserver}>
          <Marker position={{ lat: observer.latitude, lng: observer.longitude }} draggable={true} onDragEnd={this.onObserverDragEnd}/>
        </If>
      </GoogleMap>
    );
  }
}

export const GeoMap = withGoogleMap(CustomGoogleMap);
