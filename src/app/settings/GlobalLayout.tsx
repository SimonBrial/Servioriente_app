"use client";

import InsideContainer from "@/components/container/InsideContainer";
import { Container, Stack, useMantineColorScheme } from "@mantine/core";
import React, { ReactNode } from "react";

export const GlobalLayout = ({ children }: { children: ReactNode }) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <InsideContainer offset={130}>
      <Container
        styles={(theme) => ({
          root: {
            // border: "1px solid #cdcdcd",
            borderRadius: "6px",
            padding: "1rem",
            height: "100%",
            border:
              colorScheme === "light"
                ? "1px solid #cdcdcd"
                : `1px solid ${theme.colors.darkTheme[7]}`,
          },
        })}
      >
        <Stack
          gap={4}
          style={{ width: "70%", margin: "0 auto", height: "100%" }}
          justify="space-between"
        >
          {children}
        </Stack>
      </Container>
    </InsideContainer>
  );
};
