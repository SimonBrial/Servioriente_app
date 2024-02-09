"use client";

import { Checkbox, Flex, useMantineColorScheme } from "@mantine/core";
import React from "react";
import checkboxClasses from "@/styles/sidebarSectionSelection.module.css";

export const SidebarSectionSelection = ({ label }: { label: string }) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex justify={"space-between"} align={"center"} px={15}>
      {label}{" "}
      <Checkbox
        color={colorScheme === "light" ? "#115dfe" : "#52A5E0"}
        classNames={{
          input:
            colorScheme === "light"
              ? checkboxClasses.checkbox
              : checkboxClasses.checkbox_dark,
        }}
      />
    </Flex>
  );
};
