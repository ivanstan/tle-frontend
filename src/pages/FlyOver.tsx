import React from "react"
import { inject, observer } from "mobx-react"
import { RouteComponentProps } from "react-router"
import { Observer } from "../services/Observer"
import { FlyOverStore } from "../services/FlyOverStore"
import { formatDiff, fromAtom } from "../util/date"
import { GeoMap } from "../components/GeoMap"
import { Link, List, ListItem, ListItemText } from "@material-ui/core"

type RouteParams = {
  id: string
}

interface FlyOverPropsInterface extends RouteComponentProps<RouteParams> {
  observer: Observer,
  flyOverStore: FlyOverStore
}

@inject('observer', 'flyOverStore')
@observer
export class FlyOver extends React.Component<FlyOverPropsInterface, any> {

  public constructor(props: FlyOverPropsInterface) {
    super(props)

    const { flyOverStore } = this.props

    const { id } = this.props.match.params
    flyOverStore.tle = id
  }

  async componentDidMount() {
    //
    // let flyOver = null
    // if (tle) {
    //   flyOver = await TleApi.flyOver(tle, observer.position)
    // }
    //
    // this.setState({ flyOver: flyOver, data: tle })
  }

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      const { flyOverStore } = this.props
      const { id } = nextProps.match.params
      flyOverStore.tle = id
    }
  }

  render() {
    // const { flyOver, data } = this.state
    const { observer, flyOverStore } = this.props

    let flyovers = flyOverStore.flyovers.get()

    if (!flyovers.hasOwnProperty('member')) {
      return null
    }

    const timezone = flyovers.observer.timezone

    let observerTime = fromAtom(flyovers.observer.date)


    return (
      <div className={'d-flex p-4'}>
        <div className={'flex-grow-1 d-flex'}>
          <div className={'flex-grow-1'} style={{ maxHeight: '50%' }}>
            <GeoMap
              renderObserver={true}
              containerElement={<div style={{ height: 400, width: '100%' }}/>}
              mapElement={<div style={{ height: 400 }}/>}
            />
            <span style={{ fontSize: 12 }}>
              {observer.position.latitude}

              * Drag marker to set your location
            </span>
          </div>
        </div>

        <div className={'flex-grow-1'} style={{ paddingLeft: 24 }}>
          <List dense>
            {
              flyovers.member.map((element: any, index: number) => {
                let flyOverTime = fromAtom(element.aos.date)

                let diff = flyOverTime.diff(observerTime, ['days', 'hours', 'minutes', 'seconds'])

                let params = new URLSearchParams({
                  'id[]': flyOverStore.tle,
                  'date': element.aos.date,
                })

                let mapLink = '#/map?' + decodeURIComponent(params.toString())

                return <ListItem key={index}>
                  <ListItemText
                    primary={'AOS ' + flyOverTime.toFormat('HH:mm:ss yyyy-MM-dd ZZ')}
                    secondary={formatDiff(diff)}
                  />
                  <Link href={mapLink}>View map</Link>
                </ListItem>
              })}
          </List>
        </div>
      </div>
    )
  }
}
