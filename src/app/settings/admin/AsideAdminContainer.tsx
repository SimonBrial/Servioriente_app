"use client";

import { ContainerInside } from "@/components/container/ContainerInside";
import { TbEdit } from "@/icons";
import {
  useMantineColorScheme,
  Avatar,
  Button,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";

export const AsideAdminContainer = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <ContainerInside withBorder width="30%" allWhite={false}>
      <Stack justify="space-between" style={{ height: "100%" }}>
        <Stack
          style={{
            height: "100%",
          }}
          align="center"
          justify="center"
        >
          <Avatar size={"7rem"} />
          <Stack gap={4} align="center">
            <Text style={{ fontSize: "1.2rem" }}>Simon Briceño</Text>
            <Text
              styles={(theme) => ({
                root: {
                  fontSize: "0.8rem",
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.principalTheme[6]}`
                      : theme.colors.darkTheme[1],
                },
              })}
            >
              Admin
            </Text>
            <Text>27 años</Text>
            <Text>correo@correo.com</Text>
            <Text>Carabobo, Valencia VE</Text>
            <Text>16 Dic. 1996</Text>
            <Text>Ofi. Valencia</Text>
          </Stack>
        </Stack>
        <Button
          leftSection={<TbEdit />}
          styles={(theme) => ({
            section: { fontSize: "1.2rem" },
            root: { backgroundColor: `${theme.colors.principalTheme[6]}` },
          })}
        >
          Editar
        </Button>
      </Stack>
    </ContainerInside>
  );
};
