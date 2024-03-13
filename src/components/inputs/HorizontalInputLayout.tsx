"use client";

import { HorizontalLayoutProps } from "@/interface/interface";
import { Flex, TextInput, Title, useMantineColorScheme } from "@mantine/core";

export default function HorizontalInputLayout({
  inputSize,
  asterisk,
  title,
  icon,
}: HorizontalLayoutProps): JSX.Element {
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
      <TextInput
        leftSectionPointerEvents="none"
        leftSection={icon}
        placeholder={title}
        w={inputSize}
        size="sm"
        styles={(theme) => ({
          input: {
            backgroundColor: colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
            color: `${theme.colors.lightTheme[3]}`,
          },
          section: {
            color:
              colorScheme === "light"
                ? `${theme.colors.lightTheme[3]}`
                : `${theme.colors.darkTheme[2]}`,
          },
        })}
      />
    </Flex>
  );
}
