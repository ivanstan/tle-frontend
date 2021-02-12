import React from "react";

export class TleDisplay extends React.Component<any, any> {

  render() {
    const { data } = this.props;

    return (
      <div className="code">
        <div>{data.line1}</div>
        <div>{data.line2}</div>
      </div>
    );
  }
}
