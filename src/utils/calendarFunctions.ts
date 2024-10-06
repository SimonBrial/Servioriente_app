export const range = (end: number): number[] => {
  const { result } = Array.from({ length: end }).reduce(
    ({ result, current }) => ({
      result: [...result, current],
      current: current + 1,
    }),
    { result: [], current: 1 },
  );
  return result;
};

export const getDaysInMonth = (month: number, year: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

/* export function getSortedDays(month: number, year: number) {
  const dayIndex = new Date(year, month, 1).getDay();
  return [...weekDays.slice(dayIndex), ...weekDays.slice(0, dayIndex)];
} */
// Entrega un array que contiene todos los dias del mes
// getSortedDays() : number[]

export const getDaysMonth = (
  month: number,
  year: number,
): Record<string, number> => {
  const firstDayIndex = new Date(year, month, 1).getDay(); // Week's day of the first month's day
  const prevMonthDays = getDaysInMonth(
    month - 1 < 0 ? 11 : month - 1,
    month - 1 < 0 ? year - 1 : year,
  );
  const nextMonthDays = getDaysInMonth(
    month + 1 > 11 ? 0 : month + 1,
    month + 1 > 11 ? year + 1 : year,
  );

  return {
    prevMonthDays,
    firstDayIndex,
    nextMonthDays,
  };
};

export const getSortedDays = (month: number, year: number) => {
  const daysInMonth = range(getDaysInMonth(month, year)); // Quantity of day in month

  const { prevMonthDays, firstDayIndex, nextMonthDays } = getDaysMonth(
    month,
    year,
  );

  const prevMonthFill = Array.from(
    { length: firstDayIndex === 0 ? 6 : firstDayIndex - 1 },
    (_, i) =>
      prevMonthDays - (firstDayIndex === 0 ? 6 : firstDayIndex - 1) + i + 1,
  );
  const nextMonthFill = Array.from(
    { length: 42 - (prevMonthFill.length + daysInMonth.length) },
    (_, i) => i + 1,
  );

  const prevMonthDates = prevMonthFill.map((day) => {
    return getDateObjet(day, month - 1 < 0 ? 11 : month - 1, year);
  });
  const nextMonthDates = nextMonthFill.map((day) => {
    return getDateObjet(day, month + 1 > 11 ? 0 : month + 1, year);
  });

  const currentMonthDates = daysInMonth.map((day) => {
    return getDateObjet(day, month, year);
  });

  return {
    monthArray: [...prevMonthFill, ...daysInMonth, ...nextMonthFill],
    monthArrayDates: [
      ...prevMonthDates,
      ...currentMonthDates,
      ...nextMonthDates,
    ],
    prevMonthDays: prevMonthDays,
    nextMonthDays: nextMonthDays,
    prevMonthDates: prevMonthDates,
    nextMonthDates: nextMonthDates,
    currentMonthDates: currentMonthDates,
  };
};

export const getDateObjet = (
  day: number,
  month: number,
  year: number,
): Date => {
  return new Date(year, month, day);
};

export const areDateOnSameDay = (first: Date, second: Date): boolean => {
  return (
    first.getDate() === second.getDate() &&
    first.getMonth() === second.getMonth() &&
    first.getFullYear() === second.getFullYear()
  );
};

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
