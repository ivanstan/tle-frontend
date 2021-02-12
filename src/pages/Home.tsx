import React from "react";
import { TleSelect } from "../components/TleSelect";
import { Tle } from "../Tle/Tle";
import { TleDisplay } from "../components/TleDisplay";

interface HomeStateInterface {
  data: Tle|null;
}

export class Home extends React.Component<any, HomeStateInterface> {

  readonly state: HomeStateInterface = {
    data: null,
  };

  onChange = (data: Tle) => {
    this.setState({
      data: data
    }, () => {
      if (data) {
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
              <h1>TLE API</h1>
              <p>Tekst o tome sta je api i sta pruza. Odakle dolaze podaci. Kolko su "svezi"</p>
              <p>Da nastavis Izaberi ovde satelit da vidis kako api radi</p>
              <TleSelect onChange={this.onChange}/>
            </div>

            {data && <div className="slide">
              <h2>{data.name}</h2>

              <p>Ovo su najnoviji podaci o satelitu koje imamo</p>

              <TleDisplay data={data}/>

              <p>Koristi ovaj link da dobijes podatke direktno od api-a</p>
            </div>}

          </div>
        </div>
      </div>
    );
  }
}
