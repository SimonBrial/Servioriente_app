"use client";

import { HiOutlineSave } from "@/icons";
import { Button } from "@mantine/core";
import React from "react";

export const BtnSave = () => {
  return (
    <Button
      fullWidth
      variant="default"
      leftSection={<HiOutlineSave />}
      styles={(theme) => ({
        root: {
          color: "white",
          backgroundColor: `${theme.colors.principalTheme[6]}`,
        },
        section: { fontSize: "1.2rem" },
      })}
    >
      Guardar
    </Button>
  );
};
