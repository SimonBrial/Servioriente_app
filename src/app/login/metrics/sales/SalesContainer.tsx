import { ScrollArea, Stack } from "@mantine/core";
// import { SalesCardContainer } from "./SalesCardContainer";
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
      >
        <Stack
          gap={4}
          style={{
            maxWidth: "100%",
            width: "100%",
          }}
        >
          {/* <ChartContainer key={crypto.randomUUID()} /> */}

          <SalesCardContainer key={crypto.randomUUID()} />
          <SalesCardContainer key={crypto.randomUUID()} />
          <SalesCardContainer key={crypto.randomUUID()} />
          <SalesCardContainer key={crypto.randomUUID()} />
          <SalesCardContainer key={crypto.randomUUID()} />
          <SalesCardContainer key={crypto.randomUUID()} />
          <SalesCardContainer key={crypto.randomUUID()} />
          <SalesCardContainer key={crypto.randomUUID()} />
          <SalesCardContainer key={crypto.randomUUID()} />
        </Stack>
      </ScrollArea>
    </Stack>
  );
};
