"use client";

import { HiOutlineSave } from "@/icons";
import { NotificationsFnProps } from "@/interface/interface";
import { Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import React from "react";

interface BtnSaveProps extends NotificationsFnProps {}

export const BtnSave = ({
  description,
  classes,
  loading,
  color,
  title,
  icon,
  id,
}: BtnSaveProps) => {
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
      onClick={() =>
        notifications.show({
          id: id,
          icon: icon,
          color: color,
          title: title,
          message: description,
          autoClose: 1000,
          withCloseButton: true,
        })
      }
    >
      Guardar
    </Button>
  );
};
