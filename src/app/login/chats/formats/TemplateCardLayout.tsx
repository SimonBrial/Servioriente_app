"use client";

import { HiOutlineDocumentText, HiOutlineDotsVertical } from "@/icons";
import {
  useMantineColorScheme,
  Center,
  Title,
  Stack,
  Flex,
  Text,
  Container,
} from "@mantine/core";
import React from "react";
import classes from "@/styles/container.module.css";

export const TemplateCardLayout = (): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Container
      classNames={{
        root:
          colorScheme === "light"
            ? classes.UserContactContainer
            : classes.UserContactContainer_dark,
      }}
      style={{
        borderRadius: "6px",
        padding: "0.3rem 0.5rem",
      }}
    >
      <Flex justify={"space-between"}>
        <Flex gap={5}>
          <Center
            styles={(theme) => ({
              root: {
                color:
                  colorScheme === "light"
                    ? `${theme.colors.lightTheme[3]}`
                    : `${theme.colors.darkTheme[2]}`,
              },
            })}
          >
            <HiOutlineDocumentText
              style={{
                fontSize: "2.5rem",
                strokeWidth: "1",
              }}
            />
          </Center>
          <Stack gap={0}>
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
              Mario Hurtado
            </Title>
            <Text
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[6]}`
                      : `${theme.colors.darkTheme[1]}`,
                  fontSize: "0.8rem",
                },
              })}
            >
              Plantilla para Cumpleaños
            </Text>
          </Stack>
        </Flex>
        <Center>
          <HiOutlineDotsVertical
            style={{ fontSize: "1.5rem", color: "#696969", strokeWidth: "1.5" }}
          />
        </Center>
      </Flex>
    </Container>
  );
};
