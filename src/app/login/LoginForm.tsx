"use client";

import { useForm } from "@mantine/form";
import {
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
        boxShadow: "0px 10px 12px -5px rgba(255,255,255,0.4)"
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
          />
          <PasswordInput
            label="Contraseña"
            placeholder="Contraseña"
            {...form.getInputProps("password")}
          />
          <Flex align={"center"} gap={6}>
            <Checkbox color="#115dfe" />
            <Text>Recodar mi contraseña</Text>
          </Flex>
          <Stack gap={4} align="end">
            <Link href={"login/data-base"} style={{ width: "100%" }}>
              <Button type="submit" mt="sm" fullWidth color="#115dfe">
                Iniciar Sesion
              </Button>
            </Link>
            <Link href={"create-account"}>
              <Text style={{ fontSize: "0.8rem", cursor: "pointer", marginTop: "0.2rem" }}>
                Olvide mi Contraseña
              </Text>
            </Link>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
}
