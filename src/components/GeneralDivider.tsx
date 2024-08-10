"use client";

import { Divider, useMantineColorScheme } from "@mantine/core";
import React from "react";

export const GeneralDivider = ({
  orientation,
  wdth,
}: {
  orientation: "horizontal" | "vertical";
  wdth?: string | number;
}) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Divider
      w={wdth}
      color={colorScheme === "light" ? "#cdcdcd" : "#f8f8f8"}
      orientation={orientation}
    />
  );
};
