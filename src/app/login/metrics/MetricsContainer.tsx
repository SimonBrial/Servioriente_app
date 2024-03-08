import { Container } from "@mantine/core";
import React from "react";

export default function MetricsContainer({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Container p={0} style={{ maxWidth: "100%", width: "100%" }}>
      {children}
    </Container>
  );
}
