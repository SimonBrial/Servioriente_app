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
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { SocialMedia } from "@/interface/interface";
import classes from "@/styles/dashboard.module.css";
import { socialRedColor } from "@/utils/socialRedColor";

export default function SocialMediaItem({ rating, title, id }: SocialMedia) {
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
    <Box
      // key={id}
      ref={setNodeRef}
      style={style}
      className={
        colorScheme === "light"
          ? classes.dashboardItem_row
          : classes.dashboardItem_row_dark
      }
      p={4}
    >
      <Flex justify={"space-between"} align={"center"}>
        <Center {...attributes} {...listeners}>
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
        <Text style={{ textAlign: "center" }}>{rating}</Text>
      </Flex>
    </Box>
  );
}
