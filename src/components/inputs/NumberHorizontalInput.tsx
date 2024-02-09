"use client";

import { HorizontalLayoutProps } from "@/interface/interface";
import { Flex, NumberInput, Title, useMantineColorScheme } from "@mantine/core";
import React from "react";

export const NumberHorizontalInput = ({
  inputSize,
  asterisk,
  title,
  icon,
}: HorizontalLayoutProps) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex align={"center"} justify={"space-between"} w={"100%"}>
      <Title order={4}>{title}</Title>{" "}
      <NumberInput
        w={inputSize}
        leftSection={icon}
        placeholder={title}
        allowNegative={false}
        styles={(theme) => ({
          input: {
            backgroundColor: colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
            color: `${theme.colors.lightTheme[3]}`,
          },
        })}
      />
    </Flex>
  );
};
