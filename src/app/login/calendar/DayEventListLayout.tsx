"use client";

import { TitleLayout } from "@/components/layout/TitleLayout";
import { EventCardProps } from "@/interface/interface";
import {
  useMantineColorScheme,
  ScrollArea,
  Container,
  Stack,
} from "@mantine/core";
import React from "react";
import { EventCardLayout } from "./calendarLayout/calendarStructure/cards/EventCardLayout";
import classes from "@/styles/calendar.module.css";
import { useMediaQuery } from "@mantine/hooks";

export const DayEventListLayout = ({
  dayEventArray,
  title,
}: {
  dayEventArray: EventCardProps[];
  title: string;
}) => {
  const { colorScheme } = useMantineColorScheme();
  const matches = useMediaQuery("(max-width: 1280px)");
  return (
    <Container style={{ width: "100%", height: "100%" }} p={0}>
      <Stack gap={4}>
        <TitleLayout color="" icon="" onText title={title} />
        <Container
          h={matches ? "85vh" : "83vh"}
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
              {dayEventArray.map((eventCard: EventCardProps) => {
                const { degree, desription, id, title, userToassign } =
                  eventCard;
                return (
                  <EventCardLayout
                    cardSize="small"
                    date={new Date()}
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
