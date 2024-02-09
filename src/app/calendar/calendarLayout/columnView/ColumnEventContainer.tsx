import { Container, Stack, useMantineColorScheme } from "@mantine/core";
import React from "react";
import { ColumnEventTitle } from "./ColumnEventTitle";
import { ColumnContainerEvent } from "./ColumnContainerEvent";
import { EventCardData } from "@/interface/interface";

interface ColumnEventTitleProps {
  dayNumber: number;
  containerDate: string | null | undefined;
  containerEvents: number;
}

interface ColumnEventsContainerProps extends ColumnEventTitleProps {
  eventsDay: EventCardData[];
}

export const ColumnEventContainer = ({
  containerEvents,
  containerDate,
  dayNumber,
  eventsDay,
}: ColumnEventsContainerProps) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Container
      styles={(theme) => ({
        root: {
          margin: "0 0.2rem 0 0",
          border:
            colorScheme === "light"
              ? `1px solid ${theme.colors.lightTheme[2]}`
              : `1px solid ${theme.colors.darkTheme[9]}`,
          padding: "0.5rem",
          borderRadius: "6px",
        },
      })}
    >
      <Stack gap={4}>
        <ColumnEventTitle
          containerDate={containerDate}
          containerEvents={containerEvents}
          dayNumber={dayNumber}
        />
        <ColumnContainerEvent eventCardArray={eventsDay} />
      </Stack>
    </Container>
  );
};
