import { Container } from "@mantine/core";
import { MetricsFilterInput } from "./MetricsFilterInput";

export default function page(): JSX.Element {
  return (
    <Container p={0} style={{ maxWidth: "100%", width: "100%" }}>
      <MetricsFilterInput btnDisable />
      prueba
    </Container>
  );
}
