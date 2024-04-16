"use client";

import BtnBack from "@/components/buttons/BtnBack";
import { HiMenu } from "@/icons";
import {
  useMantineColorScheme,
  ActionIcon,
  Container,
  Drawer,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "@/styles/dashboard.module.css";
import heightViewClass from "@/styles/height-view.module.css";
import { TaskListLayout } from "./TaskListLayout";
import TitleSimpleLayout from "@/components/layout/TitleSimpleLayout";

export const TaskContainer = () => {
  const { colorScheme } = useMantineColorScheme();
  const [opened, { open, close }] = useDisclosure(false);
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
            backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#262749",
          },
        }}
        classNames={{
          content: heightViewClass.drawer,
          body: heightViewClass.drawer_body,
        }}
      >
        <Container style={{ width: "100%", height: "100%" }}>
          <Stack gap={8} style={{ height: "100%" }}>
            <TitleSimpleLayout title="Actividades Semanales" />
            <TaskListLayout />
            <BtnBack label="Volver" close={close} />
          </Stack>
        </Container>
      </Drawer>
      <ActionIcon
        variant="transparent"
        size={"xl"}
        aria-label="dashboard"
        onClick={open}
        className={colorScheme === "light" ? classes.menu : classes.menu_dark}
      >
        <HiMenu style={{ fontSize: "2rem" }} />
      </ActionIcon>
    </>
  );
};
