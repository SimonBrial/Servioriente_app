import { MOCKEVENTS } from "@/data";
import { EventsArray } from "@/interface/interface";
import { areDateOnSameDay, getDateObjet } from "@/utils/calendarFunctions";
import { create } from "zustand";

interface CalendarStoreProps {
  showCreateEventLayout: boolean;
  currentYear: number;
  currentMonth: number;
  currentDay: number;
  eventsArray: EventsArray[];
  fnShowCreateEventLayout: (stateValue: boolean) => void;
  fnPrevMonth: () => void;
  fnNextMonth: () => void;
  fnEventListGenerator: (date: Date) => EventsArray[];
  fnIsDateInCurrentMonth: (day: number, month: number, year: number) => boolean;
  fnCreateEvent: (eventToCreate: EventsArray) => Promise<void>;
  setCurrentMonth: (currentMonth: number) => void;
  setCurrentYear: (currentMonth: number) => void;
  setSameDay: (day: number, month: number) => boolean;
  setOnCurrentMonth: (date: Date) => boolean;
}

const dt = new Date();

export const useCalendarStore = create<CalendarStoreProps>()((set, get) => {
  return {
    // Data
    eventsArray: MOCKEVENTS,
    showCreateEventLayout: false,
    sameDay: false,
    onCurrentMonth: false,
    currentYear: dt.getFullYear(),
    currentMonth: dt.getMonth(),
    currentDay: dt.getDate(),

    // ------------ Funtions to manipulate the data ------------
    setCurrentMonth: (currentMonth) => {
      set({ currentMonth });
    },
    setCurrentYear: (currentYear) => {
      set({ currentYear });
    },
    setSameDay: (day, month) => {
      const { currentYear } = get();
      const dateObj = getDateObjet(day, month, currentYear);
      const onTheDay = areDateOnSameDay(new Date(), dateObj);
      return onTheDay;
    },
    setOnCurrentMonth: (date) => {
      const { currentMonth } = get();
      const onCurrentMonth = date.getMonth() === currentMonth ? true : false;
      return onCurrentMonth;
    },
    fnShowCreateEventLayout: (stateValue: boolean) => {
      set({ showCreateEventLayout: !stateValue });
    },
    fnNextMonth: () => {
      const { setCurrentMonth, currentMonth, currentYear, setCurrentYear } =
        get();
      if (currentMonth < 11) {
        setCurrentMonth(currentMonth + 1);
      } else {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      }
    },
    fnPrevMonth: () => {
      const { setCurrentMonth, currentMonth, currentYear, setCurrentYear } =
        get();
      if (currentMonth > 0) {
        setCurrentMonth(currentMonth - 1);
      } else {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      }
    },
    fnEventListGenerator: (date) => {
      const { currentMonth, currentYear, eventsArray } = get();
      if (eventsArray.length > 0) {
        return eventsArray.flatMap((event) => {
          if (
            date.getDate() === event.date.getDate() &&
            date.getMonth() === event.date.getMonth() &&
            areDateOnSameDay(
              getDateObjet(date.getDate(), currentMonth, currentYear),
              event.date,
            )
          ) {
            return event;
          }
          return []; // Devuelve un array vacío en lugar de `undefined`
        });
      }
      return [];
    },
    fnIsDateInCurrentMonth: (day, month, year) => {
      const date = new Date(year, month, day);
      return date.getMonth() === month && date.getFullYear() === year;
    },
    fnCreateEvent: async (event) => {
      try {
        const { eventsArray } = get();
        if (event !== undefined) {
          eventsArray.push(event);
          set({ eventsArray });
        }
        set({ eventsArray });
      } catch (err) {
        console.log(err);
      }
    },
  };
});
