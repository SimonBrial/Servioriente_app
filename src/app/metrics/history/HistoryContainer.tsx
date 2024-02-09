"use client";

import { ScrollArea, Stack } from "@mantine/core";
import { MetricsFilterInput } from "../MetricsFilterInput";
import { useMediaQuery } from "@mantine/hooks";
import { HistoryCard } from "./HistoryCard";

export const HistoryContainer = () => {
  const matches = useMediaQuery("(max-width: 1280px)");
  return (
    <Stack p={0}>
      <MetricsFilterInput btnDisable={false} />
      <ScrollArea
        scrollbarSize={2}
        h={matches ? "79.5vh" : "75vh"}
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
