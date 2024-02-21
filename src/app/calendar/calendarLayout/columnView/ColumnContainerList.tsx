import { ScrollArea, Stack } from "@mantine/core";
import React from "react";
import classes from "@/styles/carousel.module.css";
import { ColumnEventContainer } from "./ColumnEventContainer";
import { calendarData } from "@/data/calendarData";
import heightClasses from "@/styles/heightView.module.css"

export const ColumnContainerList = () => {
  return (
    <ScrollArea
      scrollbarSize={2}
      p={0}
      // h={matches ? "71.5vh" : "65.5vh"}
      classNames={{ root: classes.columnCard_container }}
      className={heightClasses.calendarColumn__right_dates}
      offsetScrollbars
      scrollHideDelay={0}
    >
      <Stack gap={4} style={{ padding: "0.1rem 0" }}>
        {calendarData.week_01.map((dayEvent, index) => (
          <ColumnEventContainer
            key={dayEvent.id}
            containerDate={dayEvent.date}
            containerEvents={dayEvent.events.length}
            dayNumber={index + 1}
            eventsDay={dayEvent.events}
          />
        ))}
      </Stack>
    </ScrollArea>
  );
};
