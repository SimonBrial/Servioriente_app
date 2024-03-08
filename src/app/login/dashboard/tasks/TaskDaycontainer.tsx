/* eslint-disable @typescript-eslint/indent */
"use client";

import { useDisclosure } from "@mantine/hooks";
import {
  useMantineColorScheme,
  Collapse,
  Stack,
  Badge,
  Title,
  Flex,
  Box,
} from "@mantine/core";
import classes from "@/styles/dashboard.module.css";
import { TaskDayItem } from "./TaskDayItem";

export const TaskDaycontainer = () => {
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
          <TaskDayItem
            admin
            degree="Muy Importante"
            desription="Prueba"
            title="Prueba 1 Prueba 1 Prueba 1 Prueba 1 Prueba 1"
            userToassign="Mario Hurtado"
          />
          <TaskDayItem
            admin
            degree="Muy Importante"
            desription="Prueba"
            title="Prueba 1 Prueba 1 Prueba 1 Prueba 1 Prueba 1"
            userToassign="Mario Hurtado"
          />
          <TaskDayItem
            admin
            degree="Muy Importante"
            desription="Prueba"
            title="Prueba 1 Prueba 1 Prueba 1 Prueba 1 Prueba 1"
            userToassign="Mario Hurtado"
          />
          <TaskDayItem
            admin
            degree="Muy Importante"
            desription="Prueba"
            title="Prueba 1 Prueba 1 Prueba 1 Prueba 1 Prueba 1"
            userToassign="Mario Hurtado"
          />
          <TaskDayItem
            admin
            degree="Muy Importante"
            desription="Prueba"
            title="Prueba 1 Prueba 1 Prueba 1 Prueba 1 Prueba 1"
            userToassign="Mario Hurtado"
          />
        </Stack>
      </Collapse>
    </Box>
  );
};
