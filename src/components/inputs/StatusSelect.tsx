"use client";

import { HiOutlineExclamationTriangle } from "@/icons";
import { StateSelectProps } from "@/interface/interface";
import { degreeType } from "@/types/types";
import { Flex, Select, Title, useMantineColorScheme } from "@mantine/core";
import React from "react";
import { Controller } from "react-hook-form";

interface StatusSelectProps extends StateSelectProps {
  typeArray: "process" | "task";
}

export default function StatusSelect({
  typeArray,
  inputSize,
  register,
  asterisk,
  required,
  control,
  label,
  max,
  min,
}: StatusSelectProps) {
  const { colorScheme } = useMantineColorScheme();
  const processType = [
    "Espera",
    "Generacion",
    "Pagado",
    "Entregado",
    "Rechazado",
  ];
  const taskType: degreeType[] = [
    "Muy Importante",
    "Importante",
    "Normal",
    "Nada Importante",
    "Poco Importante",
  ];
  return (
    <Flex justify={"space-between"} align={"center"}>
      <Flex>
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
          Estatus
        </Title>
        {asterisk ? <span style={{ color: "red" }}>*</span> : <></>}
      </Flex>
      <Controller
        name={label}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Select
            leftSection={<HiOutlineExclamationTriangle />}
            allowDeselect={false}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            w={inputSize}
            placeholder="Estatus"
            data={typeArray === "process" ? processType : taskType}
            defaultValue={
              typeArray === "process" ? processType[0] : taskType[0]
            }
            styles={(theme) => ({
              input: {
                cursor: "pointer",
                backgroundColor:
                  colorScheme === "light"
                    ? "#FFFFFF"
                    : theme.colors.darkTheme[2],
                color: colorScheme === "light" ? "#696969" : "#696969",
              },
              section: {
                color: colorScheme === "light" ? "#696969" : "#696969",
              },
            })}
          />
        )}
      />
    </Flex>
  );
}
