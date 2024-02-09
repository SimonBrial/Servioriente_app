"use client";

import { Box, Stack, Text, useMantineColorScheme } from "@mantine/core";
import React from "react";
import classes from "@/styles/container.module.css";

export const CloudDialogue = ({
  ubication,
}: {
  ubication: "left" | "right";
}): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Box
      style={{
        width: "100%",
        display: "flex",
        justifyContent: `${ubication === "left" ? "start" : "end"}`,
      }}
    >
      <Stack
        gap={0}
        align={"center"}
        // justify={ubication === "left" ? "start" : "end"}
        classNames={{
          root:
            colorScheme === "light"
              ? classes.cloudContainer
              : classes.cloudContainer_dark,
        }}
      >
        <Text style={{ maxWidth: "100%" }}>
          is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
        </Text>
        <Text
          styles={(theme) => ({
            root: {
              width: "100%",
              fontSize: "0.6rem",
              display: "flex",
              justifyContent: "end",
            },
          })}
        >
          03:55 PM
        </Text>
      </Stack>
    </Box>
  );
};
