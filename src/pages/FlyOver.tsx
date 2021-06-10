import React from "react"
import { AbstractTlePageStateInterface } from "./AbstractTlePage"
import { inject, observer } from "mobx-react";
import { RouteComponentProps } from "react-router";
import { Observer } from "../services/Observer"
import { FlyOverStore } from "../services/FlyOverStore";

interface FlyOverStateInterface extends AbstractTlePageStateInterface {
  flyOver?: any,
}

type RouteParams = {
  id: string
}

interface FlyOverPropsInterface extends RouteComponentProps<RouteParams> {
  observer: Observer,
  flyOverStore: FlyOverStore
}

@inject('observer', 'flyOverStore')
@observer
export class FlyOver extends React.Component<any, any> {

  // readonly state: any = {
  //   flyOver: null,
  //   data: null,
  // }

  // provider: TleProvider

  public constructor(props: RouteComponentProps<RouteParams>) {
    super(props);

    const { observer, flyOverStore } = this.props

    const { id } = this.props.match.params;
    flyOverStore.tle = id
  }

  async componentDidMount() {
    //
    // let flyOver = null
    // if (tle) {
    //   flyOver = await TleApi.flyOver(tle, observer.position)
    // }
    //
    // this.setState({ flyOver: flyOver, data: tle });
  }

  // protected updateTle = (tle: Tle | null) => {
  //   if (!tle) {
  //     return
  //   }
  //
  //   this.setState({
  //     data: tle
  //   })
  //
  //   TleApi.flyOver(tle, this.props.ObserverService.observer).then(result => this.setState({ flyOver: result }))
  // }

  // componentWillReceiveProps(nextProps: any) {
  //   if (nextProps.match.params.id !== this.props.match.params.id) {
  //     const { id } = nextProps.match.params
  //
  //     if (id) {
  //       this.provider.get(id).then(tle => this.updateTle(tle));
  //     }
  //   }
  //
  //   TleApi.flyOver(nextProps.data, nextProps.ObserverService.observer).then(result => this.setState({ flyOver: result }))
  // }

  render() {
    // const { flyOver, data } = this.state
    const { observer, flyOverStore } = this.props

    console.log(flyOverStore.flyovers.get())

    return null;

    // if (!flyOver) {
    //   return null
    // }


    // const timezone = flyOver.observer.timezone

    // let observerTime = fromAtom(flyOver.observer.date)


    // return (
    //   <div className={'d-flex p-4'}>
    //     <div className={'flex-grow-1 d-flex'}>
    //       <div className={'flex-grow-1'} style={{ maxHeight: '50%' }}>
    //         <GeoMap
    //           renderObserver={true}
    //           containerElement={<div style={{ height: 400, width: '100%' }}/>}
    //           mapElement={<div style={{ height: 400 }}/>}
    //         />
    //         <span style={{ fontSize: 12 }}>
    //           {observer.position.latitude}
    //
    //           * Drag marker to set your location
    //         </span>
    //       </div>
    //     </div>
    //
    //     <div className={'flex-grow-1'} style={{ paddingLeft: 24 }}>
    //       <List dense>
    //         {
    //           flyOver.member.map((element: any, index: number) => {
    //             let flyOverTime = fromAtom(element.aos.date)
    //
    //             let diff = flyOverTime.diff(observerTime, ['days', 'hours', 'minutes', 'seconds'])
    //
    //             let params = new URLSearchParams({
    //               'id[]': data.satelliteId,
    //               'date': element.aos.date,
    //             })
    //             let mapLink = '#/map?' + params.toString()
    //
    //             return <ListItem key={index}>
    //               <ListItemText
    //                 primary={'AOS ' + flyOverTime.toFormat('HH:mm:ss yyyy-MM-dd ZZ')}
    //                 secondary={formatDiff(diff)}
    //               />
    //               <Link href={mapLink}>View map</Link>
    //             </ListItem>
    //           })}
    //       </List>
    //     </div>
    //   </div>
    // )
  }
}
