/* eslint-disable @typescript-eslint/no-unsafe-argument */

// import { weekDays } from "@/data/calendarDaysAndMonth";

/* eslint-disable import/no-anonymous-default-export */
export function range(end: number) {
  const { result } = Array.from({ length: end }).reduce(
    ({ result, current }) => ({
      result: [...result, current],
      current: current + 1,
    }),
    { result: [], current: 1 },
  );
  return result;
}

export function getDaysInMonth(month: number, year: number) {
  return new Date(year, month + 1, 0).getDate();
}

/* export function getSortedDays(month: number, year: number) {
  const dayIndex = new Date(year, month, 1).getDay();
  return [...weekDays.slice(dayIndex), ...weekDays.slice(0, dayIndex)];
} */
// Entrega un array que contiene todos los dias del mes
// getSortedDays() : number[]

export const getSortedDays = (month: number, year: number) => {
  const daysInMonth = range(getDaysInMonth(month, year));
  const index = new Date(year, month, 1).getDay();
  return [...Array(index === 0 ? 6 : index - 1), ...daysInMonth];
};

export function getDateObjet(day: number, month: number, year: number) {
  return new Date(year, month, day);
}

export function areDateOnSameDay(first: Date, second: Date) {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
}

/* export const nextMonth = (date: Date, cb: (dt: Date) => void) => {
  const mon = date.getMonth();
  if (mon < 11) {
    date.setMonth(mon + 1);
  } else {
    date.setMonth(0);
    date.setFullYear(date.getFullYear() + 1);
  }
  cb(new Date(date));
};

export const prevMonth = (date: Date, cb: (dt: Date) => void) => {
  const mon = date.getMonth();
  if (mon > 0) {
    date.setMonth(mon - 1);
  } else {
    date.setMonth(11);
    date.setFullYear(date.getFullYear() - 1);
  }
  cb(new Date(date));
};
*/
