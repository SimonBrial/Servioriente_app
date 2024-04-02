"use client";

import { GeneralDivider } from "@/components/GeneralDivider";
import { TitleLayout } from "@/components/layout/TitleLayout";
import {
  useMantineColorScheme,
  ScrollArea,
  Container,
  Stack,
  Title,
  Flex,
  Text,
} from "@mantine/core";

export default function DeleteAlarmLayout() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <>
      <TitleLayout
        color=""
        icon=""
        onText
        title="Eliminar Recordatorio"
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
              colorScheme === "light"
                ? "#fff"
                : theme.colors.darkTheme[7],
          },
        })}
      >
        <Stack gap={4}>
          <Stack gap={2} w={"100%"}>
            <Flex align={"center"} gap={5}>
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
                Titulo:
              </Text>
              <Text size="1.3rem">🎂</Text>
              <Title
                order={6}
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? theme.colors.lightTheme[3]
                        : theme.colors.darkTheme[2],
                    fontSize: "1.5rem",
                  },
                })}
              >
                Titulo 1
              </Title>
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
                Creado:
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
                19/03/2024 - 03:34PM
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
                Para:
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
                19/03/2024 - 03:34PM
              </Text>
            </Flex>
            <GeneralDivider
              orientation="horizontal"
              key={crypto.randomUUID()}
            />
          </Stack>
          <Container style={{ overflow: "hidden" }} p={0}>
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
              Sapiente enim repellat aperiam eos magni culpa quis dicta
              accusantium.Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Repellendus non eius dolore nemo magnam cum, debitis
              consequatur quibusdam esse officia! Sapiente enim repellat aperiam
              eos magni culpa quis dicta accusantium.
            </ScrollArea>
          </Container>
        </Stack>
      </Container>
    </>
  );
}
