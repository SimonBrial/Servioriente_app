"use client";

import { ContainerInside } from "@/components/container/ContainerInside";
import UserSelectedLayout from "./UserSelectedLayout";
import { HiOutlineCheck, IoClose } from "@/icons";
import { Button, Flex, Stack, useMantineColorScheme } from "@mantine/core";
import classes from "@/styles/btn-styles.module.css";
import { notifications } from "@mantine/notifications";
import Link from "next/link";

export default function UserSelectedContainer() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <ContainerInside withBorder width="70%" allWhite={false}>
      <Stack justify="space-between" style={{ height: "100%" }}>
        <UserSelectedLayout />
        <Flex gap={6}>
          <Button
            onClick={() => console.log("first")}
            fullWidth
            variant="white"
            leftSection={<IoClose />}
            classNames={{
              root:
                colorScheme === "light"
                  ? classes.btnCancel
                  : classes.btnCancel_dark,
            }}
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
          <Link href={"/login/process"} style={{ width: "100%" }}>
            <Button
              fullWidth
              variant="default"
              leftSection={<HiOutlineCheck />}
              styles={(theme) => ({
                root: {
                  color: "white",
                  backgroundColor: `${theme.colors.principalTheme[6]}`,
                },
                section: { fontSize: "1.2rem" },
              })}
              onClick={() =>
                notifications.show({
                  id: crypto.randomUUID(),
                  color: "#2BDD66",
                  title: "Usuario Seleccionado",
                  message:
                    "Se ha creado la tarjeta de RCV del usuario seleccionado satisfactoriamente!",
                  autoClose: 1000,
                  withCloseButton: true,
                })
              }
            >
              Seleccionar
            </Button>
          </Link>
        </Flex>
      </Stack>
    </ContainerInside>
  );
}
