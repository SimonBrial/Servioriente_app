"use client";

import { VenezuelaStates } from "@/data";
import { MdOutlinePlace } from "@/icons";
import { StateSelectProps } from "@/interface/interface";
import { Flex, Select, Title, useMantineColorScheme } from "@mantine/core";
import { Controller } from "react-hook-form";

export default function StateSelect({
  errorDescription,
  inputSize,
  register,
  asterisk,
  required,
  control,
  label,
  max,
  min,
}: StateSelectProps) {
  const { colorScheme } = useMantineColorScheme();
  const stateArray = VenezuelaStates.map((state) => state.estado);
  return (
    <Flex align={"center"} justify={"space-between"}>
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
          Estado
        </Title>
        {asterisk ? <span style={{ color: "red" }}>*</span> : <></>}
      </Flex>
      <Controller
        name={label}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Select
            searchable
            error={errorDescription}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            leftSection={<MdOutlinePlace />}
            defaultValue={stateArray[0]}
            w={inputSize}
            placeholder="Seleccione un Estado"
            data={stateArray}
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
