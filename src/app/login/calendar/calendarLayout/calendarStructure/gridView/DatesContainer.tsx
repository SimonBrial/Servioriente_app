"use client";

import { ScrollArea, Stack, Flex } from "@mantine/core";
import { getSortedDays } from "@/utils/calendarFunctions";
import heightClasses from "@/styles/height-view.module.css";
import DayWeek from "./DayWeek";
import DayContainer from "./DayContainer";
import { useCalendarStore } from "@/store/calendar-store";

export default function DatesContainer() {
  const { currentMonth, currentYear } = useCalendarStore();

  const dateShow = () => {
    const { monthArrayDates } = getSortedDays(currentMonth, currentYear);

    return monthArrayDates.map((date, index) => {
      return <DayContainer key={index} day={date} />;
    });
  };

  return (
    <Stack gap={0} className={heightClasses.calendarGrid_father_container}>
      <DayWeek />
      <ScrollArea
        className={heightClasses.calendarGrid_container}
        scrollHideDelay={0}
        scrollbarSize={0}
        offsetScrollbars
        p={0}
      >
        <Flex wrap="wrap">{dateShow()}</Flex>
      </ScrollArea>
    </Stack>
  );
}
