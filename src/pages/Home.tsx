import React from "react";
import { TleSelect } from "../components/TleSelect";
import { TleDisplay } from "../components/TleDisplay";
import { Tle, TleProvider } from "tle-client";
import { TleBrowser } from "../components/TleBrowser";

interface HomeStateInterface {
  data: Tle | null;
}

export class Home extends React.Component<any, HomeStateInterface> {

  private provider: TleProvider;

  constructor(props: any) {
    super(props);

    this.provider = new TleProvider();
  }


  readonly state: HomeStateInterface = {
    data: null,
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    if (id) {
      this.provider.get(id).then(tle => {
        this.setState({ data: tle });
        window.scroll({
          top: window.innerHeight + 64,
          behavior: 'smooth'
        });
      });
    }
  }

  onChange = (tle: any | null) => {
    if (tle === null) {
      this.props.history.push('/');
    } else {
      this.props.history.push('/tle/' + tle.satelliteId);
    }

    this.setState({
      data: tle
    }, () => {
      if (tle) {
        window.scroll({
          top: window.innerHeight + 64,
          behavior: 'smooth'
        });
      }
    })
  };

  public render() {
    const { data } = this.state;

    return (
      <div className="container" id="home-page">
        <div className="row slide-container bg-white">
          <div className="col-12 slide-container">

            <div className="first-slide">
              <img src="images/logo.svg" width={180} alt={"TLE API Logo"} className={"d-block mx-auto py-4"}/>
              <h1 className={"text-center"}>TLE API</h1>
              <p className={'py-4'}>
                API provides up to date NORAD two line element sets for number of Earth orbiting satellites. Data is
                provided
                by&nbsp;<a href={"https://celestrak.com/"}
                           target="_blank"
                           rel="nofollow">CelesTrak</a>&nbsp;and served in web application friendly JSON format.

                A two-line element set (TLE) is a data format encoding of orbital elements of an Earth-orbiting
                object for a given point in time.


              {/*  Learn more about the <a*/}
              {/*  href="https://spaceflight.nasa.gov/realdata/sightings/SSapplications/Post/JavaSSOP/SSOP_Help/tle_def.html"*/}
              {/*  target="_blank"*/}
              {/*  rel="nofollow"*/}
              {/*>Definition of Two-line Element Set Coordinate System</a>.*/}


              </p>
              <p className={"text-center"}>Search for satellite of your interest</p>
              <TleSelect onChange={this.onChange} value={data}/>
            </div>

            {data?.name && <div className="slide">
              <h2 className="pb-4">{data.name}</h2>
              <p className="pb-2">Latest two line element data for selected satellite</p>

              <TleBrowser data={data}/>

            </div>}
          </div>
        </div>
      </div>
    );
  }
}
