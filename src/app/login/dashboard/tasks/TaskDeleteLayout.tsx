import { GeneralDivider } from "@/components/GeneralDivider";
import { TitleLayout } from "@/components/layout/TitleLayout";
import {
  useMantineColorScheme,
  ScrollArea,
  Container,
  Stack,
  Flex,
  Text,
} from "@mantine/core";
import React from "react";

export const TaskDeleteLayout = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Stack>
      <TitleLayout
        color=""
        icon=""
        onText
        title="Eliminar Tarea"
        key={crypto.randomUUID()}
      />
      <Container
        styles={(theme) => ({
          root: {
            border:
              colorScheme === "light"
                ? `2px solid ${theme.colors.lightTheme[2]}`
                : `2px solid ${theme.colors.darkTheme[6]}`,
            borderRadius: "6px",
            padding: "0.5rem",
            marginTop: "-0.2rem",
            backgroundColor:
              colorScheme === "light" ? "#fff" : theme.colors.darkTheme[7],
          },
        })}
      >
        <Stack gap={4}>
          <Stack gap={2} w={"100%"}>
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
                Asignado a:
              </Text>
              <Text
                size="1.1rem"
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? theme.colors.lightTheme[6]
                        : theme.colors.darkTheme[1],
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
          <Stack gap={2} w={"100%"}>
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
                Tipo:
              </Text>
              <Text
                size="1.1rem"
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? theme.colors.lightTheme[6]
                        : theme.colors.darkTheme[1],
                  },
                })}
              >
                Admin
              </Text>
            </Flex>
            <GeneralDivider
              orientation="horizontal"
              key={crypto.randomUUID()}
            />
          </Stack>
          <Container style={{ overflow: "hidden" }} p={0}>
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
                  Descripcion de la tarea
                </Text>
              </Flex>
              <GeneralDivider
                orientation="horizontal"
                key={crypto.randomUUID()}
              />
            </Stack>
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus non eius dolore nemo magnam cum, debitis consequatur
              quibusdam esse officia! Sapiente enim repellat aperiam eos magni
              culpa quis dicta accusantium.Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Repellendus non eius dolore nemo
              magnam cum, debitis consequatur quibusdam esse officia! Sapiente
              enim repellat aperiam eos magni culpa quis dicta accusantium.Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
              non eius dolore nemo magnam cum, debitis consequatur quibusdam
              esse officia! Sapiente enim repellat aperiam eos magni culpa quis
              dicta accusantium.Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Repellendus non eius dolore nemo magnam cum,
              debitis consequatur quibusdam esse officia! Sapiente enim repellat
              aperiam eos magni culpa quis dicta accusantium.Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Repellendus non eius dolore
              nemo magnam cum, debitis consequatur quibusdam esse officia!
            </ScrollArea>
          </Container>
        </Stack>
      </Container>
    </Stack>
  );
};
