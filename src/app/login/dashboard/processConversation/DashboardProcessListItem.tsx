"use client";

import { MdOutlineDragIndicator } from "@/icons";
import { Badge, Center, Table, useMantineColorScheme } from "@mantine/core";
import { underScoreColor } from "@/utils/underScoreColor";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { DashboardProcessListItems } from "@/interface/interface";
import classes from "@/styles/dashboard.module.css";

export const DashboardProcessListItem = ({
  processTitle,
  yesterday,
  process,
  today,
  id,
}: DashboardProcessListItems) => {
  const { colorScheme } = useMantineColorScheme();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id,
      transition: {
        duration: 250,
        easing: "linear",
      },
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <Table.Tr
      key={id}
      ref={setNodeRef}
      style={style}
      classNames={{
        tr:
          colorScheme === "light"
            ? classes.dashboardItem_row
            : classes.dashboardItem_row_dark,
      }}
    >
      <Table.Td {...attributes} {...listeners}>
        <Center>
          <MdOutlineDragIndicator />
        </Center>
      </Table.Td>
      <Table.Td >
        <Badge color={underScoreColor(capitalizeFirstLetter(process))}>
          {processTitle}
        </Badge>
      </Table.Td>
      <Table.Td>{today}</Table.Td>
      <Table.Td>{yesterday}</Table.Td>
    </Table.Tr>
  );
};
