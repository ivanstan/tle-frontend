import React from "react";
import { styles } from "../util/map";
import { GoogleMap, withGoogleMap } from "react-google-maps"

class Google extends React.Component<any> {

  private _map: any;

  render() {
    const { zoom } = this.props;

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
      </GoogleMap>
    );
  }
}

export const GeoMap = withGoogleMap(Google);
