"use client";

import { GeneralDivider } from "@/components/GeneralDivider";
import TitleSimpleLayout from "@/components/layout/TitleSimpleLayout";
import {
  useMantineColorScheme,
  Container,
  Stack,
  Flex,
  Text,
} from "@mantine/core";

export default function DeleteCardLayout() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Stack gap={8}>
      <TitleSimpleLayout title="Eliminar Registro" />
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
                Cliente:
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
                Mario Hurtado
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
                Vehiculo:
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
                Spark
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
                Tarifa:
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
                8$
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
                Fecha de Creacion:
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
                06/11/2023
              </Text>
            </Flex>
            <GeneralDivider
              orientation="horizontal"
              key={crypto.randomUUID()}
            />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
