/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import {
  Title,
  Stack,
  Flex,
  useMantineColorScheme,
  Button,
  TextInput,
} from "@mantine/core";
import { IoClose } from "@/icons";
import { useForm } from "react-hook-form";
// import { useDisclosure } from "@mantine/hooks";
import classesBtn from "@/styles/btn-styles.module.css";
import { notifications } from "@mantine/notifications";
import TitleSimpleLayout from "@/components/layout/TitleSimpleLayout";

interface TestProps {
  firstName: string;
  lastName: string;
  vehicle: string;
}

export default function Prueba() {
  const { colorScheme } = useMantineColorScheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      vehicle: "",
    },
  });
  const onSubmit = (data: TestProps) => console.log(data);
  console.log(errors);

  return (
    <Stack
      justify="space-between"
      style={{
        padding: "0 1rem",
        height: "95vh",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={"xs"}>
          <TitleSimpleLayout title="Crear Registro" />
          <Flex align={"center"} justify={"space-between"} w={"100%"}>
            <Title
              order={4}
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? theme.colors.lightTheme[3]
                      : theme.colors.darkTheme[2],
                },
              })}
            >
              Nombre
            </Title>
            <TextInput
              {...register("firstName", { required: true, max: 30, min: 3 })}
              leftSectionPointerEvents="none"
              placeholder={"Nombre"}
              w={200}
              size="sm"
              styles={(theme) => ({
                input: {
                  backgroundColor:
                    colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
                  color: `${theme.colors.lightTheme[3]}`,
                },
                section: {
                  color: theme.colors.lightTheme[3],
                },
              })}
            />
          </Flex>
          <Flex align={"center"} justify={"space-between"} w={"100%"}>
            <Title
              order={4}
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? theme.colors.lightTheme[3]
                      : theme.colors.darkTheme[2],
                },
              })}
            >
              Apellido
            </Title>
            <TextInput
              {...register("lastName", { required: true, max: 20, min: 3 })}
              leftSectionPointerEvents="none"
              placeholder={"Apellido"}
              w={200}
              size="sm"
              styles={(theme) => ({
                input: {
                  backgroundColor:
                    colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
                  color: `${theme.colors.lightTheme[3]}`,
                },
                section: {
                  color: theme.colors.lightTheme[3],
                },
              })}
            />
          </Flex>
          <Flex align={"center"} justify={"space-between"} w={"100%"}>
            <Title
              order={4}
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? theme.colors.lightTheme[3]
                      : theme.colors.darkTheme[2],
                },
              })}
            >
              Vehiculo
            </Title>
            <TextInput
              {...register("vehicle")}
              leftSectionPointerEvents="none"
              placeholder={"Vehiculo"}
              w={200}
              size="sm"
              styles={(theme) => ({
                input: {
                  backgroundColor:
                    colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
                  color: `${theme.colors.lightTheme[3]}`,
                },
                section: {
                  color: theme.colors.lightTheme[3],
                },
              })}
            />
          </Flex>
        </Stack>

        <Flex align={"center"} gap={"sm"} style={{ height: "2.25rem" }}>
          <Button
            // onClick={close}
            fullWidth
            variant="white"
            leftSection={<IoClose />}
            styles={(theme) => ({
              root: {
                border: `2px solid ${theme.colors.lightTheme[6]}`,
                color: `${theme.colors.lightTheme[6]}`,
              },
              section: { fontSize: "1.2rem" },
            })}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="filled"
            // leftSection={selectIcon(iconTag)}
            classNames={{
              root:
                colorScheme === "light"
                  ? classesBtn.btnAdd
                  : classesBtn.btnAdd_dark,
            }}
            styles={(theme) => ({
              section: { fontSize: "1.2rem" },
            })}
            onClick={() => {
              notifications.show({
                id: crypto.randomUUID(),
                color: "#2BDD66",
                title: "El Registro en la Base de Datos 📄",
                message:
                  "Se ha creado el registro en la Base de Datos satisfactoriamente 😎!",
                autoClose: 1000,
                withCloseButton: true,
              });
            }}
          >
            Crear Registro
          </Button>
        </Flex>
      </form>
    </Stack>
  );
}
