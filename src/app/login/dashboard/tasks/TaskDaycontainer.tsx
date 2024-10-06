/* eslint-disable @typescript-eslint/indent */
"use client";

import { useDisclosure } from "@mantine/hooks";
import {
  useMantineColorScheme,
  Collapse,
  Stack,
  Badge,
  Title,
  Text,
  Flex,
  Box,
} from "@mantine/core";
import classes from "@/styles/dashboard.module.css";
import { TaskDayItem } from "./TaskDayItem";
import { TaskDayCardProps } from "@/interface/interface";
import React from "react";

export default function TaskDaycontainer({
  taskToday,
}: {
  taskToday: TaskDayCardProps[];
}) {
  const [opened, { toggle }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();
  return (
    <Box style={{ marginTop: "0.4rem" }}>
      <Flex
        onClick={toggle}
        justify={"space-between"}
        align={"center"}
        classNames={{
          root:
            colorScheme === "light"
              ? classes.containerDay_header
              : classes.containerDay_header_dark,
        }}
      >
        <Title order={4}>12 - 02 - 2024</Title>
        <Badge
          radius={"sm"}
          color={colorScheme === "light" ? "#115dfe" : "#52A5E0"}
        >
          5
        </Badge>
      </Flex>

      <Collapse
        transitionTimingFunction="linear"
        transitionDuration={250}
        in={opened}
        className={
          colorScheme === "light"
            ? classes.containerDay_collapse
            : classes.containerDay_collapse_dark
        }
      >
        <Stack gap={3}>
          {taskToday.length > 0 ? (
            <>
              {taskToday.map((task) => {
                const {
                  userToassign,
                  description,
                  degree,
                  idTask,
                  admin,
                  title,
                } = task;
                return (
                  <TaskDayItem
                    userToassign={userToassign}
                    description={description}
                    idTask={idTask}
                    degree={degree}
                    admin={admin}
                    title={title}
                    key={idTask}
                  />
                );
              })}
            </>
          ) : (
            <Text>Vacio</Text>
          )}
        </Stack>
      </Collapse>
    </Box>
  );
}
