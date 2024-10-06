"use client";

import { PriorityBadge } from "@/components/badge/PriorityBadge";
import { GeneralDivider } from "@/components/GeneralDivider";
import TitleSimpleLayout from "@/components/layout/TitleSimpleLayout";
import {
  useMantineColorScheme,
  Container,
  Stack,
  Flex,
  Text,
} from "@mantine/core";
import dayjs from "dayjs";

export default function DeleteEventLayout() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Stack gap={8}>
      <TitleSimpleLayout title="Eliminar Evento" />
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
                Event's title
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
                Prioridad:
              </Text>
              <PriorityBadge title="Muy Importante" />
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
                {dayjs(new Date()).format("DD/MM/YYYY - hh: mm A")}
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
                Asignado por:
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
                Simon Briceño
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
                Asignado a:
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
                Simon Briceño
              </Text>
            </Flex>
            <GeneralDivider
              orientation="horizontal"
              key={crypto.randomUUID()}
            />
          </Stack>
          <Stack gap={1} w={"100%"}>
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
              Descripcion
            </Text>
            <GeneralDivider
              orientation="horizontal"
              key={crypto.randomUUID()}
            />
            <Container
              styles={(theme) => ({
                root: {
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor:
                    colorScheme === "light"
                      ? theme.colors.lightTheme[3]
                      : theme.colors.darkTheme[2],
                  borderRadius: "6px",
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.4rem",
                },
              })}
            >
              <Text
                size="0.9rem"
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? theme.colors.lightTheme[3]
                        : theme.colors.darkTheme[2],
                  },
                })}
              >
                loremIt is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to using
                'Content here, content here', making it look like readable
                English. Many desktop publishing packages and web page editors
                now use Lorem Ipsum as their default model text, and a search
                for 'lorem ipsum' will uncover many web sites still in their
                infancy. Various versions have evolved over the years, sometimes
                by accident, sometimes on purpose (injected humour and the
                like).
              </Text>
            </Container>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
