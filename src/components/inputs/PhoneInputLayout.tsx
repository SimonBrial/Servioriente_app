"use client";

import { StateSelectProps } from "@/interface/interface";
import {
  useMantineColorScheme,
  TextInput,
  Select,
  Title,
  Flex,
} from "@mantine/core";
import { Controller } from "react-hook-form";

interface PhoneInputLayoutProps extends StateSelectProps {
  erroCodePhone: string | undefined;
}

export default function PhoneInputLayout({
  errorDescription,
  erroCodePhone,
  inputSize,
  register,
  required,
  asterisk,
  control,
  label,
  max,
  min,
}: PhoneInputLayoutProps): JSX.Element {
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
          Telefono
        </Title>
        {asterisk ? <span style={{ color: "red" }}>*</span> : <></>}
      </Flex>
      <Flex gap={4}>
        <Controller
          name={"phonePre"}
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Select
              error={erroCodePhone}
              allowDeselect={false}
              w={80}
              placeholder="****"
              data={["0424", "0412", "0426", "0414"]}
              defaultValue={"0424"}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
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
        <Controller
          name={"phonePost"}
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <TextInput
              error={errorDescription}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              w={150}
              placeholder="*** ** **"
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
        {/* <TextInput
          w={150}
          placeholder="*** ** **"
          styles={(theme) => ({
            input: {
              backgroundColor: colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
              color: `${theme.colors.lightTheme[3]}`,
            },
          })}
        /> */}
      </Flex>
    </Flex>
  );
}
