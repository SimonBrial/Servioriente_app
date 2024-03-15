"use client";

import {
  HiOutlineExclamationCircle,
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
  HiOutlineUser,
  IoClose,
} from "@/icons";
import { Box, Center, Divider, Flex, Stack, Text, Title } from "@mantine/core";
import React from "react";
import classes from "@/styles/general-styles.module.css";
import {
  colorBackgroundArr,
  NotitifacionProps,
  ReturnFn,
} from "@/interface/interface";
import { NotificationsTypes } from "@/types/types";
// import toast, { Toaster } from "react-hot-toast";

/*
{
  "color_name": "Alert - Success",
  "code": "#9AE6B4" "#53b96a"
},
{
  "color_name": "Alert - Warining",
  "code": "#ffc21f"
},
{
  "color_name": "Alert - Error",
  "code": "#E94040"
},
*/

const colorBakground: colorBackgroundArr[] = [
  { type: "Error", colorStr: "#E94040", icon: <IoCloseCircleOutline /> },
  { type: "Info", colorStr: "#004EE5", icon: <HiOutlineUser /> },
  { type: "Success", colorStr: "#53b96a", icon: <IoCheckmarkCircleOutline /> },
  {
    type: "Warning",
    colorStr: "#ffc21f",
    icon: <HiOutlineExclamationCircle />,
  },
];

export const NotificationLayout = ({
  description,
  title,
  close,
  type,
}: NotitifacionProps) => {
  let colorSelected: ReturnFn[] = [
    { colorStr: "", icon: <IoCloseCircleOutline /> },
  ];

  function colorNotification(color: NotificationsTypes): ReturnFn[] {
    colorSelected = colorBakground
      .map((typeTheme) => {
        if (typeTheme.type.toLocaleLowerCase() === color.toLocaleLowerCase()) {
          return { colorStr: typeTheme.colorStr, icon: typeTheme.icon };
        } else {
          return null;
        }
      })
      .filter((colorStr) => colorStr !== null) as ReturnFn[]; // Para garantizar que se entregue un array sin elementos nulos

    return colorSelected;
  }

  return (
    <Box
      className={`${classes.notificationBody}`}
      style={{ backgroundColor: `${colorNotification(type)[0].colorStr}` }}
    >
      <Flex justify={"space-between"} align={"center"} gap={10}>
        <Flex gap={10} align={"center"}>
          <Center style={{ fontSize: "2rem" }}>
            {colorNotification(type)[0].icon}
          </Center>
          <Stack gap={0}>
            <Title order={2}>{title}</Title>
            <Text>{description}</Text>
          </Stack>
        </Flex>
        <Divider orientation="vertical" color="white" />
        <Center
          onClick={() => close()}
          classNames={{ root: classes.notificationClose }}
        >
          <IoClose />
        </Center>
      </Flex>
    </Box>
  );
};
