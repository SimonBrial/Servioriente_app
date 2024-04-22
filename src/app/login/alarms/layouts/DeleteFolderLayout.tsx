"use client";

import { GeneralDivider } from "@/components/GeneralDivider";
import TitleSimpleLayout from "@/components/layout/TitleSimpleLayout";
import {
  useMantineColorScheme,
  ScrollArea,
  Container,
  Stack,
  Title,
  Flex,
  Text,
} from "@mantine/core";
import DeleteFolderItem from "./DeleteFolderItem";
import { alarmDataArray } from "@/data/AlarmData";
import { AlarmCardArray } from "@/interface/interface";

export default function DeleteFolderLayout() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <>
      <TitleSimpleLayout title="Eliminar Recordatorio" key={crypto.randomUUID()} />
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
              Descripcion:
            </Text>
            <Text size="sm" style={{ lineHeight: "15px" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              ipsum qui molestiae dolorem, porro blanditiis, corrupti mollitia
              numquam molestias, odio debitis harum officia. Cupiditate, hic
              nihil explicabo earum aperiam perferendis.
            </Text>
            <GeneralDivider
              orientation="horizontal"
              key={crypto.randomUUID()}
            />
          </Stack>
          <Container
            style={{ overflow: "hidden", maxWidth: "100%", width: "100%" }}
            p={0}
          >
            <ScrollArea
              scrollbarSize={2}
              h={250}
              styles={(theme) => ({
                root: {
                  maxWidth: "100%",
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
              <Stack
                gap={8}
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  padding: "0.2rem",
                }}
              >
                {alarmDataArray.map((item: AlarmCardArray, index: number) => {
                  const {
                    description,
                    createHour,
                    createdAt,
                    forDate,
                    forHour,
                    title,
                    id,
                  } = item;
                  return (
                    <DeleteFolderItem
                      description={description}
                      createHour={createHour}
                      createdAt={createdAt}
                      forDate={forDate}
                      forHour={forHour}
                      title={title}
                      key={index}
                      id={id}
                    />
                  );
                })}
              </Stack>
            </ScrollArea>
          </Container>
        </Stack>
      </Container>
    </>
  );
}
