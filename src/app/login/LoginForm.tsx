"use client";

import { useForm } from "react-hook-form";
import {
  useMantineColorScheme,
  PasswordInput,
  TextInput,
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
import { loginSchema } from "@/schema/loginSchemas";
import { useRouter } from "next/navigation";

interface LoginUserProps {
  email: string;
  password: string;
}

const initialValues: LoginUserProps = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const { colorScheme } = useMantineColorScheme();
  const router = useRouter();

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<LoginUserProps>({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
    defaultValues: initialValues,
  });

  const fnSubmit = async (data: LoginUserProps) => {
    try {
      if (data) {
        const dataComplete: LoginUserProps = {
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
      <form onSubmit={handleSubmit(fnSubmit)}>
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
          {/* <Flex align={"center"} gap={6}>
            <Checkbox color="#115dfe" />
            <Text>Recodar mi contraseña</Text>
          </Flex> */}
          <Stack gap={4} align="end">
          <Button type="submit" mt="sm" fullWidth color="#115dfe">
                Iniciar Sesion
              </Button>
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
