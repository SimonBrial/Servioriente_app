"use client";

import { MdOutlinePlace } from "@/icons";
import { Flex, Select, Title, useMantineColorScheme } from "@mantine/core";
import React, { useState } from "react";

export const StateSelect = ({ inputSize }: { inputSize: string }) => {
  const [value, setValue] = useState<string | null>("");
  const { colorScheme } = useMantineColorScheme();
  const estadosArray = [
    "Amazonas",
    "Anzoátegui",
    "Apure",
    "Aragua",
    "Barinas",
    "Bolívar",
    "Carabobo",
    "Cojedes",
    "Delta Amacuro",
    "Falcón",
    "Guárico",
    "Lara",
    "Mérida",
    "Miranda",
    "Monagas",
    "Nueva Esparta",
    "Portuguesa",
    "Sucre",
    "Táchira",
    "Trujillo",
    "Vargas",
    "Yaracuy",
    "Zulia",
    "Dependencias Federales",
    "Distrito Capital",
  ];
  return (
    <Flex align={"center"} justify={"space-between"}>
      <Title order={4}>Estado</Title>
      <Select
        leftSection={<MdOutlinePlace />}
        w={inputSize}
        placeholder="Seleccione un Estado de Venezuela"
        data={estadosArray}
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
  );
};
