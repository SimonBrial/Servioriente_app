"use client";

import { Checkbox, Flex, useMantineColorScheme } from "@mantine/core";
import React from "react";
import classes from "@/styles/generalStyles.module.css";

export const SidebarSectionSelection = ({
  selected,
  label,
}: {
  selected: boolean;
  label: string;
}) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex justify={"space-between"} align={"center"} px={15}>
      {label}{" "}
      <Checkbox
        defaultChecked
        color={colorScheme === "light" ? "#115dfe" : "#52A5E0"}
        classNames={{
          input:
            colorScheme === "light" ? classes.checkbox : classes.checkbox_dark,
        }}
      />
    </Flex>
  );
};
