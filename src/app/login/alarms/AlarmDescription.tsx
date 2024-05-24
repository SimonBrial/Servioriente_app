"use client";

import {
  useMantineColorScheme,
  ScrollArea,
  Button,
  Stack,
  Title,
  Text,
  Flex,
  Box,
  Center,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { TitleLayout } from "@/components/layout/TitleLayout";
import {
  HiOutlineLockClosed,
  HiOutlineLockOpen,
  IoClose,
  MdOutlinePlace,
  PiRobot,
} from "@/icons";
import BtnEdit from "@/components/buttons/BtnEdit";
import CreateAlarmLayout from "./layouts/CreateAlarmLayout";
import { ContainerInside } from "@/components/container/ContainerInside";
import { useAlarmStore } from "@/store/alarm-store";

export default function AlarmDescription(): JSX.Element {
  const { alarmDescription } = useAlarmStore();

  const { colorScheme } = useMantineColorScheme();
  const { height } = useViewportSize();
  const {
    folderIcon,
    folderAssigned,
    privateAlarm,
    privateUser,
    description,
    alarmTitle,
    automated,
    createdTo,
    createAt,
    color,
    icon,
    id,
  } = alarmDescription;

  console.log(alarmDescription);

  return (
    <ContainerInside allWhite={false} width="30%" withBorder>
      {alarmDescription ? (
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
              title={folderAssigned}
              color={color}
              icon={folderIcon}
              onText={false}
            />
            <Flex justify={"space-between"}>
              <Title order={4}>Titulo:</Title>
              <Text style={{ color: `${color}` }}>{alarmTitle}</Text>
            </Flex>
            <Flex justify={"space-between"}>
              <Title order={4}>Icono:</Title>
              <Text size="1.2rem">{icon}</Text>
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
                {createAt}
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
            <Button
              // onClick={close}
              fullWidth
              variant="white"
              leftSection={<IoClose />}
              styles={(theme) => ({
                root: {
                  border: `2px solid ${theme.colors.principalTheme[6]}`,
                  color: `${theme.colors.principalTheme[6]}`,
                },
                section: { fontSize: "1.2rem" },
              })}
            >
              Cancelar
            </Button>
            <BtnEdit
              key={crypto.randomUUID()}
              id={crypto.randomUUID()}
              buttonStyles="normal"
              description="Los Datos de la Recordatorio han sido editados y guardados satisfactoriamente!"
              labelBtn="Guardar"
              color="#2BDD66"
              title="Recordatorio Editado"
            >
              {/* <CreateAlarmLayout title="Editar Recordatorio" /> */}
              prueba
            </BtnEdit>
          </Flex>
        </Stack>
      ) : (
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
          <MdOutlinePlace />
          <Text size="2.5rem" style={{ textAlign: "center" }}>
            Selecciona un recordatorio
          </Text>
        </Stack>
      )}
    </ContainerInside>
  );
}
