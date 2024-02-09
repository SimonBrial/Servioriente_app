"use client";

import { EventsBigCard } from "./EventsBigCard";
import { ScrollArea, Stack } from "@mantine/core";
import InsideContainer from "@/components/container/InsideContainer";
import { useMediaQuery } from "@mantine/hooks";

export const EventsContainer = () => {
  const matches = useMediaQuery("(max-width: 1280px)");
  return (
    <InsideContainer offset={162} withBackground>
      <ScrollArea
        h={matches ? "81vh" : "77vh"}
        style={{ borderRadius: "6px", overflow: "hidden" }}
        offsetScrollbars
        scrollbarSize={2}
      >
        <Stack gap={4}>
          <EventsBigCard />
          <EventsBigCard />
          <EventsBigCard />
          <EventsBigCard />
          <EventsBigCard />
          <EventsBigCard />
          <EventsBigCard />
          <EventsBigCard />
          <EventsBigCard />
          <EventsBigCard />
          <EventsBigCard />
          <EventsBigCard />
          <EventsBigCard />
          <EventsBigCard />
          <EventsBigCard />
          <EventsBigCard />
          <EventsBigCard />
          <EventsBigCard />
          <EventsBigCard />
          <EventsBigCard />
          <EventsBigCard />
          <EventsBigCard />
          <EventsBigCard />
        </Stack>
      </ScrollArea>
    </InsideContainer>
  );
};
