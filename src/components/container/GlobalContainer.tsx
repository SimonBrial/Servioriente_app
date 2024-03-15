"use client";

import { Container, useMantineColorScheme } from "@mantine/core";
import classes from "@/styles/general-styles.module.css";

export const GlobalContainer = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Container
      style={{ width: "100%" }}
      mx={"1rem"}
      className={
        colorScheme === "light"
          ? classes.containerLayout
          : classes.containerLayout_dark
      }
    >
      {children}
    </Container>
  );
};
