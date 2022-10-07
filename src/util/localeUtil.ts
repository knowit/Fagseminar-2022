import format from "date-fns/format/index.js";
import nb from "date-fns/locale/nb/index.js";

export function formatDate(
  date:
    | Date
    | {
        year: number;
        month: number;
        day: number;
        hours?: number;
        minutes?: number;
        seconds?: number;
        ms?: number;
      }
    | string,
  formatStr?: string
) {
  let useDate: Date;
  if (date instanceof Date) {
    useDate = date;
  } else if (typeof date === "string") {
    useDate = new Date(date);
  } else {
    useDate = new Date(
      date.year,
      date.month,
      date.day,
      date.hours,
      date.minutes,
      date.seconds,
      date.ms
    );
  }

  return formatStr != null
    ? format(useDate, formatStr, { locale: nb })
    : format(useDate, "PP", { locale: nb });
}
