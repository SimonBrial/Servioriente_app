"use client";

import { Button, Stack } from "@mantine/core";
import { BsFilter } from "../../icons";
import { TitleLayout } from "./TitleLayout";
import { CalendarInput } from "../inputs/CalendarInput";
import { ItemFilterLayout } from "./ItemFilterLayout";

export function GeneralFilterLayout(): JSX.Element {
  return (
    <Stack
      gap={"xs"}
      styles={{
        root: { padding: "1rem" },
      }}
    >
      <TitleLayout title="Filtrar Categoria" color="" icon="" onText={false} />
      <ItemFilterLayout label="Nombre" />
      <ItemFilterLayout label="Apellido" />
      <ItemFilterLayout label="Vehiculo" />
      <ItemFilterLayout label="Estado" />
      <ItemFilterLayout label="Telefono" />
      <ItemFilterLayout label="Red Social" />
      <ItemFilterLayout label="Estatus" />
      <CalendarInput title="Desde" width="200px" withTitle />
      <Button
        leftSection={<BsFilter />}
        styles={(theme) => ({
          section: { fontSize: "1.8rem" },
          root: {
            backgroundColor: `${theme.colors.principalTheme[6]}`,
          },
        })}
      >
        Aplicar Filtros
      </Button>
    </Stack>
  );
}
