"use client";

import {
  useMantineColorScheme,
  Container,
  Badge,
  Stack,
  Flex,
  Text,
  Drawer,
} from "@mantine/core";
import React from "react";
import classes from "@/styles/calendar.module.css";
import { EventCardLayout } from "./EventCardLayout";
import { EventCardProps } from "@/interface/interface";
import { useDisclosure } from "@mantine/hooks";
import { DayEventListLayout } from "../DayEventListLayout";
import BtnBack from "@/components/buttons/BtnBack";

interface DayContainerProps {
  dayNumber: number | string;
  dayEventArray: EventCardProps[];
  currentDay: boolean;
}

export const DayContainer = ({
  dayEventArray,
  currentDay,
  dayNumber,
}: DayContainerProps) => {
  const { colorScheme } = useMantineColorScheme();
  const [opened, { open, close }] = useDisclosure(false);

  function dayEventList(dayEventArray: EventCardProps[]) {
    return dayEventArray.map((dayEvent: EventCardProps) => {
      const { degree, desription, id, title, userToassign } = dayEvent;
      return (
        <EventCardLayout
          userToassign={userToassign}
          desription={desription}
          degree={degree}
          title={title}
          smallSize
          key={id}
          id={id}
        />
      );
    });
  }
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        closeOnClickOutside={false}
        position="right"
        styles={{
          content: {
            backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#9a90ef1a",
          },
        }}
      >
        <Stack
          gap={8}
          style={{ width: "100%", padding: "0", height: "95vh" }}
          justify="space-between"
        >
          <DayEventListLayout
            dayEventArray={dayEventArray}
            title="23 - Enero - 2024"
          />
          <BtnBack close={close} label="Volver" />
        </Stack>
      </Drawer>
      <Container
        classNames={{
          root:
            colorScheme === "light"
              ? classes.weekday_container
              : classes.weekday_container_dark,
        }}
        // styles={{ root: { backgroundColor: currentDay ? "red" : "" } }}
      >
        <Flex
          classNames={{
            root:
              colorScheme === "light" ? classes.weekday : classes.weekday_dark,
          }}
          style={{
            position: "relative",
            backgroundColor: currentDay ? "red" : "",
          }}
          align={"center"}
          onClick={open}
        >
          <Text style={{ margin: "0 auto" }}>{dayNumber}</Text>
          {dayEventArray.length > 2 ? (
            <Badge
              style={{ position: "absolute", right: "0.2rem" }}
              color={colorScheme === "light" ? "#115dfe" : "#52A5E0"}
            >
              +{dayEventList(dayEventArray).length - 3}
            </Badge>
          ) : (
            <></>
          )}
        </Flex>
        <Container
          classNames={{
            root:
              colorScheme === "light"
                ? classes.dayEvents
                : classes.dayEvents_dark,
          }}
        >
          {dayEventList(dayEventArray).length < 2 ? (
            <Stack gap={4}>{dayEventList(dayEventArray)}</Stack>
          ) : (
            <Stack gap={4}>{dayEventList(dayEventArray).slice(0, 3)}</Stack>
          )}
        </Container>
      </Container>
    </>
  );
};
