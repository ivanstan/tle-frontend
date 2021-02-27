import { LineNumber } from "tle-client/index";
import React from "react";

export class TleBrowser extends React.Component<any, any> {

  hover = (element: string): void => {
    console.log(element);
  };

  render() {
    const { data } = this.props;

    return <>
      <div className="line1">
          <span className={'element'}
                onMouseEnter={() => this.hover('line-number')}>{data.getLineNumberRaw(LineNumber.LINE1)}</span>
        &nbsp;
        <span className={'element'}
              onMouseEnter={() => this.hover('satellite-id')}>{data.getSatelliteIdRaw(LineNumber.LINE1)}</span>
        <span className={'element'}
              onMouseEnter={() => this.hover('classification')}>{data.getClassificationRaw()}</span>
        &nbsp;
        <span className={'element'} onMouseEnter={() => this.hover('launch-year')}>{data.getLaunchYearRaw()}</span>
        <span className={'element'}
              onMouseEnter={() => this.hover('launch-of-year')}>{data.getLaunchNumberOfTheYearRaw()}</span>
        <span className={'element'} onMouseEnter={() => this.hover('launch-piece')}>{data.getLaunchPieceRaw()}</span>
        <span className={'element'} onMouseEnter={() => this.hover('epoch-year')}>{data.getEpochYearRaw()}</span>
        <span className={'element'} onMouseEnter={() => this.hover('epoch-day')}>{data.getEpochDayRaw()}</span>
        <span className={'element'}
              onMouseEnter={() => this.hover('first-derivative')}>{data.getFirstTimeDerivativeOfMeanMotionRaw()}</span>
        <span className={'element'}
              onMouseEnter={() => this.hover('second-derivative')}>{data.getSecondTimeDerivativeOfMeanMotionRaw()}</span>
        <span className={'element'} onMouseEnter={() => this.hover('drag-term')}>{data.getBstarDragTermRaw()}</span>
        &nbsp;
        <span className={'element'}
              onMouseEnter={() => this.hover('ephemeris-type')}>{data.getEphemerisTypeRaw()}</span>
        <span className={'element'}
              onMouseEnter={() => this.hover('element-number')}>{data.getElementNumberRaw()}</span>
        <span className={'element'}
              onMouseEnter={() => this.hover('checksum-1')}>{data.getLineChecksumRaw(LineNumber.LINE1)}</span>
      </div>

      <div className="line1">
          <span className={'element'}
                onMouseEnter={() => this.hover('line-number')}>{data.getLineNumberRaw(LineNumber.LINE2)}</span>
        &nbsp;
        <span className={'element'}
              onMouseEnter={() => this.hover('satellite-id')}>{data.getSatelliteIdRaw(LineNumber.LINE2)}</span>
        <span className={'element'} onMouseEnter={() => this.hover('inclination')}>{data.getInclinationRaw()}</span>
        &nbsp;
        <span className={'element'}
              onMouseEnter={() => this.hover('raan')}>{data.getRightAscensionOfAscendingNodeRaw()}</span>
        &nbsp;
        <span className={'element'} onMouseEnter={() => this.hover('eccentricity')}>{data.getEccentricityRaw()}</span>
        &nbsp;
        <span className={'element'}
              onMouseEnter={() => this.hover('argument-of-perigee')}>{data.getArgumentOfPerigeeRaw()}</span>
        &nbsp;
        <span className={'element'} onMouseEnter={() => this.hover('mean-anomaly')}>{data.getMeanAnomalyRaw()}</span>
        &nbsp;
        <span className={'element'} onMouseEnter={() => this.hover('mean-motion')}>{data.getMeanMotionRaw()}</span>
        <span className={'element'}
              onMouseEnter={() => this.hover('revolution-number')}>{data.getRevolutionNumberRaw()}</span>
        <span className={'element'}
              onMouseEnter={() => this.hover('checksum-2')}>{data.getLineChecksumRaw(LineNumber.LINE2)}</span>
      </div>

    </>;
  }

}
