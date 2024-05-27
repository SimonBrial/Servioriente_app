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
  Center,
} from "@mantine/core";
import DeleteFolderItem from "./DeleteFolderItem";
import { AlarmFolderArray, AlarmObj } from "@/interface/interface";
import { useAlarmStore } from "@/store/alarm-store";
import { useEffect, useState } from "react";
import { PiFolderSimpleDashed } from "@/icons";

export default function DeleteFolderLayout({ idFolder }: { idFolder: string }) {
  const { colorScheme } = useMantineColorScheme();
  const { fnGetFolder } = useAlarmStore();
  const [folder, setFolder] = useState<AlarmFolderArray>();

  useEffect(() => {
    const folderFound = fnGetFolder(idFolder);
    if (folderFound !== undefined) {
      setFolder(folderFound);
    }
  }, []);

  function folderItem() {
    if (folder !== undefined) {
      if (folder.alarmsArray.length > 0) {
        return (
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
                {folder.alarmsArray.map((item: AlarmObj, index: number) => {
                  const {
                    folderAssigned,
                    privateAlarm,
                    privateUser,
                    description,
                    alarmTitle,
                    folderIcon,
                    automated,
                    createdTo,
                    createAt,
                    toDate,
                    color,
                    icon,
                    id,
                  } = item;
                  return (
                    <DeleteFolderItem
                      folderAssigned={folderAssigned}
                      description={description}
                      privateAlarm={privateAlarm}
                      privateUser={privateUser}
                      alarmTitle={alarmTitle}
                      automated={automated}
                      folderIcon={folderIcon}
                      createdTo={createdTo}
                      createAt={createAt}
                      toDate={toDate}
                      color={color}
                      icon={icon}
                      key={index}
                      id={id}
                    />
                  );
                })}
              </Stack>
            </ScrollArea>
          </Container>
        );
      }
      return (
        <Container
          styles={(theme) => ({
            root: {
              border:
                colorScheme === "light"
                  ? `1px solid ${theme.colors.lightTheme[2]}`
                  : `1px solid ${theme.colors.darkTheme[6]}`,
              width: "100%",
              padding: "0.5rem",
              borderRadius: "6px",
            },
          })}
        >
          <Flex gap={8} align={"center"} justify={"center"}>
            <Center>
              <PiFolderSimpleDashed style={{ fontSize: "1.5rem" }} />
            </Center>
            <Text size="1rem">Carpeta vacía</Text>
          </Flex>
        </Container>
      );
    }
  }

  return (
    <>
      <TitleSimpleLayout
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
              colorScheme === "light" ? "#fff" : theme.colors.darkTheme[7],
          },
        })}
      >
        <Stack gap={4}>
          <Stack gap={2} w={"100%"}>
            <Flex align={"center"} gap={5}>
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
              <Text size="1.1rem">🎂</Text>
              <Title
                order={6}
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? theme.colors.lightTheme[3]
                        : theme.colors.darkTheme[2],
                    fontSize: "1.2rem",
                  },
                })}
              >
                {folder?.title}
              </Title>
            </Flex>
            <GeneralDivider
              orientation="horizontal"
              key={crypto.randomUUID()}
            />
          </Stack>
          <Stack gap={4} w={"100%"}>
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
            <Text
              size="sm"
              style={{ lineHeight: "15px", marginBottom: "0.4rem" }}
              px={4}
            >
              {folder?.description}
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
            {folderItem()}
          </Container>
        </Stack>
      </Container>
    </>
  );
}
