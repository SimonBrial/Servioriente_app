/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import {
  Center,
  Checkbox,
  Flex,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { HiOutlineLockClosed, HiOutlineLockOpen } from "@/icons";
import classes from "@/styles/general-styles.module.css";
import { notifications } from "@mantine/notifications";

export default function PrivateInput({
  userName,
  privateStatus,
}: {
  userName: string;
  privateStatus: boolean;
}): JSX.Element {
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
        <Checkbox
          color={colorScheme === "light" ? "#115dfe" : "#52A5E0"}
          checked={checked}
          onChange={(event) => {
            setChecked(event.currentTarget.checked);
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
      </Flex>
    </Flex>
  );
}
