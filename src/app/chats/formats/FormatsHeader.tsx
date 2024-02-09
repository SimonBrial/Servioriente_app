"use client";

import {
  useMantineColorScheme,
  TextInput,
  Stack,
  Title,
  Flex,
  Text,
} from "@mantine/core";
import React from "react";

export const FormatsHeader = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Stack gap={4}>
      <Flex gap={6}>
        <Title
          order={3}
          styles={(theme) => ({
            root: {
              color:
                colorScheme === "light"
                  ? `${theme.colors.lightTheme[3]}`
                  : `${theme.colors.darkTheme[2]}`,
            },
          })}
        >
          Titulo:{" "}
        </Title>
        <TextInput
          variant="unstyled"
          styles={(theme) => ({
            root: { width: "100%" },
            input: {
              width: "100%",
              borderBottom:
                colorScheme === "light"
                  ? `1px solid ${theme.colors.lightTheme[3]}`
                  : `1px solid ${theme.colors.darkTheme[2]}`,
              fontSize: "1.1rem",
              color:
                colorScheme === "light"
                  ? `${theme.colors.lightTheme[3]}`
                  : `${theme.colors.darkTheme[2]}`,
            },
          })}
        />
      </Flex>
      <Flex gap={6}>
        <Title
          order={5}
          styles={(theme) => ({
            root: {
              color:
                colorScheme === "light"
                  ? `${theme.colors.lightTheme[3]}`
                  : `${theme.colors.darkTheme[2]}`,
            },
          })}
        >
          Creado por:{" "}
        </Title>
        <Text
          styles={(theme) => ({
            root: {
              color:
                colorScheme === "light"
                  ? `${theme.colors.lightTheme[6]}`
                  : `${theme.colors.darkTheme[1]}`,
              fontWeight: "light",
            },
          })}
        >
          Mario Hurtado
        </Text>
      </Flex>
    </Stack>
  );
};
