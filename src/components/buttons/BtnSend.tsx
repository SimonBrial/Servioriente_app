"use client";

import { Button, useMantineColorScheme } from "@mantine/core";
import React from "react";
import classes from "@/styles/btn-styles.module.css";
import { notifications } from "@mantine/notifications";

export default function BtnSend({
  labelBtn = "Volver",
  description,
  iconTag,
  close,
  title,
  id,
}: {
  iconTag: React.ReactNode;
  description: string;
  close: () => void;
  labelBtn: string;
  title: string;
  id: string;
}): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Button
      leftSection={iconTag}
      onClick={() => {
        close();
        notifications.show({
          id: id,
          color: "#2BDD66",
          title: title,
          message: description,
          autoClose: 1000,
          withCloseButton: true,
        });
      }}
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
      {labelBtn}
    </Button>
  );
}
