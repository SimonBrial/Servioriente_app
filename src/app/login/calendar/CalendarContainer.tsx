import InsideContainer from "@/components/container/InsideContainer";
// import { Stack } from "@mantine/core";
import React from "react";

export const CalendarContainer = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <InsideContainer offset={182} withBackground={false} withBorder={false} key={crypto.randomUUID()}>
      {/* <Stack gap={4} style={{ maxWidth: "100%", width: "100%", padding: "1rem" }}>
      </Stack> */}
      {children}
    </InsideContainer>
  );
};
