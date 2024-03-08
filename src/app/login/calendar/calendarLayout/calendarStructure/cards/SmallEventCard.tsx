import React from "react";
import classes from "@/styles/calendar.module.css";
import { Center, Divider, Flex, Title } from "@mantine/core";
import degreeColor from "@/utils/degreeColor";
import { HiOutlineDotsVertical } from "@/icons";
import { SmallEventCardProps } from "@/interface/interface";

export const SmallEventCard = ({ degree, title, date }: SmallEventCardProps) => {
  return (
    <Flex
      classNames={{
        root: classes.eventCard_sm,
      }}
      justify={"space-between"}
      style={{ backgroundColor: degreeColor(degree)[1] }}
    >
      <Flex gap={4} align={"center"}>
        <Divider
          orientation="vertical"
          size={"lg"}
          style={{ borderRadius: "10px" }}
          color={degreeColor(degree)[0]}
        />
        <Title order={6}>{title.slice(0, 12)}...</Title>
      </Flex>
      <Center>
        <HiOutlineDotsVertical />
      </Center>
    </Flex>
  );
};
