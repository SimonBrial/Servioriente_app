"use client";

import {
  useMantineColorScheme,
  ScrollArea,
  Container,
  Stack,
} from "@mantine/core";
import classes from "@/styles/dashboard.module.css";
import heightViewClass from "@/styles/height-view.module.css";
import TaskDaycontainer from "./TaskDaycontainer";
import { useDashboardStore } from "@/store/dashboard-store";

export const TaskListLayout = () => {
  const { colorScheme } = useMantineColorScheme();
  const { TaskList } = useDashboardStore();
  return (
    <Container
      style={{ width: "100%", padding: "0" }}
      classNames={{
        root:
          colorScheme === "light"
            ? classes.containerDrawer
            : classes.containerDrawer_dark,
      }}
    >
      <ScrollArea
        offsetScrollbars
        scrollbarSize={2}
        classNames={{ root: heightViewClass.drawer_scrollarea }}
      >
        <Stack gap={4} p={10}>
          {TaskList.map((task, index) => (
            <TaskDaycontainer key={index} taskToday={task.taskToday}/>
          ))}
        </Stack>
      </ScrollArea>
    </Container>
  );
};
