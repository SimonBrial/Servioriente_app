"use client";

import { Grid, ScrollArea, Stack } from "@mantine/core";
import { MetricsFilterInput } from "../MetricsFilterInput";
import heightClasses from "@/styles/height-view.module.css";
import { SalesCardContainer } from "./SalesCardContainer";

export const SalesContainer = () => {
  return (
    <Stack gap={6} p={0}>
      <MetricsFilterInput btnDisable />
      <ScrollArea
        className={heightClasses.metrics_container}
        style={{ borderRadius: "6px", margin: "0" }}
        offsetScrollbars
        scrollbarSize={2}
        scrollbars={"y"}
        p={4}
      >
        <Grid gutter={"sm"}>
          <Grid.Col span={6}>
            <Stack
              gap={4}
              style={{
                maxWidth: "100%",
                width: "100%",
              }}
            >
              <SalesCardContainer key={crypto.randomUUID()} />
              <SalesCardContainer key={crypto.randomUUID()} />
              <SalesCardContainer key={crypto.randomUUID()} />
              <SalesCardContainer key={crypto.randomUUID()} />
            </Stack>
          </Grid.Col>
          <Grid.Col span={6}>
            <Stack
              gap={4}
              style={{
                maxWidth: "100%",
                width: "100%",
              }}
            >
              <SalesCardContainer key={crypto.randomUUID()} />
              <SalesCardContainer key={crypto.randomUUID()} />
              <SalesCardContainer key={crypto.randomUUID()} />
              <SalesCardContainer key={crypto.randomUUID()} />
            </Stack>
          </Grid.Col>
        </Grid>
      </ScrollArea>
    </Stack>
  );
};

{
  /* <ChartContainer key={crypto.randomUUID()} /> */
}
