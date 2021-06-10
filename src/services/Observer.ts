
import { LatLng } from "../model/LatLng"
import { action, computed, makeObservable, observable } from "mobx"

const defaultObserverPosition: LatLng = {
  latitude: 0,
  longitude: 0,
}

const localStorageObserver = 'observer'

export class Observer {

  @observable public position: LatLng

  @action
  setPosition(position: LatLng) {
    this.position = position

    this.persist()
  }

  constructor() {
    this.position = {
      latitude: 0,
      longitude: 0
    }

    makeObservable(this)
  }

  getHtml5Geolocation(defaultValue: LatLng): Promise<LatLng> {
    if (!navigator.geolocation) {
      return new Promise(resolve => resolve(defaultValue))
    }

    return new Promise(resolve => {
      navigator.geolocation.getCurrentPosition((position => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      }), () => {
        resolve(defaultValue)
      })
    })
  }

  async get(): Promise<any> {
    let json = localStorage.getItem(localStorageObserver) || '{}'
    let observer = JSON.parse(json)

    let newObserver = defaultObserverPosition

    if (Object.keys(observer).length === 0) {
      let location = await this.getHtml5Geolocation(defaultObserverPosition)
      newObserver = { ...location }
    } else {
      newObserver = {
        latitude: observer.latitude,
        longitude: observer.longitude,
      }
    }

    return new Promise(resolve => resolve(
      {
        latitude: newObserver.latitude,
        longitude: newObserver.longitude,
      }
    ))
  }

  private persist() {

  }
}

export default new Observer()
