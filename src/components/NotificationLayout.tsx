"use client";

import { UnstyledButton } from "@mantine/core";
import React from "react";
import { NotificationIconsProps } from "@/interface/interface";
import { notifications } from "@mantine/notifications";

export default function NotificationLayout({
  description,
  children,
  title,
  type,
}: NotificationIconsProps): JSX.Element {
  const colorSelection = (color: string): string => {
    let colorSelected: string = "";
    if (color === "Aviso") {
      colorSelected = "#f8e916";
    } else if (color === "Error") {
      return (colorSelected = "#E94040");
    } else if (color === "Completado") {
      return (colorSelected = "#2BDD66");
    } else if (color === "Informacion") {
      return (colorSelected = "#05ebe7");
    }

    return colorSelected;
  };

  return (
    <UnstyledButton
      onClick={() =>
        notifications.show({
          id: "hello-there",
          withCloseButton: true,
          onClose: () => console.log("unmounted"),
          onOpen: () => console.log("mounted"),
          autoClose: 3000,
          title: `${title}`,
          message: `${description}`,
          color: "#ffffff",
          // className: classes.notification_success,
          style: {
            cursor: "default",
          },
          styles: (theme) => ({
            root: { backgroundColor: colorSelection(type), width: "100%" },
            title: { color: theme.colors.lightTheme[0], fontSize: "1.1rem" },
            description: { color: theme.colors.darkTheme[2] },
            closeButton: {
              color: colorSelection(type),
              backgroundColor: "#fff",
            },
          }),
          loading: false,
        })
      }
    >
      {children}
    </UnstyledButton>
  );
}
