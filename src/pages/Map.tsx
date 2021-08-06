import React from "react"
import * as satellite from 'satellite.js'
import { twoline2satrec } from 'satellite.js'
import { fromAtom, toAtom } from "../util/date"
import { GeoMap } from "../components/GeoMap"
import Marker from "react-google-maps/lib/components/Marker"
import { RouteComponentProps } from "react-router"
import SatelliteMarker from "../components/SatelliteMarker"
import { TleApi } from "../services/TleApi"
import { If } from "react-if"
import Polyline from "react-google-maps/lib/components/Polyline"

interface MapPropsInterface extends RouteComponentProps {

}

interface MapStateInterface {
  satellites: object[]
}

export class Map extends React.Component<MapPropsInterface, MapStateInterface> {

  state = {
    params: new URLSearchParams(),
    satellites: []
  }

  public static getDerivedStateFromProps(props: Readonly<MapPropsInterface>, state: Readonly<MapStateInterface>) {
    return {
      params: new URLSearchParams(props.location.search)
    }
  }

  shouldComponentUpdate(nextProps: Readonly<MapPropsInterface>, nextState: Readonly<MapStateInterface>, nextContext: any): boolean {
    if (nextProps.location.search !== this.props.location.search) {
      return true;
    }

    if (this.state.satellites.length === 0) {
      return true;
    }

    return false;
  }

  componentDidMount() {
    this.componentDidUpdate(this.props, this.state);
  }

  async componentDidUpdate(prevProps: Readonly<MapPropsInterface>, prevState: Readonly<MapStateInterface>, snapshot?: any) {
    const { params } = this.state

    // let result1 = await fetch('https://tle.ivanstanojevic.me/api/tle/25544/propagate?date=' + dateParam)
    // let response1 = await result1.json()
    //
    // {
    //   marker: {
    //     lat: response1.geodetic.latitude,
    //       lng: response1.geodetic.longitude,
    //   }
    // }

    let date: any = toAtom(new Date());
    let newDate = params.get('date');
    if (newDate) {
      date = newDate.replace(' ', '+');
    }

    date = fromAtom(date).toJSDate()

    const requestParams = new URLSearchParams()
    params.getAll('id[]').forEach(item => requestParams.append('satellite_id[]', item));

    let result2 = await fetch('https://tle.ivanstanojevic.me/api/tle?' + requestParams.toString())
    let response2 = await result2.json()

    const satellites: any = [];
    response2.member.forEach((member: any) => {
      const satrec = twoline2satrec(member.line1, member.line2)
      const positionAndVelocity = satellite.propagate(satrec, date)
      const positionEci: any = positionAndVelocity.position
      const gmst = satellite.gstime(date)

      const positionGd = satellite.eciToGeodetic(positionEci, gmst)

      satellites.push({
        groundTracks: TleApi.groundTracks(member, date),
        marker: {
          lat: positionGd.latitude * 180 / Math.PI,
          lng: positionGd.longitude * 180 / Math.PI,
        }
      });
    });

    this.setState({ satellites: satellites })
  }

  render() {
    const { satellites, params } = this.state

    return (
      <div>
        <GeoMap
          zoom={2}
          containerElement={<div style={{ height: window.innerHeight - 64, width: '100%' }}/>}
          mapElement={<div style={{ height: `100%` }}/>}
        >
          {satellites.map((satellite: any, index: number) => (
            <React.Fragment key={index}>
              <If condition={satellite.groundTracks}>
                <Polyline
                  path={satellite.groundTracks}
                  options={{
                    strokeColor: "#74BD8C",
                    strokeOpacity: 0.75,
                    strokeWeight: 2,
                  }}
                />
              </If>
              <If condition={satellite.marker}>
                <Marker position={{ lat: satellite.marker.lat, lng: satellite.marker.lng }} icon={SatelliteMarker}/>
              </If>
            </React.Fragment>
            )
          )}
        </GeoMap>
      </div>
    )
  }
}

