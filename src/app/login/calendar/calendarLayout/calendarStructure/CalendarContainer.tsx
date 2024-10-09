"use client";

import { Container, Stack } from "@mantine/core";
import InsideContainer from "@/components/container/InsideContainer";
import classes from "@/styles/calendar.module.css";
import DayNavCalendar from "./gridView/DayNavCalendar";
import DatesContainer from "./gridView/DatesContainer";

// TODO: Agregar la opcion para añadir eventos.
// TODO: Ajustar los dias del mes, que no se muevan.
// TODO: Refactorizar todo el codigo. ✅

export default function CalendarContainer() {
  return (
    <InsideContainer
      withBackground
      withBorder={false}
      offset={114}
      key={crypto.randomUUID()}
    >
      <Container className={classes.calendarContainer}>
        <Stack style={{ width: "100%" }}>
          prueba
          <DayNavCalendar />
          <DatesContainer />
        </Stack>
      </Container>
    </InsideContainer>
  );
}

/* const addEvent = (date: Date, event: any) => {
    if (!event.target.classList.contains("StyledEvent")) {
      const text = window.prompt("name");
      if (text !== null) {
        date.setHours(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        setEvents((prev) => [
          ...prev,
          {
            date,
            title: text,
            degree: "Importante",
            id: crypto.randomUUID(),
            userToassign: "Simon Briceño",
            description:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          },
        ]);
      }
    }
  }; */
