"use client";

import { Container, useMantineColorScheme } from "@mantine/core";
import React, { ReactNode } from "react";
import containerInside from "@/styles/containerInside.module.css";

export const ContainerInside = ({
  withBorder,
  children,
  allWhite,
  width,
}: {
  children: ReactNode;
  allWhite: boolean;
  withBorder: boolean;
  width: string;
}): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Container
      styles={(theme) => ({
        root: {
          height: "100%",
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
            ? containerInside.container_inside
            : containerInside.container_inside_dark,
      }}
    >
      {children}
    </Container>
  );
};
