"use client";

import InsideContainer from "@/components/container/InsideContainer";
import { Stack, useMantineColorScheme } from "@mantine/core";
import React from "react";

export const SuperAdminLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <InsideContainer offset={130}>
      <Stack
        gap={16}
        styles={(theme) => ({
          root: {
            border: colorScheme === "light" ? `1px solid ${theme.colors.lightTheme[2]}` : "none",
            borderRadius: "6px",
            padding: "1rem",
            height: "100%",
            width: "100%",
          },
        })}
      >
        {children}
      </Stack>
    </InsideContainer>
  );
};
