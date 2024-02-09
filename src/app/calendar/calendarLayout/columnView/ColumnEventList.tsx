"use client";

import { TitleLayout } from "@/components/layout/TitleLayout";
import { EventCardProps } from "@/interface/interface";
import {
  Badge,
  Container,
  Flex,
  ScrollArea,
  Stack,
  useMantineColorScheme,
} from "@mantine/core";
import classes from "@/styles/calendar.module.css";
import { useMediaQuery } from "@mantine/hooks";
import { EventCardLayout } from "../EventCardLayout";
import { eventCardArray } from "@/data/eventCardsData";

export const ColumnEventList = () => {
  const { colorScheme } = useMantineColorScheme();
  const matches = useMediaQuery("(max-width: 1280px)");
  return (
    <Container style={{ width: "100%", height: "100%" }} p={0}>
      <Stack gap={4}>
        <Flex align={"center"} style={{ width: "100%", position: "relative" }}>
          <TitleLayout color="" icon="" onText title="31 - Enero - 2024" />
          <Badge style={{ position: "absolute", right: "0.5rem" }}>
            {eventCardArray.length}
          </Badge>
        </Flex>
        <Container
          h={matches ? "72.2vh" : "66.5vh"}
          classNames={{
            root:
              colorScheme === "light"
                ? classes.dayEventList
                : classes.dayEventList_dark,
          }}
        >
          <ScrollArea
            h={matches ? "81.8vh" : "79vh"}
            offsetScrollbars
            scrollbarSize={2}
          >
            <Stack gap={4}>
              {eventCardArray.map((eventCard: EventCardProps) => {
                const { degree, desription, id, title, userToassign } =
                  eventCard;
                return (
                  <EventCardLayout
                    smallSize={false}
                    userToassign={userToassign}
                    desription={desription}
                    degree={degree}
                    title={title}
                    key={id}
                    id={id}
                  />
                );
              })}
            </Stack>
          </ScrollArea>
        </Container>
      </Stack>
    </Container>
  );
};
