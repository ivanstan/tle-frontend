import React from "react";
import TleApi from "../services/TleApi";

export class SatellitePosition extends React.Component<any, any> {

  readonly state: any = {
    satelliteId: null,
  }

  shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
    return this.state.satelliteId !== nextProps.satelliteId;
  }

  static getDerivedStateFromProps(props: any) {
    return {
      propagation: props.propagation,
      satelliteId: props.satelliteId,
    }
  }

  render() {
    console.log(this.state)

    return null;
  }
}
