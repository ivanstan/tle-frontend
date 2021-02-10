import React from "react";
import { TleSelect } from "../components/TleSelect";

export class Home extends React.Component {
  public render() {
    return (
      <div className="container bg-white">
        <div className="row">
          <div className="col-12">

            <TleSelect/>

          </div>
        </div>
      </div>
    );
  }
}
