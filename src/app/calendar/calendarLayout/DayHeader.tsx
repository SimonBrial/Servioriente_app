"use client";

import { Container, useMantineColorScheme } from "@mantine/core";
import React from "react";
import DayHeaderClasses from "@/styles/calendar.module.css";
import { weekDays } from "@/data/calendarDaysAndMonth";

export const DayHeader = () => {
  const { colorScheme } = useMantineColorScheme();

  function dayHeader(daysArray: string[]): JSX.Element[] {
    return daysArray.map((day: string, index: number) => (
      <Container
        classNames={{
          root:
            colorScheme === "light"
              ? DayHeaderClasses.dayHeader
              : DayHeaderClasses.dayHeader_dark,
        }}
        key={index}
      >
        {day}
      </Container>
    ));
  }

  return <>{dayHeader(weekDays)}</>;
};
