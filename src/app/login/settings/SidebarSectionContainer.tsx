import React from "react";
import { SidebarSectionSelection } from "./SidebarSectionSelection";
import { Stack, Text } from "@mantine/core";
import { GeneralDivider } from "@/components/GeneralDivider";

export const SidebarSectionContainer = () => {
  return (
    <Stack gap={4}>
      <Text>Secciones de la Sidebar</Text>
      <GeneralDivider />
      <SidebarSectionSelection label="Dashboard" />
      <SidebarSectionSelection label="Process" />
      <SidebarSectionSelection label="Chats" />
      <SidebarSectionSelection label="Base de Datos" />
      <SidebarSectionSelection label="Calendario" />
      <SidebarSectionSelection label="Correo" />
      <SidebarSectionSelection label="Recordatorios" />
      <SidebarSectionSelection label="Bloc de Notas" />
      <GeneralDivider />
    </Stack>
  );
};
