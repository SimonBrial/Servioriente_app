import { GeneralDivider } from "@/components/GeneralDivider";
import { TitleLayout } from "@/components/layout/TitleLayout";
import {
  useMantineColorScheme,
  Stack,
  Flex,
  Text,
  Container,
} from "@mantine/core";
import React from "react";

export const EditCardLayout = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Stack gap={8}>
      <TitleLayout
        color=""
        icon=""
        onText
        title="Eliminar Tarjeta"
        key={crypto.randomUUID()}
      />
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
                size="1.3rem"
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
                size="1.3rem"
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
                size="1.3rem"
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
                size="1.3rem"
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
                size="1.3rem"
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
                size="1.3rem"
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
                size="1.3rem"
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
                size="1.3rem"
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
};
