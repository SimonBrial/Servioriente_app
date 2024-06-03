"use client";

import {
  useMantineColorScheme,
  ScrollArea,
  Button,
  Center,
  Stack,
  Title,
  Text,
  Flex,
  Box,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { TitleLayout } from "@/components/layout/TitleLayout";
import {
  HiOutlineLockClosed,
  HiOutlineLockOpen,
  BiAlarmOff,
  PiRobot,
  TbClick,
} from "@/icons";
import BtnEdit from "@/components/buttons/BtnEdit";
import { ContainerInside } from "@/components/container/ContainerInside";
import { useAlarmStore } from "@/store/alarm-store";
import BtnDeleteAlarm from "./buttons/BtnDeleteAlarm";
import { AlarmObj } from "@/interface/interface";
import isObjectVoid from "@/utils/isVoidObject";
import dayjs from "dayjs";

export default function AlarmDescription(): JSX.Element {
  const {
    showEditAlarmLayout,
    fnSetEditAlarmShow,
    alarmDescription,
    alarmFolderArray,
  } = useAlarmStore();

  const { colorScheme } = useMantineColorScheme();
  const { height } = useViewportSize();

  function showDescription() {
    if (alarmFolderArray.length > 0) {
      if (!isObjectVoid(alarmDescription)) {
        const {
          folderAssigned,
          privateAlarm,
          privateUser,
          description,
          folderIcon,
          alarmTitle,
          automated,
          createdTo,
          createAt,
          toDate,
          color,
          icon,
          id,
        } = alarmDescription as AlarmObj;
        return (
          <Stack
            h={"100%"}
            justify={"space-between"}
            styles={(theme) => ({
              root: {
                color:
                  colorScheme === "light"
                    ? `${theme.colors.lightTheme[3]}`
                    : `${theme.colors.darkTheme[2]}`,
              },
            })}
          >
            <Stack gap={height <= 720 ? 1 : 2} mah={"90%"}>
              <TitleLayout
                title={folderAssigned !== undefined ? folderAssigned : ""}
                color={color}
                icon={folderIcon}
                onText={false}
              />
              <Flex justify={"space-between"}>
                <Title order={4}>Titulo:</Title>
                <Flex gap={6}>
                  <Text style={{ color: `${color}` }}>{alarmTitle}</Text>
                  <Text size="1.2rem">{icon}</Text>
                </Flex>
              </Flex>
              <Flex justify={"space-between"}>
                <Title order={4}>Creado:</Title>
                <Text
                  size="sm"
                  styles={(theme) => ({
                    root: {
                      color:
                        colorScheme === "light"
                          ? `${theme.colors.lightTheme[6]}`
                          : `${theme.colors.darkTheme[1]}`,
                    },
                  })}
                >
                  {dayjs(createAt).format("DD/MM/YYYY - hh: mm A")}
                </Text>
              </Flex>
              <Flex justify={"space-between"}>
                <Title order={4}>Para el dia:</Title>
                <Text
                  size="sm"
                  styles={(theme) => ({
                    root: {
                      color:
                        colorScheme === "light"
                          ? `${theme.colors.lightTheme[6]}`
                          : `${theme.colors.darkTheme[1]}`,
                    },
                  })}
                >
                  {dayjs(toDate).format("DD/MM/YYYY - hh: mm A")}
                </Text>
              </Flex>
              <Flex justify={"space-between"}>
                <Title order={4}>Para:</Title>
                <Text
                  size="sm"
                  styles={(theme) => ({
                    root: {
                      color:
                        colorScheme === "light"
                          ? `${theme.colors.lightTheme[6]}`
                          : `${theme.colors.darkTheme[1]}`,
                    },
                  })}
                >
                  {createdTo}
                </Text>
              </Flex>
              <Flex justify={"space-between"}>
                <Title order={4}>Cliente:</Title>
                <Text>Cliente</Text>
              </Flex>
              <Flex align={"center"} gap={5} justify={"space-between"}>
                <Title
                  order={4}
                  styles={(theme) => ({
                    root: {
                      color:
                        colorScheme === "light"
                          ? `${theme.colors.lightTheme[3]}`
                          : `${theme.colors.darkTheme[2]}`,
                    },
                  })}
                >
                  Privado:
                </Title>
                <Flex align={"center"} gap={5}>
                  <Text
                    size="1.05rem"
                    styles={(theme) => ({
                      root: {
                        color:
                          colorScheme === "light"
                            ? `${theme.colors.lightTheme[3]}`
                            : `${theme.colors.darkTheme[2]}`,
                      },
                    })}
                  >
                    {privateAlarm ? <>{privateUser}</> : null}
                  </Text>
                  {privateAlarm ? (
                    <Center
                      styles={(theme) => ({
                        root: {
                          fontSize: "1.3rem",
                          color:
                            colorScheme === "light"
                              ? `${theme.colors.lightTheme[3]}`
                              : `${theme.colors.darkTheme[2]}`,
                        },
                      })}
                    >
                      <HiOutlineLockClosed />
                    </Center>
                  ) : (
                    <>
                      <Text
                        size="1rem"
                        styles={(theme) => ({
                          root: {
                            color:
                              colorScheme === "light"
                                ? `${theme.colors.lightTheme[3]}`
                                : `${theme.colors.darkTheme[2]}`,
                          },
                        })}
                      >
                        Publico
                      </Text>
                      <Center
                        styles={(theme) => ({
                          root: {
                            fontSize: "1.3rem",
                            color:
                              colorScheme === "light"
                                ? `${theme.colors.lightTheme[3]}`
                                : `${theme.colors.darkTheme[2]}`,
                          },
                        })}
                      >
                        <HiOutlineLockOpen />
                      </Center>
                    </>
                  )}
                </Flex>
              </Flex>
              <Flex align={"center"} gap={5} justify={"space-between"}>
                <Title
                  order={4}
                  styles={(theme) => ({
                    root: {
                      color:
                        colorScheme === "light"
                          ? `${theme.colors.lightTheme[3]}`
                          : `${theme.colors.darkTheme[2]}`,
                    },
                  })}
                >
                  Automatizado:
                </Title>
                {automated ? (
                  <Flex align={"center"} gap={5}>
                    <Text size="sm">Automatizado</Text>
                    <Center
                      styles={(theme) => ({
                        root: {
                          fontSize: "1.3rem",
                          color:
                            colorScheme === "light"
                              ? `${theme.colors.lightTheme[3]}`
                              : `${theme.colors.darkTheme[2]}`,
                        },
                      })}
                    >
                      <PiRobot />
                    </Center>
                  </Flex>
                ) : (
                  <Text size="sm">No Automatizado</Text>
                )}
              </Flex>
              <Stack gap={1} h={height <= 720 ? "54%" : "65%"}>
                <Title order={4}>Descripción:</Title>
                <ScrollArea
                  h={"100%"}
                  maw={"100%"}
                  offsetScrollbars
                  scrollbarSize={2}
                >
                  <Box>
                    <Text>{description}</Text>
                  </Box>
                </ScrollArea>
              </Stack>
            </Stack>
            <Flex gap={"sm"} align={"center"}>
              <BtnDeleteAlarm obj={alarmDescription as AlarmObj} />
              <BtnEdit
                editLayout={showEditAlarmLayout}
                fnShowEditLayout={fnSetEditAlarmShow}
                id={crypto.randomUUID()}
                buttonStyles="normal"
              >
                prueba
                <Button onClick={() => fnSetEditAlarmShow(false)}>close</Button>
              </BtnEdit>
            </Flex>
          </Stack>
        );
      }
      return (
        <Stack
          h={"100%"}
          gap={5}
          justify="center"
          align="center"
          styles={{
            root: {
              color: "rgba(105, 105, 105, 0.3)",
              fontSize: "12rem",
            },
          }}
        >
          <TbClick />
          <Text size="2.5rem" style={{ textAlign: "center" }}>
            Selecciona un recordatorio
          </Text>
        </Stack>
      );
    }
    return (
      <Stack
        h={"100%"}
        gap={5}
        justify="center"
        align="center"
        styles={(theme) => ({
          root: {
            color:
              colorScheme === "light"
                ? theme.colors.lightTheme[3]
                : theme.colors.darkTheme[2],
            fontSize: "10rem",
          },
        })}
      >
        <BiAlarmOff />
        <Text size="2.5rem" style={{ textAlign: "center" }}>
          Debe crear recordatorios para visualizarlos aqui
        </Text>
      </Stack>
    );
  }

  // console.log(alarmDescription);

  return (
    <ContainerInside allWhite={false} width="30%" withBorder>
      {showDescription()}
    </ContainerInside>
  );
}
