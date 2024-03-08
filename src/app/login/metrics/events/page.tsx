import { Container } from "@mantine/core";
import { EventsContainer } from "./EventsContainer";

export default function page(): JSX.Element {
  return (
    <Container p={0} style={{ maxWidth: "100%", width: "100%" }}>
      <EventsContainer />
    </Container>
  );
}
