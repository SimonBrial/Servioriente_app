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

export default function CreateAccountForm() {
  const form = useForm({
    initialValues: {
      password: "",
      email: "",
      name: "",
    },
    validate: {
      password: (value) =>
        value.length < 2 ? "La contraseña o el password son invalidos" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Correo Invalido"),
      name: (value) =>
        value.length < 3
          ? "Nombre de usuario aceptable"
          : "Nombre de usuario debe contenener mas de 3 letras",
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
      }}
      mx="auto"
    >
      <Title order={3}>Bienvenido a ServiOriente</Title>
      <Text style={{ fontSize: "0.8rem" }}>
        Inserte los datos para crear la cuenta
      </Text>
      <form onSubmit={form.onSubmit(console.log)}>
        <Stack gap={4}>
          <TextInput
            mt="sm"
            label="Nombre de Usuario"
            placeholder="Nombre de Usuario"
            {...form.getInputProps("name")}
          />
          <TextInput
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
            <Link href={"/login/dashboard"} style={{ width: "100%" }}>
              <Button type="submit" mt="sm" fullWidth color="#115dfe">
                Crear Usuario
              </Button>
            </Link>
            <Flex gap={6}>
              <Text
                style={{
                  fontSize: "0.8rem",
                  cursor: "pointer",
                  marginTop: "0.2rem",
                }}
              >
                Ya tengo una cuenta,
              </Text>
              <Link href={"login"}>
                <Text
                  style={{
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    marginTop: "0.2rem",
                    color: "#115dfe",
                    textTransform: "uppercase"
                  }}
                >
                  Iniciar Sesion
                </Text>
              </Link>
            </Flex>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
}
