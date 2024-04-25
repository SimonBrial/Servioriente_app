/* eslint-disable indent */
"use client";

import { MdOutlineDragIndicator } from "@/icons";
import {
  useMantineColorScheme,
  Center,
  Badge,
  Flex,
  Text,
  Box,
} from "@mantine/core";
import { SocialMedia } from "@/interface/interface";
import classes from "@/styles/dashboard.module.css";
import { socialRedColor } from "@/utils/socialRedColor";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

export default function SocialMediaItem({ rating, title, id }: SocialMedia) {
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
      p={4}
    >
      <Flex justify={"space-between"} align={"center"}>
        <Center className="handler" {...listeners}>
          <MdOutlineDragIndicator />
        </Center>
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
        <Text style={{ textAlign: "center", width: "20%" }}>{rating}</Text>
      </Flex>
    </Box>
  );
}
