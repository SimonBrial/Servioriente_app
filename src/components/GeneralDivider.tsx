"use client";

import { Divider, useMantineColorScheme } from "@mantine/core";
import React from "react";

export const GeneralDivider = ({
  orientation,
}: {
  orientation: "horizontal" | "vertical";
}) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Divider
      w={"100%"}
      color={colorScheme === "light" ? "#cdcdcd" : "#f8f8f8"}
      orientation={orientation}
    />
  );
};
