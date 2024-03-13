"use client";

import { GeneralDivider } from "@/components/GeneralDivider";
import {
  useMantineColorScheme,
  Select,
  Stack,
  Text,
  Flex,
} from "@mantine/core";
import React, { useState } from "react";

export const UserDBCountView = () => {
  const [value, setValue] = useState<string | null>("25");
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
          Cantidad de usuarios en la DB por pagina
        </Text>
        <Select
          defaultValue={"25"}
          placeholder="Usuarios a mostrar"
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
          data={["25", "50", "80", "100"]}
          value={value}
          onChange={setValue}
        />
      </Flex>
      <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
    </Stack>
  );
};
