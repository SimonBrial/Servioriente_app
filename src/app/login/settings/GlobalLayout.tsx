import InsideContainer from "@/components/container/InsideContainer";
import { Stack } from "@mantine/core";
import React from "react";

export const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <InsideContainer
      key={crypto.randomUUID()}
      withBackground
      offset={130}
      withBorder
    >
      <Stack
        gap={4}
        style={{
          width: "70%",
          margin: "0 auto",
          height: "100%",
          padding: "1rem",
        }}
        justify="space-between"
      >
        {children}
      </Stack>
    </InsideContainer>
  );
};
