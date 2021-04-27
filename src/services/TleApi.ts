import { dateToAtom } from "../util/date";

export class TleApi {

  predict = async (satelliteId: number, date: Date) => {
    let atom = dateToAtom(date)

    let result = await fetch(`https://tle.ivanstanojevic.me/api/tle/${satelliteId}/propagate?date=${atom}`)

    return await result.json();
  };

}

export default new TleApi()
