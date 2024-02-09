import { Container } from "@mantine/core";
import React from "react";

export default function CalendarColumnsView({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Container
      p={0}
      style={{
        border: "1px solid red",
        borderRadius: "6px",
      }}
    >
      {children}
    </Container>
  );
}
