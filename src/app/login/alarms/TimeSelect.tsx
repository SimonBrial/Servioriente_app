"use client";

import { useRef } from "react";
import { ActionIcon, Flex, Title, useMantineColorScheme } from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { HiOutlineClock } from "@/icons";
import { Path, Controller } from "react-hook-form";

interface TimeInputProps {
  asterisk: boolean;
  errorDescription: string | undefined;
  label: Path<any>;
  required: boolean;
  control: any;
}

export default function TimeSelect({
  errorDescription,
  asterisk,
  control,
  label,
}: TimeInputProps): JSX.Element {
  const ref = useRef<HTMLInputElement>(null);
  const { colorScheme } = useMantineColorScheme();

  const pickerControl = (
    <ActionIcon
      variant="subtle"
      color="gray"
      onClick={() => ref.current?.showPicker()}
    >
      <HiOutlineClock style={{ color: "#696969" }} />
    </ActionIcon>
  );

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
        render={({ field: { onChange, onBlur, value } }) => (
          <TimeInput
            error={errorDescription}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            ref={ref}
            leftSection={pickerControl}
            styles={(theme) => ({
              root: { width: "200px" },
              input: {
                backgroundColor:
                  colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
                color: `${theme.colors.lightTheme[3]}`,
              },
            })}
          />
        )}
      />
    </Flex>
  );
}
