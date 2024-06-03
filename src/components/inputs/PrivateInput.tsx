/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import {
  useMantineColorScheme,
  Checkbox,
  Center,
  Title,
  Flex,
  Text,
} from "@mantine/core";
import { HiOutlineLockClosed, HiOutlineLockOpen } from "@/icons";
import classes from "@/styles/general-styles.module.css";
import { notifications } from "@mantine/notifications";
import WarningInfo from "../WarningInfo";
import { Controller, Path } from "react-hook-form";

interface PrivateInputProps {
  userName: string;
  privateStatus: boolean;
  errorDescription: string | undefined;
  label: Path<any>;
  control: any;
}

export default function PrivateInput({
  errorDescription,
  privateStatus,
  userName,
  control,
  label,
}: PrivateInputProps): JSX.Element {
  const [checked, setChecked] = useState<boolean>(false);
  const { colorScheme } = useMantineColorScheme();
  useEffect(() => {
    setChecked(privateStatus);
  }, []);

  return (
    <Flex align={"center"} gap={5} justify={"space-between"}>
      <Title
        order={4}
        styles={(theme) => ({
          root: {
            color:
              colorScheme === "light"
                ? `${theme.colors.lightTheme[3]}`
                : `${theme.colors.darkTheme[2]}`,
          },
        })}
      >
        Privado:
      </Title>
      <Flex align={"center"} gap={5}>
        <Text
          size="1.05rem"
          styles={(theme) => ({
            root: {
              color:
                colorScheme === "light"
                  ? `${theme.colors.lightTheme[3]}`
                  : `${theme.colors.darkTheme[2]}`,
            },
          })}
        >
          {checked ? <>Simon Briceño</> : <></>}
        </Text>
        {checked ? (
          <Center
            styles={(theme) => ({
              root: {
                fontSize: "1.3rem",
                color:
                  colorScheme === "light"
                    ? `${theme.colors.lightTheme[3]}`
                    : `${theme.colors.darkTheme[2]}`,
              },
            })}
          >
            <HiOutlineLockClosed />
          </Center>
        ) : (
          <Center
            styles={(theme) => ({
              root: {
                fontSize: "1.3rem",
                color:
                  colorScheme === "light"
                    ? `${theme.colors.lightTheme[3]}`
                    : `${theme.colors.darkTheme[2]}`,
              },
            })}
          >
            <HiOutlineLockOpen />
          </Center>
        )}
        <Controller
          name={label}
          control={control}
          render={({ field: { onBlur, onChange, value, ref } }) => {
            return (
              <Checkbox
                ref={ref}
                error={errorDescription}
                onBlur={onBlur}
                value={value}
                color={colorScheme === "light" ? "#115dfe" : "#52A5E0"}
                onChange={(e: any) => {
                  onChange(e.currentTarget.checked);
                  setChecked(e.currentTarget.checked);
                  if (!checked) {
                    notifications.show({
                      id: crypto.randomUUID(),
                      color: "#2BDD66",
                      title: "Recordatorio Privado",
                      message:
                        "El recordatorio solo podra ser visto por usted!",
                      autoClose: 1000,
                      withCloseButton: true,
                    });
                  } else {
                    notifications.show({
                      id: crypto.randomUUID(),
                      color: "#115dfe",
                      title: "Recordatorio Publico",
                      message:
                        "El recordatorio ahora se podra observar por cualquier usuario que acceda a la aplicacion!",
                      autoClose: 1000,
                      withCloseButton: true,
                    });
                  }
                }}
                classNames={{
                  input:
                    colorScheme === "light"
                      ? classes.checkbox
                      : classes.checkbox_dark,
                }}
              />
            );
          }}
        />

        <WarningInfo description="Si no se selecciona, se mantendra su valor por defecto 'Publico'" />
      </Flex>
    </Flex>
  );
}
