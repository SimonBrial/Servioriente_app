"use client";

import { useRef } from "react";
import { ActionIcon, Flex, Title, useMantineColorScheme } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import { HiOutlineClock } from "@/icons";
import { Path, Controller } from "react-hook-form";

interface TimeInputProps {
  asterisk: boolean;
  errorDescription: string | undefined;
  label: Path<any>;
  required: boolean;
  control: any;
}

export default function DateTimePickerInput({
  errorDescription,
  asterisk,
  control,
  label,
}: TimeInputProps) {
  const { colorScheme } = useMantineColorScheme();
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
          Hora
        </Title>{" "}
        {asterisk ? <span style={{ color: "red" }}>*</span> : <></>}
      </Flex>
      <Controller
        name={label}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => {
          // console.log("DateTimePickerInput: ",value)
          return (
            <DateTimePicker
              error={errorDescription}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              leftSection={<HiOutlineClock style={{ color: "#696969" }} />}
              styles={(theme) => ({
                root: { width: "200px" },
                input: {
                  backgroundColor:
                    colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
                  color: `${theme.colors.lightTheme[3]}`,
                },
              })}
            />
          );
        }}
      />
    </Flex>
  );
}
