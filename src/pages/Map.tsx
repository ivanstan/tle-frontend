import React from "react";
import { GoogleMap, withGoogleMap } from "react-google-maps"
import { styles } from '../util/map';

const GoogleMapExample = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
    defaultZoom={13}
    defaultOptions={{ styles: styles }}
  >
  </GoogleMap>
));

class Map extends React.Component {
  render() {


    return (
      <div>
        <GoogleMapExample
          containerElement={<div style={{ height: window.innerHeight - 64, width: '100%' }}/>}
          mapElement={<div style={{ height: `100%` }}/>}
        />
      </div>
    );
  }
}

export default Map;
