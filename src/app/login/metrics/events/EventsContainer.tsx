import { EventsBigCard } from "./EventsBigCard";
import { ScrollArea, Stack } from "@mantine/core";
import { MetricsFilterInput } from "../MetricsFilterInput";
import heightClasses from "@/styles/height-view.module.css";

export const EventsContainer = () => {
  return (
    <Stack gap={6} p={0}>
      <MetricsFilterInput btnDisable={false} />
      <ScrollArea
        className={heightClasses.metrics_container}
        style={{ borderRadius: "6px", overflow: "hidden" }}
        offsetScrollbars
        scrollbarSize={2}
      >
        <Stack gap={4}>
          <EventsBigCard key={crypto.randomUUID()} />
          <EventsBigCard key={crypto.randomUUID()} />
          <EventsBigCard key={crypto.randomUUID()} />
          <EventsBigCard key={crypto.randomUUID()} />
          <EventsBigCard key={crypto.randomUUID()} />
          <EventsBigCard key={crypto.randomUUID()} />
          <EventsBigCard key={crypto.randomUUID()} />
          <EventsBigCard key={crypto.randomUUID()} />
          <EventsBigCard key={crypto.randomUUID()} />
        </Stack>
      </ScrollArea>
    </Stack>
  );
};
