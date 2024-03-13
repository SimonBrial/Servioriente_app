"use cliente";

import React from "react";
import { SidebarSectionSelection } from "./SidebarSectionSelection";
import { Stack, Text, useMantineColorScheme } from "@mantine/core";
import { GeneralDivider } from "@/components/GeneralDivider";

export const SidebarSectionContainer = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Stack
      gap={4}
      styles={(theme) => ({
        root: {
          color:
            colorScheme === "light"
              ? theme.colors.lightTheme[3]
              : theme.colors.darkTheme[2],
        },
      })}
    >
      <Text>Secciones de la Sidebar</Text>
      <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
      <SidebarSectionSelection
        key={crypto.randomUUID()}
        label="Dashboard"
        selected
      />
      <SidebarSectionSelection
        key={crypto.randomUUID()}
        label="Process"
        selected
      />
      <SidebarSectionSelection
        key={crypto.randomUUID()}
        label="Chats"
        selected
      />
      <SidebarSectionSelection
        key={crypto.randomUUID()}
        label="Base de Datos"
        selected
      />
      <SidebarSectionSelection
        key={crypto.randomUUID()}
        label="Calendario"
        selected
      />
      <SidebarSectionSelection
        key={crypto.randomUUID()}
        label="Correo"
        selected
      />
      <SidebarSectionSelection
        key={crypto.randomUUID()}
        label="Recordatorios"
        selected
      />
      <SidebarSectionSelection
        key={crypto.randomUUID()}
        label="Bloc de Notas"
        selected
      />
      <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
    </Stack>
  );
};
