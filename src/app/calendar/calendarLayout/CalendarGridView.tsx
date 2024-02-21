"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import esLocale from "@fullcalendar/core/locales/es";
import InsideContainer from "@/components/container/InsideContainer";
import classes from "@/styles/calendar.module.css";
import { useMediaQuery } from "@mantine/hooks";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css"
import dayjs from "dayjs";

const localizer = dayjsLocalizer(dayjs);

export const CalendarGridView = () => {
  const matches = useMediaQuery("(max-width: 1280px)");

  return (
    <InsideContainer
      offset={200}
      withBackground
      withBorder={false}
      key={crypto.randomUUID()}
    >
      {/* <FullCalendar
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
      /> */}
      <Calendar
        localizer={localizer}
        events={[
          { title: "event 1", date: "2024-02-01" },
          { title: "event 2", date: "2024-02-02" },
          { title: "event 2", date: "2024-02-03" },
        ]}
        startAccessor="start"
        endAccessor="end"
        // style={{ height: 500 }}
        height={matches ? 745 : 580}
      />
    </InsideContainer>
  );
};
