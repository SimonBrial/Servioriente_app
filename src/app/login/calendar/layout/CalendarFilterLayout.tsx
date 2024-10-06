"use client";

import { CalendarInput } from "@/components/inputs/CalendarInput";
import { TitleLayout } from "@/components/layout/TitleLayout";
import { degreeType } from "@/types/types";
import {
  useMantineColorScheme,
  Select,
  Stack,
  Title,
  Flex,
} from "@mantine/core";
import React from "react";

export default function CalendarFilterLayout() {
  const { colorScheme } = useMantineColorScheme();
  const priorityArr: degreeType[] = [
    "Importante",
    "Muy Importante",
    "Nada Importante",
    "Normal",
    "Poco Importante",
  ];
  return (
    <Stack
      gap={"xs"}
      styles={{
        root: { padding: "1rem" },
      }}
    >
      <TitleLayout
        title="Filtrar Eventos del Calendario"
        color=""
        icon=""
        onText={false}
      />
      <Flex p={0} justify={"space-between"}>
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
          Grado de Prioridad
        </Title>
        <Select
          variant="default"
          placeholder="Grado de Prioridad"
          defaultValue="Whatsapp"
          data={priorityArr}
          styles={(theme) => ({
            root: { width: "200px" },
            input: {
              color:
                colorScheme === "light"
                  ? `${theme.colors.lightTheme[3]}`
                  : `${theme.colors.darkTheme[2]}`,
              width: "100%",
            },
            options: {
              color:
                colorScheme === "light"
                  ? `${theme.colors.lightTheme[3]}`
                  : `${theme.colors.darkTheme[2]}`,
            },
          })}
        />
      </Flex>
      {/* <CalendarInput title="Desde" width="200px" withTitle />
      <CalendarInput title="Hasta" width="200px" withTitle /> */}
    </Stack>
  );
}
