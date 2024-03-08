import { Container } from "@mantine/core";
import { ColumnContainerList } from "../calendarLayout/calendarStructure/columnView/ColumnContainerList";

export default function page(): JSX.Element {
  /* const myEventsList = [
    {
      start: dayjs("2023-12-18T12:00:00").toDate(),
      end: dayjs("2023-12-18T13:00:00").toDate(),
      title: "Evento 1",
      data: {
        x: 10,
      },
    },
    {
      start: dayjs("2023-12-23T12:00:00").toDate(),
      end: dayjs("2023-12-24T12:00:00").toDate(),
      title: "Evento 1",
      data: {
        x: 20,
      },
    },
  ]; */

  return (
    <Container p={0}>
      <ColumnContainerList />
    </Container>
  );
}
