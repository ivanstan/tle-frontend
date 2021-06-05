import { Observer } from "../model/Observer";
import { LatLng } from "../model/LatLng";

const defaultObserverPosition: LatLng = {
  lat: 0,
  lng: 0,
};

const localStorageObserver = 'observer';

export class ObserverService {

  getHtml5Geolocation(defaultValue: LatLng): Promise<LatLng> {
    if (!navigator.geolocation) {
      return new Promise(resolve => resolve(defaultValue))
    }

    return new Promise(resolve => {
      navigator.geolocation.getCurrentPosition((position => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude
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
        lat: observer.lat,
        lng: observer.lng,
      }
    }

    return new Promise(resolve => resolve(
      {
        lat: newObserver.lat,
        lng: newObserver.lng,
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
