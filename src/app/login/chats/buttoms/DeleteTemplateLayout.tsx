"use client";

import { GeneralDivider } from "@/components/GeneralDivider";
import TitleSimpleLayout from "@/components/layout/TitleSimpleLayout";
import { FormatCardProps } from "@/interface/interface";
import {
  useMantineColorScheme,
  ScrollArea,
  Container,
  Stack,
  Flex,
  Text,
} from "@mantine/core";
import React from "react";

export default function DeleteTemplateLayout({
  userCreator,
  description,
  title,
  date,
  id,
}: FormatCardProps) {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Stack gap={8}>
      <TitleSimpleLayout title="Eliminar Formato" key={crypto.randomUUID()} />
      <Container
        styles={(theme) => ({
          root: {
            maxWidth: "100%",
            width: "100%",
            padding: "1.2rem 1rem",
            borderRadius: "6px",
            height: "100%",
            border:
              colorScheme === "light"
                ? `1px solid ${theme.colors.lightTheme[2]}`
                : `1px solid ${theme.colors.darkTheme[9]}`,
            backgroundColor:
              colorScheme === "light" ? "#fff" : `${theme.colors.darkTheme[7]}`,
          },
        })}
      >
        <Stack gap={6}>
          <Stack gap={1} w={"100%"}>
            <Flex align={"center"} gap={10}>
              <Text
                size="1.1rem"
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? theme.colors.lightTheme[3]
                        : theme.colors.darkTheme[2],
                  },
                })}
              >
                Creado por:
              </Text>
              <Text
                size="1.1rem"
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? theme.colors.principalTheme[6]
                        : theme.colors.principalTheme[7],
                  },
                })}
              >
                {userCreator}
              </Text>
            </Flex>
            <GeneralDivider
              orientation="horizontal"
              key={crypto.randomUUID()}
            />
          </Stack>
          <Stack gap={1} w={"100%"}>
            <Flex align={"center"} gap={10}>
              <Text
                size="1.1rem"
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? theme.colors.lightTheme[3]
                        : theme.colors.darkTheme[2],
                  },
                })}
              >
                Titulo:
              </Text>
              <Text
                size="1.1rem"
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? theme.colors.principalTheme[6]
                        : theme.colors.principalTheme[7],
                  },
                })}
              >
                {title}
              </Text>
            </Flex>
            <GeneralDivider
              orientation="horizontal"
              key={crypto.randomUUID()}
            />
          </Stack>
          <Stack gap={1} w={"100%"}>
            <Flex align={"center"} gap={10}>
              <Text
                size="1.1rem"
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? theme.colors.lightTheme[3]
                        : theme.colors.darkTheme[2],
                  },
                })}
              >
                Fecha:
              </Text>
              <Text
                size="1.1rem"
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? theme.colors.principalTheme[6]
                        : theme.colors.principalTheme[7],
                  },
                })}
              >
                {date.format("DD-MM-YYYY")}
              </Text>
            </Flex>
            <GeneralDivider
              orientation="horizontal"
              key={crypto.randomUUID()}
            />
          </Stack>
          <Stack gap={4} w={"100%"}>
            <Stack gap={4}>
              <Text
                size="1.1rem"
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? theme.colors.lightTheme[3]
                        : theme.colors.darkTheme[2],
                  },
                })}
              >
                Descripcion:
              </Text>
              <GeneralDivider
                orientation="horizontal"
                key={crypto.randomUUID()}
              />
            </Stack>
            <Container
              styles={(theme) => ({
                root: {
                  overflow: "hidden",
                  border:
                    colorScheme === "light"
                      ? `1px solid ${theme.colors.lightTheme[2]}`
                      : `1px solid ${theme.colors.darkTheme[6]}`,
                  borderRadius: "6px",
                },
              })}
              p={0}
            >
              <ScrollArea
                scrollbarSize={2}
                h={250}
                styles={(theme) => ({
                  root: {
                    width: "100%",
                    lineHeight: "16px",
                    fontSize: "1rem",
                    color:
                      colorScheme === "light"
                        ? theme.colors.lightTheme[3]
                        : theme.colors.darkTheme[2],
                    padding: "0.5rem",
                  },
                })}
              >
                {description}
              </ScrollArea>
            </Container>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
