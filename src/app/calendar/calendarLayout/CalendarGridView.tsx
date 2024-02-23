"use client";

import InsideContainer from "@/components/container/InsideContainer";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CalendarContainer } from "./calendarStructure/CalendarContainer";
import { MOCKEVENTS } from "@/data/calendarDaysAndMonth";

export const CalendarGridView = () => {
  // const matches = useMediaQuery("(max-width: 1280px)");

  return (
    <InsideContainer
      offset={110}
      withBackground
      withBorder
      key={crypto.randomUUID()}
    >
      <CalendarContainer startingDate={new Date()} eventsArr={MOCKEVENTS}/>
    </InsideContainer>
  );
};

/* <FullCalendar
        locale={esLocale}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: "event 1", date: "2024-02-01" },
          { title: "event 2", date: "2024-02-02" },
          { title: "event 2", date: "2024-02-03" },
        ]}
        height={matches ? 745 : 580}
        viewClassNames={classes.prueba}
        titleFormat={{ year: "numeric", month: "long" }}
      /> */
