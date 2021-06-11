import React from "react"
import { TleSelect } from "../components/TleSelect"
import { Tle } from "tle-client"
import { TleBrowser } from "../components/TleBrowser"
import { TlePopularProvider } from "../services/TlePopularProvider"
import { Link } from "@material-ui/core"
import styled from "styled-components"
import { device } from "../util/responsive"
import Satellite from "../services/Satellite"
import { If } from "react-if"
import { SatellitePosition } from "../components/SatellitePosition"
import AbstractTlePage, { AbstractTlePageStateInterface } from "./AbstractTlePage"

interface HomeStateInterface extends AbstractTlePageStateInterface {
  popular: any[]
  propagation: any,
}

const PopularWrapper = styled.div`
  margin-bottom: 20px;

  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(260px, 5fr));

  @media ${device.tablet} { 
    margin-right: 100px;
    margin-left: 100px;
  }

  @media ${device.laptop} { 
    margin-right: 100px;
    margin-left: 100px;
  }
`

const CenterTitle = styled.p`
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`

const PopularItemWrapper = styled.div``

export class Home extends AbstractTlePage<any, HomeStateInterface> {

  private popular: TlePopularProvider

  constructor(props: any) {
    super(props)

    this.popular = new TlePopularProvider()
  }

  readonly state: HomeStateInterface = {
    propagation: null,
    data: null,
    popular: [],
  }

  componentDidMount() {
    super.componentDidMount()
    this.provider.search().then((data: any) => {
      if (data) {
        this.setState({ popular: data })
      }
    })
  }

  onChange = (tle: any | null) => {
    if (tle === null) {
      this.props.history.push('/')
    } else {
      this.props.history.push('/tle/' + tle.satelliteId)
    }

    this.updateTle(tle)
  }

  protected updateTle = (tle: Tle|null) => {
    if (!tle) {
      return
    }

    this.setState({
      propagation: Satellite.sgp4(tle, new Date()),
      data: tle
    })
    window.scroll({
      top: window.innerHeight + 64,
      behavior: 'smooth'
    })
  }

  public render() {
    const { data, popular, propagation } = this.state

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

              <CenterTitle>Recently popular satellites</CenterTitle>
              <PopularWrapper>
                {popular.map(item => {
                  return (
                    <PopularItemWrapper key={item.satelliteId}>
                      <Link  href={'#/tle/' + item.satelliteId}>{item.name}</Link>
                    </PopularItemWrapper>
                  )
                })}
              </PopularWrapper>

              <CenterTitle>Search for satellite of your interest</CenterTitle>
              <TleSelect onChange={this.onChange} value={data}/>
            </div>

            {data?.name && <div className="slide">
              <h2 className="pb-4">{data.name}</h2>
              <p className="pb-2">Latest two line element data for selected satellite</p>

              <TleBrowser data={data}/>

              <If condition={propagation !== null}>
                <SatellitePosition satelliteId={data.satelliteId} propagation={propagation}/>
              </If>

            </div>}
          </div>
        </div>
      </div>
    )
  }
}
