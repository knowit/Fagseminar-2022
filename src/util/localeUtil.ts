import format from "date-fns/format";
import { nb } from "date-fns/locale";

export function getDateFromDayAndMonth(
  day: number,
  month: number,
  year: number
) {
  new Date(year, month - 1, day);
}

export function formatDateFromDMY(
  day: number,
  month: number,
  year: number,
  formatStr?: string
) {
  const date = new Date(year, month - 1, day);
  return formatStr != null
    ? format(date, formatStr, { locale: nb })
    : format(date, "PP", { locale: nb });
}
