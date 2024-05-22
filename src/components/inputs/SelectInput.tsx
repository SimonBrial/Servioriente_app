"use client";

import { Select, Flex, Title, useMantineColorScheme } from "@mantine/core";
import { Controller, Path } from "react-hook-form";

interface SelectInputProps {
  errorDescription: string | undefined;
  periodeArr: string[];
  inputSize: string;
  asterisk: boolean;
  label: Path<any>;
  title: string;
  control: any;
}

export default function SelectInput({
  errorDescription,
  periodeArr,
  inputSize,
  asterisk,
  control,
  title,
  label,
}: SelectInputProps): JSX.Element {
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
          {title}
        </Title>
        {asterisk ? <span style={{ color: "red" }}>*</span> : <></>}
      </Flex>
      <Controller
        name={label}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => (
          <Select
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            searchable
            error={errorDescription}
            placeholder={title}
            data={periodeArr}
            maxDropdownHeight={200}
            allowDeselect={false}
            w={inputSize}
            styles={(theme) => ({
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
