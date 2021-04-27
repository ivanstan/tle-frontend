import React from "react";
import TleApi from "../services/TleApi";

export class SatellitePosition extends React.Component<any, any> {

  readonly state = {
    satelliteId: null,
    date: null,
  }

  shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
    return this.state.satelliteId !== nextProps.satelliteId;
  }

  static async getDerivedStateFromProps(props: any) {
    return {
      satelliteId: props.satelliteId,
      date: await TleApi.predict(props.satelliteId, new Date()),
    }
  }

  render() {
    console.log(this.state)

    return null;
  }
}
