"use client";

import { HorizontalLayoutProps } from "@/interface/interface";
import { Flex, NumberInput, Title, useMantineColorScheme } from "@mantine/core";
import { Controller, Path } from "react-hook-form";

interface NumberInputPros {
  errorDescription: string | undefined;
  icon: React.ReactNode;
  asterisk: boolean;
  inputSize: string;
  label: Path<any>;
  title: string;
  control: any;
}

export const NumberHorizontalInput = ({
  errorDescription,
  inputSize,
  asterisk,
  control,
  label,
  title,
  icon,
}: NumberInputPros) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex align={"center"} justify={"space-between"} w={"100%"}>
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
        </Title>{" "}
        {asterisk ? <span style={{ color: "red" }}>*</span> : <></>}
      </Flex>
      <Controller
        control={control}
        name={label}
        render={({ field: { onChange, onBlur, value } }) => {
          console.log(typeof value);
          return (
            <NumberInput
              error={errorDescription}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              w={inputSize}
              leftSection={icon}
              placeholder={title}
              allowNegative={false}
              styles={(theme) => ({
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
};
