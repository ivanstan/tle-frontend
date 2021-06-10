import { makeObservable, observable } from "mobx";
import { promisedComputed } from "computed-async-mobx";
import TleApi from "../services/TleApi"

export class FlyOverStore {

  constructor() {
    makeObservable(this)
  }

  @observable
  public tle: any;

  public flyovers = promisedComputed({}, async () => {

    return await TleApi.flyOver(25544, { latitude: 0, longitude: 0 })
  });

}

export default new FlyOverStore()
