import React from "react"
import * as satellite from 'satellite.js'
import { twoline2satrec } from 'satellite.js'
import { fromAtom, toAtom } from "../util/date"
import { GeoMap } from "../components/GeoMap"
import Marker from "react-google-maps/lib/components/Marker"
import { RouteComponentProps } from "react-router";

interface MapPropsInterface extends RouteComponentProps {

}

export class Map extends React.Component<MapPropsInterface> {

  state = {
    markers: []
  }

  async componentDidMount() {
    const params = new URLSearchParams(this.props.location.search)

    const dateParam = params.get('date') || toAtom(new Date())

    let result1 = await fetch('https://tle.ivanstanojevic.me/api/tle/25544/propagate?date=' + dateParam)
    let response1 = await result1.json()

    let result2 = await fetch('https://tle.ivanstanojevic.me/api/tle/25544')
    let response2 = await result2.json()

    const satrec = twoline2satrec(response2.line1, response2.line2)

    const date = fromAtom(dateParam).toJSDate();

    const positionAndVelocity = satellite.propagate(satrec, date)
    const positionEci: any = positionAndVelocity.position
    const gmst = satellite.gstime(date)

    const positionGd = satellite.eciToGeodetic(positionEci, gmst)

    this.setState({
      markers: [
        {
          lat: response1.geodetic.latitude,
          lng: response1.geodetic.longitude,
        },
        {
          lat: positionGd.latitude * 180 / Math.PI,
          lng: positionGd.longitude * 180 / Math.PI,
        }
      ],
    })
  }


  render() {
    const { markers } = this.state

    return (
      <div>
        <GeoMap
          containerElement={<div style={{ height: window.innerHeight - 64, width: '100%' }}/>}
          mapElement={<div style={{ height: `100%` }}/>}
        >
          {markers.map((marker: any) => <Marker position={{ lat: marker.lat, lng: marker.lng }}/>)}
        </GeoMap>
      </div>
    )
  }
}

