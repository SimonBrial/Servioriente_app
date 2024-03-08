import { Container } from "@mantine/core";
import { SalesContainer } from "./SalesContainer";

export default function page(): JSX.Element {
  return (
    <Container p={0} style={{ maxWidth: "100%", width: "100%" }}>
      <SalesContainer />
    </Container>
  );
}
