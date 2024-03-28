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
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { TitleLayout } from "@/components/layout/TitleLayout";
import { AlarmProps } from "@/interface/interface";
import PrivateInput from "./PrivateInput";
import AutomatedInput from "./AutomatedInput";
import { IoClose, MdOutlinePlace } from "@/icons";
import BtnEdit from "@/components/buttons/BtnEdit";
import CreateAlarmLayout from "./layouts/CreateAlarmLayout";
import { ContainerInside } from "@/components/container/ContainerInside";

export default function AlarmDescription({
  objAlarm,
}: AlarmProps): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  const { height } = useViewportSize();
  const {
    privateAlarm,
    privateUser,
    description,
    automated,
    createdTo,
    createAt,
    color,
    title,
    icon,
  } = objAlarm;

  return (
    <ContainerInside allWhite={false} width="30%" withBorder>
      {objAlarm ? (
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
              title={title}
              color={color}
              icon={icon}
              onText={false}
            />
            <Flex justify={"space-between"}>
              <Title order={4}>Titulo:</Title>
              <Text style={{ color: `${color}` }}>{title}</Text>
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
            <PrivateInput userName={privateUser} privateStatus={privateAlarm} />
            <AutomatedInput automatedStatus={automated} />
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
              description=""
              labelBtn="Guardar"
              color=""
              title=""
              icon
            >
              <CreateAlarmLayout title="Editar Alarma" />
            </BtnEdit>
          </Flex>
        </Stack>
      ) : (
        <Stack
          h={"100%"}
          gap={5}
          justify="center"
          align="center"
          styles={(theme) => ({
            root: {
              color: "rgba(105, 105, 105, 0.3)",
              fontSize: "12rem",
            },
          })}
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
