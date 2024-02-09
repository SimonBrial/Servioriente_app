import { Container } from "@mantine/core";
import { ColumnContainerList } from "../../calendarLayout/columnView/ColumnContainerList";

export default function page(): JSX.Element {
  return (
    <Container p={0}>
      <ColumnContainerList />
    </Container>
  );
}
