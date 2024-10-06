"use client";

import { useMantineColorScheme, Container, Flex } from "@mantine/core";
import classes from "@/styles/calendar.module.css";
import { weekDays } from "@/data/calendarDaysAndMonth";

export default function DayWeek() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex gap={0}>
      {weekDays.map((day: string, index: number) => (
        <Container
          fw={700}
          key={index}
          classNames={{
            root:
              colorScheme === "light"
                ? classes.dayHeader
                : classes.dayHeader_dark,
          }}
        >
          {day}
        </Container>
      ))}
    </Flex>
  );
}
