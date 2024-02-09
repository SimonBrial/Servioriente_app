"use client";

import { Divider, useMantineColorScheme } from "@mantine/core";
import React from "react";

export const GeneralDivider = () => {
  const { colorScheme } = useMantineColorScheme();
  return <Divider color={colorScheme === "light" ? "#cdcdcd" : "#f8f8f8"} />;
};
