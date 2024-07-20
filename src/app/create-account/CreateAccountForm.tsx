"use client";

import { useForm } from "react-hook-form";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { createAccountSchema } from "@/schema/loginSchemas";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { useRouter } from "next/navigation";

interface CreateUserProps {
  name: string;
  email: string;
  password: string;
}

const initialValues: CreateUserProps = {
  name: "",
  email: "",
  password: "",
};

export default function CreateAccountForm() {
  const { colorScheme } = useMantineColorScheme();
  const router = useRouter();
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<CreateUserProps>({
    mode: "onChange",
    resolver: zodResolver(createAccountSchema),
    defaultValues: initialValues,
  });
  // console.log(form)

  const fnSubmit = async (data: CreateUserProps) => {
    try {
      if (data) {
        const nameFormat = data.name
          .split(" ")
          .map((word) => {
            return capitalizeFirstLetter(word);
          })
          .join(" ");
        const dataComplete: CreateUserProps = {
          name: nameFormat,
          email: data.email,
          password: data.password,
        };
        // TODO: if the data is ready to be sending, the user will navigate to the dashboard or any confirmation section?
        console.log(dataComplete);
        reset(initialValues);
        router.push("/login/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };
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
      <Text style={{ fontSize: "0.8rem" }}>
        Inserte los datos para crear la cuenta
      </Text>
      <form onSubmit={handleSubmit(fnSubmit)}>
        <Stack gap={4}>
          <TextInput
            error={errors.name?.message}
            mt="sm"
            label="Nombre de Usuario"
            placeholder="Nombre de Usuario"
            {...register("name", { required: true })}
            styles={(theme) => ({
              input: {
                backgroundColor:
                  colorScheme === "light" ? "#FFFFFF" : "#FFFFFF",
                color: `${theme.colors.lightTheme[3]}`,
              },
            })}
          />
          <TextInput
            error={errors.email?.message}
            label="Correo"
            placeholder="Correo"
            {...register("email", { required: true })}
            styles={(theme) => ({
              input: {
                backgroundColor:
                  colorScheme === "light" ? "#FFFFFF" : "#FFFFFF",
                color: `${theme.colors.lightTheme[3]}`,
              },
            })}
          />
          <PasswordInput
            error={errors.password?.message}
            label="Contraseña"
            placeholder="Contraseña"
            {...register("password", { required: true })}
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
            <Button type="submit" mt="sm" fullWidth color="#115dfe">
              Crear Usuario
            </Button>
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
              <Link href={"/"}>
                <Text
                  style={{
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    marginTop: "0.2rem",
                    color: "#115dfe",
                    textTransform: "uppercase",
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
