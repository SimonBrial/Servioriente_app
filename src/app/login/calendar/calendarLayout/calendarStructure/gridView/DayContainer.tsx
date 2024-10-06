"use client";

import { useMantineColorScheme, Container, Box } from "@mantine/core";
import classes from "@/styles/calendar.module.css";
import HeaderDay from "./HeaderDay";
import EventsContainer from "./EventsContainer";
import { useCalendarStore } from "@/store/calendar-store";

export default function DayContainer({ day }: { day: Date }) {
  const { colorScheme } = useMantineColorScheme();
  const { setOnCurrentMonth } = useCalendarStore();
  return (
    <Container p={0} style={{ position: "relative", width: "calc(100%/7)" }}>
      <Container
        style={{
          // width: "calc(100%/7)",
          position: "relative",
        }}
        classNames={{
          root:
            colorScheme === "light"
              ? classes.weekday_container
              : classes.weekday_container_dark,
        }}
      >
        <HeaderDay day={day} />
        <EventsContainer eventDay={day} />
      </Container>
      {!setOnCurrentMonth(day) && (
        <Box
          style={{
            height: "9.1rem",
            width: "100%",
            backgroundColor: "#0000002a",
            position: "absolute",
            zIndex: "100",
            top: "0",
          }}
        ></Box>
      )}
    </Container>
  );
}
