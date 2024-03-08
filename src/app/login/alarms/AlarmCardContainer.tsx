"use client";

import { AlarmCardProps } from "@/interface/interface";
import { Grid, Accordion } from "@mantine/core";
import AlarmCard from "./AlarmCard";

const arrayTest: AlarmCardProps[] = [
  {
    id: crypto.randomUUID(),
    title: "Titulo 1",
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 2",
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 3",
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 4",
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 5",
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 6",
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 7",
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
];
export default function AlarmCardContainer(): JSX.Element {
  let items: JSX.Element[];

  function cardItems(): JSX.Element {
    items = arrayTest.map((item: AlarmCardProps) => {
      return (
        <Grid.Col key={item.id} span={4}>
          <AlarmCard
            key={item.id}
            id={item.id}
            createHour={item.createHour}
            createdAt={item.createdAt}
            description={item.description}
            forDate={item.forDate}
            forHour={item.forHour}
            title={item.title}
          />
        </Grid.Col>
      );
    });

    return (
      <Accordion.Item value="container">
        <Accordion.Control styles={{ chevron: { display: "none" } }}>
          <Grid gutter="xs">{items.slice(0, 3)}</Grid>
        </Accordion.Control>
        <Accordion.Panel>
          <Grid gutter="xs">{items.slice(3)}</Grid>
        </Accordion.Panel>
      </Accordion.Item>
    );
  }

  return <Accordion defaultValue="">{cardItems()}</Accordion>;
}
