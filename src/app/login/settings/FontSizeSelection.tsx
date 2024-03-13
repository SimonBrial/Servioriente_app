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
  const [value, setValue] = useState<string | null>("md");
  const { colorScheme } = useMantineColorScheme();
  return (
    <Stack gap={8}>
      <Flex justify={"space-between"} align={"center"}>
        <Text
          styles={(theme) => ({
            root: {
              color:
                colorScheme === "light"
                  ? theme.colors.lightTheme[3]
                  : theme.colors.darkTheme[2],
            },
          })}
        >
          Tamaño de la Fuente
        </Text>
        <Select
          data={["sm", "md", "lg", "xl"]}
          defaultValue={"md"}
          placeholder="Tamaño de Fuente"
          value={value}
          onChange={setValue}
          styles={(theme) => ({
            input: {
              cursor: "pointer",
              backgroundColor: colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
              color:
                colorScheme === "light"
                  ? "#696969"
                  : theme.colors.lightTheme[3],
            },
            section: {
              color:
                colorScheme === "light" ? "#696969" : theme.colors.darkTheme[2],
            },
            dropdown: {
              color:
                colorScheme === "light" ? "#696969" : theme.colors.darkTheme[2],
            },
          })}
        />
      </Flex>
      <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
    </Stack>
  );
};
