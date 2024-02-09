"use client";

import { HiOutlineDocumentAdd } from "@/icons";
import { Button } from "@mantine/core";

export const BtnCreateTemplate = ({
  withStyles,
  complete,
}: {
  complete: boolean;
  withStyles: boolean;
}) => {
  if (withStyles) {
    return (
      <Button
        leftSection={<HiOutlineDocumentAdd />}
        variant="default"
        styles={(theme) => ({
          section: { fontSize: "1.2rem" },
          root: {
            color: `${theme.colors.principalTheme[6]}`,
            border: `2px solid ${theme.colors.principalTheme[6]}`,
          },
        })}
        fullWidth={complete}
      >
        Crear Plantilla
      </Button>
    );
  }
  return (
    <Button
      leftSection={<HiOutlineDocumentAdd />}
      variant="default"
      styles={(theme) => ({
        section: { fontSize: "1.2rem" },
        root: {
          backgroundColor: `${theme.colors.principalTheme[6]}`,
          color: "white",
        },
      })}
      fullWidth={complete}
    >
      Crear Plantilla
    </Button>
  );
};
