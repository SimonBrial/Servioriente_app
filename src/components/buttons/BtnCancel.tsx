"use client";

import { IoClose } from "@/icons";
import { Button, useMantineColorScheme } from "@mantine/core";
import React from "react";
import classes from "@/styles/btn-styles.module.css";

export const BtnCancel = ({ fnCancel }: { fnCancel: () => void }) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Button
      onClick={fnCancel}
      fullWidth
      variant="white"
      leftSection={<IoClose />}
      classNames={{
        root:
          colorScheme === "light" ? classes.btnCancel : classes.btnCancel_dark,
      }}
      styles={(theme) => ({
        root: {
          border: `2px solid ${theme.colors.principalTheme[6]}`,
          color: `${theme.colors.principalTheme[6]}`,
        },
        section: { fontSize: "1.2rem" },
      })}
    >
      Cancelar
    </Button>
  );
};
