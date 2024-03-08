"use client";

import { GeneralDivider } from "@/components/GeneralDivider";
import {
  useMantineColorScheme,
  Select,
  Stack,
  Flex,
  Text,
} from "@mantine/core";
import React, { useState } from "react";

export const FontSizeSelection = () => {
  const [value, setValue] = useState<string | null>("");
  const { colorScheme } = useMantineColorScheme();
  return (
    <Stack gap={8}>
      <Flex justify={"space-between"} align={"center"}>
        <Text>Tamaño de la Fuente</Text>
        <Select
          data={["sm", "md", "lg", "xl"]}
          value={value}
          onChange={setValue}
          styles={(theme) => ({
            input: {
              cursor: "pointer",
              backgroundColor: colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
              color: colorScheme === "light" ? "#696969" : "#696969",
            },
            section: {
              color: colorScheme === "light" ? "#696969" : "#696969",
            },
          })}
        />
      </Flex>
      <GeneralDivider />
    </Stack>
  );
};
