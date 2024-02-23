"use client";

import { Container, Flex, useMantineColorScheme } from "@mantine/core";
import React from "react";
import DayHeaderClasses from "@/styles/calendar.module.css";
import { weekDays } from "@/data/calendarDaysAndMonth";

export const DayHeader = () => {
  const { colorScheme } = useMantineColorScheme();

  function dayHeader(daysArray: string[]): JSX.Element[] {
    return daysArray.map((day: string, index: number) => (
      <Container
        key={index}
        classNames={{
          root:
            colorScheme === "light"
              ? DayHeaderClasses.dayHeader
              : DayHeaderClasses.dayHeader_dark,
        }}
      >
        {day}
      </Container>
    ));
  }

  return <Flex gap={0}>{dayHeader(weekDays)}</Flex>;
};
