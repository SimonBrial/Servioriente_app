"use client";

import { ScrollArea, Stack } from "@mantine/core";
import InsideContainer from "@/components/container/InsideContainer";
import { useMediaQuery } from "@mantine/hooks";
import { SalesCardContainer } from "./SalesCardContainer";

export const SalesContainer = () => {
  const matches = useMediaQuery("(max-width: 1280px)");
  return (
    <InsideContainer offset={162} withBackground={false}>
      <ScrollArea
        h={matches ? "81vh" : "77vh"}
        style={{ borderRadius: "6px", margin: "0", }}
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
          <SalesCardContainer />
          <SalesCardContainer />
          <SalesCardContainer />
          <SalesCardContainer />
          <SalesCardContainer />
          <SalesCardContainer />
          <SalesCardContainer />
          <SalesCardContainer />
          <SalesCardContainer />
          <SalesCardContainer />
          <SalesCardContainer />
        </Stack>
      </ScrollArea>
    </InsideContainer>
  );
};
