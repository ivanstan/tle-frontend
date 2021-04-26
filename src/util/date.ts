import { DateTime } from "luxon";

export const dateToAtom = (date: Date): string => {
  // @ts-ignore
  const luxon: any = new DateTime.fromJSDate(date);
  let format = luxon.toFormat('yyyy-MM-dd');
  format += 'T' + luxon.toFormat('TTZZ');

  return format;
}
