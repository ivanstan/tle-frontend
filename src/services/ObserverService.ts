import { Observer } from "../model/Observer";
import { LatLng } from "../model/LatLng";

const defaultObserverPosition: LatLng = {
  latitude: 0,
  longitude: 0,
};

const localStorageObserver = 'observer';

export class ObserverService {

  public observer: Observer;

  constructor(props: any) {

    this.observer = new Observer();
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

  async get(): Promise<Observer> {
    let json = localStorage.getItem(localStorageObserver) || '{}';
    let observer = JSON.parse(json);

    let newObserver: Observer = defaultObserverPosition;

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
    ));
  }

  set(observer: Observer) {
    localStorage.setItem(localStorageObserver, JSON.stringify(observer));
  }

  public static initial(): Observer {
    return {
      ...defaultObserverPosition
    }
  }
}

export default new ObserverService();
