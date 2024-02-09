"use client";

import { Flex, NumberInput, Title, useMantineColorScheme } from "@mantine/core";
import React, { useState } from "react";

export const AgeInput = ({ inputSize }: { inputSize: string }) => {
  const [value, setValue] = useState<string | number>("");
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex justify={"space-between"} align={"center"}>
      <Title order={4}>Edad</Title>
      <NumberInput
        w={inputSize}
        placeholder="Indique su edad"
        clampBehavior="strict"
        onChange={setValue}
        value={value}
        max={100}
        min={0}
        styles={(theme) => ({
          input: {
            cursor: "pointer",
            backgroundColor: colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
            color: colorScheme === "light" ? "#696969" : "#696969",
          },
          control: {
            color: colorScheme === "light" ? "#696969" : "#696969",
          },
        })}
      />
    </Flex>
  );
};
