"use client";

import { MdOutlineCategory } from "@/icons";
import { useMantineColorScheme, Select, Title, Flex } from "@mantine/core";
import React, { useState } from "react";
import WarningInfo from "../WarningInfo";

export const AdminTypeSelect = ({ inputSize }: { inputSize: string }) => {
  const [value, setValue] = useState<string | null>("");
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex align={"center"} justify={"space-between"}>
      <Title
        order={4}
        styles={(theme) => ({
          root: {
            color:
              colorScheme === "light"
                ? theme.colors.lightTheme[3]
                : theme.colors.darkTheme[2],
          },
        })}
      >
        Tipo de Admin
      </Title>
      <Flex align={"center"} gap={6}>
        <WarningInfo description="Este campo solo puede ser modificado por el super admin" />
        <Select
          leftSection={<MdOutlineCategory />}
          w={inputSize}
          placeholder="Seleccion una categoria"
          data={["Admin", "Super Admin"]}
          onChange={setValue}
          value={value}
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
    </Flex>
  );
};
