import { Container, Stack } from "@mantine/core";
import { MetricsFilterInput } from "../MetricsFilterInput";
import { EventsContainer } from "./EventsContainer";

export default function page(): JSX.Element {
  return (
    <Container p={0} style={{ maxWidth: "100%", width: "100%" }}>
      <Stack gap={6} p={0}>
        <MetricsFilterInput btnDisable={false} />
        <EventsContainer />
      </Stack>
    </Container>
  );
}
