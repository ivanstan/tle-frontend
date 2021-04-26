import React from "react";
import { GoogleMap, Marker, withGoogleMap } from "react-google-maps"
import { styles } from '../util/map';
import * as satellite from 'satellite.js';
import { twoline2satrec } from 'satellite.js';
import { DateTime } from 'luxon';
import { dateToAtom } from "../util/date";

class Google extends React.Component<any> {

  state = {
    markers: []
  }

  async componentDidMount() {
    const date: any = new Date();

    let atom = dateToAtom(date);

    let result1 = await fetch('https://tle.ivanstanojevic.me/api/tle/25544/vector?date=' + atom);
    let response1 = await result1.json();

    let result2 = await fetch('https://tle.ivanstanojevic.me/api/tle/25544');
    let response2 = await result2.json();

    const satrec = twoline2satrec(response2.line1, response2.line2);

    const positionAndVelocity = satellite.propagate(satrec, date);
    const positionEci: any = positionAndVelocity.position;
    const gmst = satellite.gstime(date);

    const positionGd = satellite.eciToGeodetic(positionEci, gmst);

    this.setState({
      markers: [
        {
          lat: response1.geodetic.latitude,
          lng: response1.geodetic.longitude,
        },
        {
          lat: positionGd.latitude * 180/ Math.PI,
          lng: positionGd.longitude * 180/ Math.PI,
        }
        ],
    })
  }

  render() {
    const { markers } = this.state;

    console.log(markers)

    return (
      <GoogleMap
        defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
        defaultZoom={4}
        defaultOptions={{ styles: styles }}
      >
        {markers.map((marker: any) => <Marker position={{ lat: marker.lat, lng: marker.lng }}/>)}
      </GoogleMap>
    );
  }
}

const GoogleMapExample = withGoogleMap(Google);

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
