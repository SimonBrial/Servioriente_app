"use client";

import { useForm } from "@mantine/form";
import {
  useMantineColorScheme,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Stack,
  Flex,
  Text,
  Box,
  Center,
} from "@mantine/core";
import React from "react";
import Link from "next/link";
import { IoArrowBackOutline } from "@/icons";

export default function ResetPasswordForm() {
  const { colorScheme } = useMantineColorScheme();
  const form = useForm({
    initialValues: {
      newPassword: "",
      repeatNewPassword: "",
    },
    validate: {
      newPassword: (value) =>
        value.length < 2 ? "La contraseña o el password son invalidos" : null,
      repeatNewPassword: (value) =>
        value.length < 2 ? "La contraseña o el password son invalidos" : null,
    },
  });
  // console.log(form)
  return (
    <Box
      style={{
        width: "60%",
        border: "1px solid #343434",
        borderRadius: "6px",
        padding: "1.8rem 1.2rem",
        boxShadow: "0px 10px 12px -5px rgba(255,255,255,0.4)",
        cursor: "default",
      }}
      mx="auto"
    >
      <Title order={3}>Bienvenido a ServiOriente</Title>
      <Text style={{ fontSize: "0.8rem" }}>Restauracion de la Contraseña</Text>
      <form onSubmit={form.onSubmit(console.log)}>
        <Stack gap={4}>
          <Stack gap={2} py={"0.5rem"}>
            <Flex justify={"space-between"}>
              <Text style={{ fontSize: "1rem" }}>Usuario:</Text>
              <Text style={{ fontSize: "1.2rem", color: "#115dfe" }}>
                Mario Hurtado
              </Text>
            </Flex>
          </Stack>
          <PasswordInput
            label="Nueva Contraseña"
            placeholder="Nueva Contraseña"
            {...form.getInputProps("newPassword")}
            styles={(theme) => ({
              input: {
                backgroundColor:
                  colorScheme === "light" ? "#FFFFFF" : "#FFFFFF",
                color: theme.colors.lightTheme[3],
              },
              visibilityToggle: { color: theme.colors.lightTheme[3] },
            })}
          />
          <PasswordInput
            label="Repetir Contraseña"
            placeholder="Repetir Contraseña"
            {...form.getInputProps("repeatNewPassword")}
            styles={(theme) => ({
              input: {
                backgroundColor:
                  colorScheme === "light" ? "#FFFFFF" : "#FFFFFF",
                color: theme.colors.lightTheme[3],
              },
              visibilityToggle: { color: theme.colors.lightTheme[3] },
            })}
          />
          <Flex align={"center"} gap={6}>
            <Checkbox color="#115dfe" />
            <Text>Recodar mi contraseña</Text>
          </Flex>
          <Stack gap={4} align="end">
            <Link href={"/login/dashboard"} style={{ width: "100%" }}>
              <Button type="submit" mt="sm" fullWidth color="#115dfe">
                Restaurar Contraseña
              </Button>
            </Link>
            <Link href={"/"}>
              <Flex align={"center"} gap={6}>
                <Center style={{ fontSize: "1rem", marginTop: "0.2rem" }}>
                  <IoArrowBackOutline />
                </Center>
                <Text
                  style={{
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    marginTop: "0.2rem",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                  }}
                >
                  Volver
                </Text>
              </Flex>
            </Link>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
}
