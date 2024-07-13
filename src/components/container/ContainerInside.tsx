"use client";

import { Container, useMantineColorScheme } from "@mantine/core";
import React, { ReactNode } from "react";
import classes from "@/styles/general-styles.module.css";

export const ContainerInside = ({
  withBorder,
  children,
  allWhite,
  width,
}: {
  children: ReactNode;
  withBorder: boolean;
  allWhite: boolean;
  width: string;
}): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  // console.log("From ContainerInside")
  return (
    <Container
      styles={(theme) => ({
        root: {
          width: "100%",
          maxWidth: "100%",
          // height: "100%",
          border: withBorder
            ? colorScheme === "light"
              ? `1px solid ${theme.colors.lightTheme[2]}`
              : `1px solid ${theme.colors.darkTheme[9]}`
            : "none",
          backgroundColor:
            colorScheme === "light"
              ? allWhite
                ? "#fff"
                : `${theme.colors.lightTheme[0]}`
              : `${theme.colors.darkTheme[7]}`,
        },
      })}
      w={width}
      classNames={{
        root:
          colorScheme === "light"
            ? classes.container_inside
            : classes.container_inside_dark,
      }}
    >
      {children}
    </Container>
  );
};
