"use client";

import React from "react";
import classes from "@/styles/calendar.module.css";
import btnClasses from "@/styles/btn-styles.module.css";
import { Center, Divider, Flex, Title, Drawer } from "@mantine/core";
import degreeColor from "@/utils/degreeColor";
import { HiOutlineDotsVertical } from "@/icons";
import { EventCardProps } from "@/interface/interface";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { useDisclosure } from "@mantine/hooks";
import DescriptionEventLayout from "../../../layout/DescriptionEventLayout";
import BtnActionEventSmall from "../../../buttons/BtnActionEventSmall";

export const SmallEventCard = ({
  userToassign,
  description,
  cardSize,
  degree,
  title,
  date,
  id,
}: EventCardProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        closeOnClickOutside
        position="right"
      >
        <DescriptionEventLayout
          userToassign={userToassign}
          description={description}
          cardSize={cardSize}
          degree={degree}
          close={close}
          title={title}
          date={date}
          id={id}
        />
        {/* <Text>{dayjs(date).format("DD/MM/YYYY - hh: mm A")}</Text> */}
      </Drawer>
      <Flex
        classNames={{
          root: classes.eventCard_sm,
        }}
        justify={"space-between"}
        style={{ backgroundColor: degreeColor(degree)[1] }}
      >
        <Flex gap={4} align={"center"} onClick={open} style={{ width: "100%" }}>
          <Divider
            orientation="vertical"
            size={"lg"}
            style={{ borderRadius: "10px" }}
            color={degreeColor(degree)[0]}
          />
          <Title order={6}>
            {title.length > 18
              ? capitalizeFirstLetter(title.slice(0, 18)) + "..."
              : capitalizeFirstLetter(title)}
          </Title>
        </Flex>
        <BtnActionEventSmall />
      </Flex>
    </>
  );
};
