"use client";

import InsideContainer from "@/components/container/InsideContainer";
import { CalendarContainer } from "./calendarStructure/CalendarContainer";

export const CalendarGridView = () => {
  // const matches = useMediaQuery("(max-width: 1280px)");

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
