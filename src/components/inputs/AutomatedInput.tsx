/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect } from "react";
import {
  useMantineColorScheme,
  Checkbox,
  Center,
  Title,
  Flex,
} from "@mantine/core";
import { PiRobot } from "@/icons";
import classes from "@/styles/general-styles.module.css";
import { notifications } from "@mantine/notifications";

export default function AutomatedInput({
  automatedStatus,
}: {
  automatedStatus: boolean;
}): JSX.Element {
  const [checked, setChecked] = useState<boolean>(false);
  const { colorScheme } = useMantineColorScheme();

  useEffect(() => {
    setChecked(automatedStatus);
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
        Automatizado:
      </Title>
      <Flex align={"center"} gap={5}>
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
            <PiRobot />
          </Center>
        ) : (
          <></>
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
                title: "Recordatorio Automatizado",
                message:
                  "El recordatorio ha sido automatizado satisfactoriamente 🤖!",
                autoClose: 1000,
                withCloseButton: true,
              });
            } else {
              notifications.show({
                id: crypto.randomUUID(),
                color: "#115dfe",
                title: "Automatizacion Eliminada",
                message:
                  "La automatizacion del recordatorio ha sido eliminada satisfactoriamente 🤖!",
                autoClose: 1000,
                withCloseButton: true,
              });
            }
          }}
          style={{ marginTop: "-5px" }}
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
