"use client";

import { HorizontalLayoutProps } from "@/interface/interface";
import { Flex, TextInput, Title, useMantineColorScheme } from "@mantine/core";
import { Controller } from "react-hook-form";

const HorizontalInputLayout = ({
  errorDescription,
  inputSize,
  asterisk,
  control,
  title,
  label,
  icon,
}: HorizontalLayoutProps) => {
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
        name={label}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            error={errorDescription !== undefined ? errorDescription : null}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            leftSectionPointerEvents="none"
            leftSection={icon ? icon : null}
            placeholder={title}
            w={inputSize}
            size="sm"
            styles={(theme) => ({
              input: {
                backgroundColor:
                  colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
                color: `${theme.colors.lightTheme[3]}`,
              },
              section: {
                color: theme.colors.lightTheme[3],
              },
            })}
          />
        )}
      />
    </Flex>
  );
};

export default HorizontalInputLayout;
