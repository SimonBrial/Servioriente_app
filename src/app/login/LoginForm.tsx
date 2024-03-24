"use client";

import { useForm } from "@mantine/form";
import {
  useMantineColorScheme,
  PasswordInput,
  TextInput,
  Checkbox,
  Button,
  Title,
  Stack,
  Flex,
  Text,
  Box,
} from "@mantine/core";
import React from "react";
import Link from "next/link";

export default function LoginForm() {
  const { colorScheme } = useMantineColorScheme();
  const form = useForm({
    initialValues: {
      password: "",
      email: "",
    },
    validate: {
      password: (value) =>
        value.length < 2 ? "La contraseña o el password son invalidos" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Correo Invalido"),
    },
  });
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
      <form onSubmit={form.onSubmit(console.log)}>
        <Stack gap={4}>
          <TextInput
            mt="sm"
            label="Correo"
            placeholder="Correo"
            {...form.getInputProps("email")}
            styles={(theme) => ({
              input: {
                backgroundColor:
                  colorScheme === "light" ? "#FFFFFF" : "#FFFFFF",
                color: `${theme.colors.lightTheme[3]}`,
              },
            })}
          />
          <PasswordInput
            label="Contraseña"
            placeholder="Contraseña"
            {...form.getInputProps("password")}
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
            <Link href={"login/dashboard"} style={{ width: "100%" }}>
              <Button type="submit" mt="sm" fullWidth color="#115dfe">
                Iniciar Sesion
              </Button>
            </Link>
            <Flex
              align={"center"}
              justify={"space-between"}
              style={{ width: "100%" }}
            >
              <Link href={"create-account"}>
                <Text
                  style={{
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    marginTop: "0.2rem",
                  }}
                >
                  Crear Cuenta
                </Text>
              </Link>
              <Link href={"reset-password"}>
                <Text
                  style={{
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    marginTop: "0.2rem",
                  }}
                >
                  Olvide mi Contraseña
                </Text>
              </Link>
            </Flex>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
}
