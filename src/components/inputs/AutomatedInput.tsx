/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect, forwardRef } from "react";
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
import WarningInfo from "../WarningInfo";
import { Controller, Path } from "react-hook-form";

interface AutomatedInputProps {
  userName: string;
  automatedStatus: boolean;
  errorDescription: string | undefined;
  label: Path<any>;
  control: any;
}

export const AutomatedInput = ({
  errorDescription,
  automatedStatus,
  userName,
  control,
  label,
}: AutomatedInputProps) => {
  {
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
          <Controller
            name={label}
            control={control}
            render={({ field: { onChange, onBlur, value, ref } }) => {
              return (
                <Flex align={"center"} gap={5}>
                  {value ? (
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
                    ref={ref}
                    error={errorDescription}
                    onBlur={onBlur}
                    value={value}
                    checked={value}
                    color={colorScheme === "light" ? "#115dfe" : "#52A5E0"}
                    onChange={(e: any) => {
                      onChange(e.currentTarget.checked);
                      setChecked(e.currentTarget.checked);
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
              );
            }}
          />
          <WarningInfo description="Si no se selecciona, se mantendra su valor por defecto 'No Automatizado'" />
        </Flex>
      </Flex>
    );
  }
};
