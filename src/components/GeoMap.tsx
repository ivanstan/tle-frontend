import React from "react";
import { styles } from "../util/map";
import { GoogleMap, withGoogleMap } from "react-google-maps"
import Marker from "react-google-maps/lib/components/Marker";
import { If } from "react-if";
import { Tle } from "tle-client/index";

const localStorageObserver = 'observer';

const defaultObserverPosition = {
  lat: 0,
  lng: 0,
};

interface GeoMapPropsInterface {
  zoom?: number;
  renderObserver?: boolean;
  onObserverPositionChange?: Function;
}

interface GeoMapStateInterface {
  observer: LatLng
}

export interface LatLng {
  lat: number
  lng: number
}

function getHtml5Geolocation(defaultValue: LatLng): Promise<LatLng> {
  if (!navigator.geolocation) {
    return new Promise(resolve => resolve(defaultValue));
  }

  return new Promise(resolve => {
    navigator.geolocation.getCurrentPosition((position => {
      resolve({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    }), () => {
      resolve(defaultValue)
    });
  });
}

class CustomGoogleMap extends React.Component<GeoMapPropsInterface, GeoMapStateInterface> {

  private _map: any;

  readonly state = {
    observer: {
      lat: defaultObserverPosition.lat,
      lng: defaultObserverPosition.lng,
    }
  }

  componentDidMount() {
    let json = localStorage.getItem(localStorageObserver) || '{}';
    let observer = JSON.parse(json);

    if (Object.keys(observer).length === 0) {
      getHtml5Geolocation(defaultObserverPosition).then(location => {
        let newObserver = {
          ...location
        };

        this.setState({observer: newObserver})
        this.callOnObserverPositionChange(observer.lat, observer.lng)
      });
    } else {
      let newObserver = {
        lat: observer.lat,
        lng: observer.lng,
      };

      this.setState({observer: newObserver})
      this.callOnObserverPositionChange(observer.lat, observer.lng)
    }
  }

  onObserverDragEnd = (event: any): void => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    const observer: LatLng = {
      lat: lat,
      lng: lng,
    };

    localStorage.setItem(localStorageObserver, JSON.stringify(observer));

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
    const { zoom, renderObserver } = this.props;
    const { observer } = this.state;

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
          <Marker position={{ lat: observer.lat, lng: observer.lng }} draggable={true} onDragEnd={this.onObserverDragEnd}/>
        </If>
      </GoogleMap>
    );
  }
}

export const GeoMap = withGoogleMap(CustomGoogleMap);
