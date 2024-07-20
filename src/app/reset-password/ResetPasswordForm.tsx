"use client";

import { useForm } from "react-hook-form";
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
  TextInput,
} from "@mantine/core";
import React from "react";
import Link from "next/link";
import { IoArrowBackOutline } from "@/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { restPasswordSchema } from "@/schema/loginSchemas";
import { useRouter } from "next/navigation";

interface ResetPasswordProps {
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: ResetPasswordProps = {
  email: "",
  password: "",
  confirmPassword: "",
};

export default function ResetPasswordForm() {
  const { colorScheme } = useMantineColorScheme();
  const router = useRouter();
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<ResetPasswordProps>({
    mode: "onChange",
    resolver: zodResolver(restPasswordSchema),
    defaultValues: initialValues,
  });

  const fnSubmit = async (data: ResetPasswordProps) => {
    try {
      if (data) {
        const dataComplete: ResetPasswordProps = {
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
        };
        // TODO: if the data is ready to be sending, the user will navigate to the dashboard or any confirmation section?
        console.log(dataComplete);
        reset(initialValues);
        // router.push("/login/dashboard");
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
      <Text style={{ fontSize: "0.8rem" }}>Restauracion de la Contraseña</Text>
      <form onSubmit={handleSubmit(fnSubmit)}>
        <Stack gap={4}>
          <Stack gap={4}>
            <TextInput
              error={errors.email?.message}
              mt="sm"
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
              label="Nueva Contraseña"
              placeholder="Nueva Contraseña"
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
            <PasswordInput
              error={errors.confirmPassword?.message}
              label="Repetir Contraseña"
              placeholder="Repetir Contraseña"
              {...register("confirmPassword", { required: true })}
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
                Restaurar Contraseña
              </Button>
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
        </Stack>
      </form>
    </Box>
  );
}
