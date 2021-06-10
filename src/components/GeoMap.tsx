import React from "react";
import { styles } from "../util/map";
import { GoogleMap, withGoogleMap } from "react-google-maps"
import Marker from "react-google-maps/lib/components/Marker";
import { If } from "react-if";
import { Observer } from "../services/Observer";
import { inject } from "mobx-react";

interface GeoMapPropsInterface {
  zoom?: number;
  renderObserver?: boolean;
  observer?: Observer
}

interface GeoMapStateInterface {

}

@inject('observer')
class CustomGoogleMap extends React.Component<GeoMapPropsInterface, GeoMapStateInterface> {

  private _map: any;

  onObserverDragEnd = (event: any): void => {
    const { observer } = this.props;

    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    if (observer) {
      observer.setPosition({
        latitude: lat,
        longitude: lng,
      });
    }
  };

  render() {
    let { zoom, renderObserver, observer } = this.props;

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
        <If condition={renderObserver && observer !== undefined}>
          <Marker
            position={{ lat: observer.position.latitude, lng: observer.position.longitude }}
            draggable={true}
            onDragEnd={this.onObserverDragEnd}
          />
        </If>
      </GoogleMap>
    );
  }
}

export const GeoMap = withGoogleMap(CustomGoogleMap);
