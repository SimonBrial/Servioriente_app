"use client";

import { MdOutlineDragIndicator } from "@/icons";
import {
  useMantineColorScheme,
  Center,
  Badge,
  Text,
  Flex,
  Grid,
  Box,
} from "@mantine/core";
import { underScoreColor } from "@/utils/underScoreColor";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { DashboardProcessListItems } from "@/interface/interface";
import classes from "@/styles/dashboard.module.css";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

export const DashboardProcessListItem = ({
  processTitle,
  yesterday,
  process,
  today,
  id,
}: DashboardProcessListItems) => {
  const { colorScheme } = useMantineColorScheme();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Box
      style={style}
      ref={setNodeRef}
      {...attributes}
      className={
        colorScheme === "light"
          ? classes.dashboardItem_row
          : classes.dashboardItem_row_dark
      }
      p={0}
    >
      <Flex justify={"space-between"} align={"center"} p={0}>
        <Grid.Col span={1}>
          <Center className="handler" {...listeners}>
            <MdOutlineDragIndicator />
          </Center>
        </Grid.Col>
        <Grid.Col span={7} style={{ textAlign: "center" }}>
          <Badge color={underScoreColor(capitalizeFirstLetter(process))}>
            {processTitle}
          </Badge>
        </Grid.Col>
        <Grid.Col span={2} style={{ textAlign: "center" }}>
          <Text>{today}</Text>
        </Grid.Col>
        <Grid.Col span={2} style={{ textAlign: "center" }}>
          <Text>{yesterday}</Text>
        </Grid.Col>
      </Flex>
    </Box>
  );
};
