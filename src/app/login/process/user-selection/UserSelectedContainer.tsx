"use client";

import { ContainerInside } from "@/components/container/ContainerInside";
import UserSelectedLayout from "./UserSelectedLayout";
import { HiOutlineCheck, HiOutlineUserCircle, IoClose } from "@/icons";
import { Button, Text, Stack, useMantineColorScheme } from "@mantine/core";
import classes from "@/styles/btn-styles.module.css";
import { notifications } from "@mantine/notifications";
import Link from "next/link";
import { useState } from "react";
import { useProcessStore } from "@/store/process-store";

export default function UserSelectedContainer() {
  const { showRegisterDescription } = useProcessStore();
  const { colorScheme } = useMantineColorScheme();
  return (
    <ContainerInside withBorder width="70%" allWhite={false}>
      {showRegisterDescription ? (
        <UserSelectedLayout />
      ) : (
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
          <HiOutlineUserCircle />
          <Text size="2.5rem" style={{ textAlign: "center" }}>
            Debe seleccionar un registro de usuario para visualizarlo
          </Text>
        </Stack>
      )}
    </ContainerInside>
  );
}
