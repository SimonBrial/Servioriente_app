"use client";

import { IoIosSend } from "@/icons";
import { Button, useMantineColorScheme } from "@mantine/core";
import React from "react";
import classes from "@/styles/btnStyles.module.css";

export default function BtnSend({
  close,
  label = "Volver",
}: {
  close: () => void;
  label: string;
}): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Button
      leftSection={<IoIosSend />}
      onClick={close}
      variant="filled"
      fullWidth
      classNames={{
        root: colorScheme === "light" ? classes.btnAdd : classes.btnAdd_dark,
      }}
      styles={(theme) => ({
        /* root: { backgroundColor: `${theme.colors.lightTheme[6]}` }, */
        section: { fontSize: "1.2rem" },
      })}
    >
      {label}
    </Button>
  );
}
