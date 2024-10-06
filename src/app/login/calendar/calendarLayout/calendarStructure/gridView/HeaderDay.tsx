"use client";

import {
  useMantineColorScheme,
  Drawer,
  Badge,
  Flex,
  Text,
} from "@mantine/core";
import classes from "@/styles/calendar.module.css";
import { useDisclosure } from "@mantine/hooks";
import EventListLayout from "../../../layout/EventListLayout";
import { useCalendarStore } from "@/store/calendar-store";
import React from "react";

export default function HeaderDay({ day }: { day: Date }) {
  const { colorScheme } = useMantineColorScheme();
  const [opened, { open, close }] = useDisclosure(false);
  const { fnEventListGenerator, setOnCurrentMonth, setSameDay } =
    useCalendarStore();

  const sameDay = setSameDay(day.getDate(), day.getMonth());
  const eventCountOnDay = (currentDay: boolean) => {
    if (!currentDay) {
      return (
        fnEventListGenerator(day).length > 0 && (
          <Badge
            style={{
              position: "absolute",
              right: "0.2rem",
            }}
            color={colorScheme === "light" ? "#115dfe" : "#52A5E0"}
          >
            {fnEventListGenerator(day).length}
          </Badge>
        )
      );
    }
    return (
      fnEventListGenerator(day).length > 0 && (
        <Badge
          variant="white"
          style={{
            position: "absolute",
            right: "0.2rem",
          }}
          color={colorScheme === "light" ? "#115dfe" : "#52A5E0"}
        >
          {fnEventListGenerator(day).length}
        </Badge>
      )
    );
  };

  return (
    <>
      <Drawer
        withCloseButton={false}
        closeOnClickOutside
        position="right"
        opened={opened}
        onClose={close}
      >
        <EventListLayout close={close} day={day} />
      </Drawer>
      <Flex
        onClick={open}
        classNames={{
          root:
            colorScheme === "light"
              ? sameDay
                ? classes.weekday_active
                : classes.weekday
              : sameDay
              ? classes.weekday_dark_active
              : classes.weekday_dark,
        }}
        align={"center"}
      >
        <Text
          style={{
            margin: "0 auto",
          }}
          fw={setOnCurrentMonth(day) ? 700 : 400}
        >
          {day.getDate()}
        </Text>
        {eventCountOnDay(sameDay)}
      </Flex>
    </>
  );
}
