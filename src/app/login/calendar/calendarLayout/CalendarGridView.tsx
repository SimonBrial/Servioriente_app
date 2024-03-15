"use client";

import InsideContainer from "@/components/container/InsideContainer";
import CalendarContainer from "./calendarStructure/CalendarContainer";

export const CalendarGridView = () => {
  return (
    <InsideContainer
      offset={110}
      withBackground
      withBorder
      key={crypto.randomUUID()}
    >
      <CalendarContainer />
    </InsideContainer>
  );
};
