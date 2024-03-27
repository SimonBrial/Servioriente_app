"use client";

import {
  useMantineColorScheme,
  Divider,
  Stack,
  Title,
  Flex,
} from "@mantine/core";
import React from "react";

export default function TitleSimpleLayout({ title }: { title: string }) {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Stack gap={2} style={{ width: "100%" }}>
      <Flex gap={5} justify={"center"} align={"center"}>
        <Title
          order={2}
          style={{
            color: colorScheme === "light" ? "#696969" : "#EFF3F5",
            textAlign: "center",
          }}
        >
          {title}
        </Title>
      </Flex>
      <Divider
        size="md"
        styles={(theme) => ({
          root: {
            borderColor:
              colorScheme === "light"
                ? theme.colors.lightTheme[6]
                : theme.colors.darkTheme[1],
            marginTop: "-0.3rem",
          },
        })}
      />
    </Stack>
  );
}
