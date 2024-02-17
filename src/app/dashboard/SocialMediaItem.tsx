/* eslint-disable indent */
"use client";

import { MdOutlineDragIndicator } from "@/icons";
import { Badge, Center, Table, useMantineColorScheme } from "@mantine/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { SocialMedia } from "@/interface/interface";
import classes from "@/styles/dashboard.module.css";
import { socialRedColor } from "@/utils/socialRedColor";

export const SocialMediaItem = ({ rating, title, id }: SocialMedia) => {
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
      {...attributes}
      {...listeners}
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
      <Table.Td>
        <Center>
          <MdOutlineDragIndicator />
        </Center>
      </Table.Td>
      <Table.Td>
        <Badge
          color="red"
          variant="gradient"
          gradient={
            title !== "instagram"
              ? {
                  from: socialRedColor(title),
                  to: socialRedColor(title),
                  deg: 90,
                }
              : { from: "pink", to: "violet", deg: 90 }
          }
        >
          {title}
        </Badge>
      </Table.Td>
      <Table.Td style={{ textAlign: "center" }}>{rating}</Table.Td>
    </Table.Tr>
  );
};
