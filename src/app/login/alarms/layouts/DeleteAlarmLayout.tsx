"use client";

import { GeneralDivider } from "@/components/GeneralDivider";
import { TitleLayout } from "@/components/layout/TitleLayout";
import { HiOutlineLockClosed, HiOutlineLockOpen, PiRobot } from "@/icons";
import { AlarmObj } from "@/interface/interface";
import { useAlarmStore } from "@/store/alarm-store";
import isObjectVoid from "@/utils/isVoidObject";
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
import { useEffect, useState } from "react";

export default function DeleteAlarmLayout({
  folderName,
  alarmId,
}: {
  folderName: string;
  alarmId: string;
}) {
  const { colorScheme } = useMantineColorScheme();
  const { alarmDescription } = useAlarmStore();
  // const [alarmToDelete, setAlarmToDelete] = useState<AlarmObj | {}>({});

  /* useEffect(() => {
    if (!isObjectVoid(alarmDescription)) {
      const alarmFound = fnGetAlarm(alarmId, folderName);
      if (alarmFound === undefined) {
        setAlarmToDelete(alarmDescription);
      }
    }
  }, []); */
  console.log("alarmDescription: ", alarmDescription);
  // console.log("fnDeleteAlarm: ", );

  function showLayout() {
    if (isObjectVoid(alarmDescription) !== undefined) {
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
        <Stack gap={4}>
          <Stack gap={4} w={"100%"}>
            <Flex align={"center"} px={4} justify={"space-between"}>
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
                Carpeta:
              </Text>
              <Flex align={"center"} gap={4}>
                <Text size="1.1rem">{folderIcon}</Text>
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
                  {folderAssigned}
                </Title>
              </Flex>
            </Flex>
            <GeneralDivider
              orientation="horizontal"
              key={crypto.randomUUID()}
            />
          </Stack>
          <Stack gap={4} w={"100%"}>
            <Flex align={"center"} px={4} justify={"space-between"}>
              <Text
                size="1rem"
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
              <Flex align={"center"} gap={4}>
                <Text size="1.1rem">{icon}</Text>
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
                  {alarmTitle}
                </Title>
              </Flex>
            </Flex>
            <GeneralDivider
              orientation="horizontal"
              key={crypto.randomUUID()}
            />
          </Stack>
          <Stack gap={4} w={"100%"}>
            <Flex align={"center"} px={4} justify={"space-between"}>
              <Text
                size="1rem"
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
                size="1rem"
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? theme.colors.lightTheme[6]
                        : theme.colors.darkTheme[1],
                  },
                })}
              >
                {createAt}
              </Text>
            </Flex>
            <GeneralDivider
              orientation="horizontal"
              key={crypto.randomUUID()}
            />
          </Stack>
          <Stack gap={4} w={"100%"}>
            <Flex align={"center"} px={4} justify={"space-between"}>
              <Text
                size="1rem"
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? theme.colors.lightTheme[3]
                        : theme.colors.darkTheme[2],
                  },
                })}
              >
                Para el dia:
              </Text>
              <Text
                size="1rem"
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? theme.colors.lightTheme[6]
                        : theme.colors.darkTheme[1],
                  },
                })}
              >
                {toDate}
              </Text>
            </Flex>
            <GeneralDivider
              orientation="horizontal"
              key={crypto.randomUUID()}
            />
          </Stack>
          <Stack gap={4} w={"100%"}>
            <Flex align={"center"} px={4} justify={"space-between"}>
              <Text
                size="1rem"
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
                size="1rem"
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? theme.colors.lightTheme[6]
                        : theme.colors.darkTheme[1],
                  },
                })}
              >
                {createdTo}
              </Text>
            </Flex>
            <GeneralDivider
              orientation="horizontal"
              key={crypto.randomUUID()}
            />
          </Stack>
          <Stack gap={4} w={"100%"}>
            <Flex align={"center"} gap={5} px={4} justify={"space-between"}>
              <Text
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? theme.colors.lightTheme[3]
                        : theme.colors.darkTheme[2],
                  },
                })}
              >
                Privado:
              </Text>
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
                  <Flex align={"center"} gap={5}>
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
                  </Flex>
                )}
              </Flex>
            </Flex>
            <GeneralDivider
              orientation="horizontal"
              key={crypto.randomUUID()}
            />
          </Stack>
          <Stack gap={4} w={"100%"}>
            <Flex align={"center"} gap={5} px={4} justify={"space-between"}>
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
                Automatizado:
              </Text>
              {automated ? (
                <Flex align={"center"} gap={5} style={{fontSize: "1rem"}}>
                  <Text>Automatizado</Text>
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
                <Text>No Automatizado</Text>
              )}
            </Flex>
            <GeneralDivider
              orientation="horizontal"
              key={crypto.randomUUID()}
            />
          </Stack>
          <Stack gap={4} w={"100%"}>
            <Text
              px={4}
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
                  overflow: "hidden",
                  border:
                    colorScheme === "light"
                      ? `1px solid ${theme.colors.lightTheme[2]}`
                      : `1px solid ${theme.colors.darkTheme[6]}`,
                  borderRadius: "6px",
                },
              })}
              p={5}
            >
              <ScrollArea
                scrollbarSize={2}
                h={180}
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
      );
    }
    return <>Hubo un problema</>;
  }
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
              colorScheme === "light" ? "#fff" : theme.colors.darkTheme[7],
          },
        })}
      >
        {showLayout()}
      </Container>
    </>
  );
}
