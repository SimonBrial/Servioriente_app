import { ScrollArea, Stack } from "@mantine/core";
import { MetricsFilterInput } from "../MetricsFilterInput";
import { HistoryCard } from "./HistoryCard";
import heightClasses from "@/styles/height-view.module.css"

export const HistoryContainer = () => {
  return (
    <Stack p={0} gap={6}>
      <MetricsFilterInput btnDisable={false} />
      <ScrollArea
        className={heightClasses.metrics_container}
        scrollbarSize={2}
        style={{ padding: "0 0.2rem" }}
      >
        <Stack gap={4}>
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
        </Stack>
      </ScrollArea>
    </Stack>
  );
};
