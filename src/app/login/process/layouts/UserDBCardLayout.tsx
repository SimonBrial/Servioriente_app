"use client";

import {
  useMantineColorScheme,
  Avatar,
  Group,
  Text,
  Flex,
  Badge,
  Center,
} from "@mantine/core";
import classes from "@/styles/card-process.module.css";
import { GeneralDivider } from "@/components/GeneralDivider";
import { ListDBProps } from "@/interface/interface";
import { useProcessStore } from "@/store/process-store";
import { useDataBaseStore } from "@/store/db-store";
import TooltipLayout from "@/components/TooltipLayout";
import { PiWarningCircleBold } from "@/icons";
import { processTitle } from "@/types/types";

export default function UserDBCardLayout({
  userData,
}: {
  userData: ListDBProps;
}) {
  const { colorScheme } = useMantineColorScheme();
  const { fnShowDescription, dataShow } = useProcessStore();
  const { data } = useDataBaseStore();
  // console.log(dataShow);

  const RCVStatusBadge = ({
    status,
    color,
  }: {
    status: string;
    color: string;
  }): JSX.Element => {
    return (
      <TooltipLayout label={status} position="top-end">
        <Center>
          <PiWarningCircleBold style={{ fontSize: "1.2rem", color: color }} />
        </Center>
      </TooltipLayout>
    );
  };

  const RCVStatus = () => {
    if (userData.typeStatus === "Entregado") {
      return <RCVStatusBadge status="RCV(s) Entregada(s)" color="#2BDD66" />;
    }
    if (userData.typeStatus === "Rechazado") {
      return <RCVStatusBadge status="RCV(s) Rechazada(s)" color="#F0185C" />;
    }
    return <RCVStatusBadge status="RCV(s) en proceso" color="#115dfe" />;
  };

  return (
    <Group
      className={
        colorScheme === "light" ? classes.userDbCard : classes.userDbCard_dark
      }
      onClick={() => fnShowDescription(userData.id, data)}
      justify="space-between"
      align="center"
    >
      <Flex gap={6} align={"center"}>
        <Flex gap={6} align={"center"}>
          <Avatar
            size={"2rem"}
            color={colorScheme === "light" ? "#115dfe" : "#52a5e0"}
          />
          <GeneralDivider orientation="vertical" />
        </Flex>
        <Text>
          {userData.firstName} {userData.lastName}
        </Text>
      </Flex>
      {RCVStatus()}
    </Group>
  );
}

{
  /*
  <Box
      className={
        colorScheme === "light"
          ? classes.userDbCard
          : classes.userDbCard_dark
      }
    >
      <Group mb={5}>
        <Flex
          gap={6}
          className={
            opened
              ? colorScheme === "light"
                ? classes.userDbCard_item
                : classes.userDbCard_item_dark
              : ""
          }
          onClick={toggle}
          style={{ width: "100%" }}
          align={"center"}
        >
          <Center style={{ fontSize: "1.5rem" }}>
            <HiOutlineUser />
          </Center>
          <Text>Simon Briceño</Text>
        </Flex>
      </Group>

      <Collapse in={opened}>
        <Stack gap={6} my={2}>
          <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
          <Flex
            gap={0}
            className={
              colorScheme === "light"
                ? classes.userDbCard_item
                : classes.userDbCard_item_dark
            }
            align={"center"}
            justify={"space-between"}
          >
            <Text size="xs">Vehiculo</Text>
            <Text style={{ marginTop: "-0.25rem" }}>Jeep</Text>
          </Flex>
          <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
          <Flex
            gap={0}
            className={
              colorScheme === "light"
                ? classes.userDbCard_item
                : classes.userDbCard_item_dark
            }
            align={"center"}
            justify={"space-between"}
          >
            <Text size="xs">Zona</Text>
            <Text style={{ marginTop: "-0.25rem" }}>Carabobo</Text>
          </Flex>
          <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
          <Flex
            justify={"space-between"}
            className={
              colorScheme === "light"
                ? classes.userDbCard_item
                : classes.userDbCard_item_dark
            }
            align={"center"}
          >
            <Text size="xs">Placa del vehiculo</Text>
            <Text style={{ marginTop: "-0.25rem" }}>DA58TG</Text>
          </Flex>
          <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
          <Flex
            justify={"space-between"}
            className={
              colorScheme === "light"
                ? classes.userDbCard_item
                : classes.userDbCard_item_dark
            }
            align={"center"}
          >
            <Text size="xs">Correo</Text>
            <Text style={{ marginTop: "-0.25rem" }}>corre@correo.com</Text>
          </Flex>
        </Stack>
        <Stack gap={6} my={2}>
          <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
          <Flex
            justify={"space-between"}
            className={
              colorScheme === "light"
                ? classes.userDbCard_item
                : classes.userDbCard_item_dark
            }
            align={"center"}
          >
            <Text size="xs">Cumpleaños</Text>
            <Text style={{ marginTop: "-0.25rem" }}>02/05/1992</Text>
          </Flex>
        </Stack>
        <Stack gap={6} my={2}>
          <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
          <Flex
            justify={"space-between"}
            className={
              colorScheme === "light"
                ? classes.userDbCard_item
                : classes.userDbCard_item_dark
            }
            align={"center"}
          >
            <Text size="xs">Instagram</Text>
            <Text style={{ marginTop: "-0.25rem" }}>@instagram</Text>
          </Flex>
        </Stack>
        <Stack gap={6} my={2}>
          <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
          <Flex
            justify={"space-between"}
            className={
              colorScheme === "light"
                ? classes.userDbCard_item
                : classes.userDbCard_item_dark
            }
            align={"center"}
          >
            <Text size="xs">Facebook</Text>
            <Text style={{ marginTop: "-0.25rem" }}>Facebook</Text>
          </Flex>
        </Stack>
        <Stack gap={6} my={2}>
          <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
          <Flex
            justify={"space-between"}
            className={
              colorScheme === "light"
                ? classes.userDbCard_item
                : classes.userDbCard_item_dark
            }
            align={"center"}
          >
            <Text size="xs">Telefono/ Whatsapp</Text>
            <Text style={{ marginTop: "-0.25rem" }}>0416-684.95.78</Text>
          </Flex>
        </Stack>
      </Collapse>
    </Box>
  */
}
