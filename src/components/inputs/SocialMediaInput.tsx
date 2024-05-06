"use client";

import { useMantineColorScheme, TextInput, Title, Flex } from "@mantine/core";
import { Controller } from "react-hook-form";
import { StateSelectProps } from "@/interface/interface";
import BtnCopy from "../buttons/BtnCopy";

interface SocialMediaProps extends StateSelectProps {
  socialMediaName: string;
  socialMediaIcon: React.ReactNode;
}

export default function SocialMediaInput({
  socialMediaName,
  socialMediaIcon,
  inputSize,
  register,
  required,
  control,
  label,
  max,
  min,
}: SocialMediaProps) {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex justify={"space-between"} align={"center"}>
      <Title
        order={5}
        styles={(theme) => ({
          root: {
            color:
              colorScheme === "light"
                ? `${theme.colors.lightTheme[3]}`
                : `${theme.colors.darkTheme[2]}`,
          },
        })}
      >
        {socialMediaName}
      </Title>
      <Controller
        name={label}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Flex gap={4} align={"center"}>
            <TextInput
              placeholder={socialMediaName}
              leftSection={socialMediaIcon}
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
            <BtnCopy
              value={
                socialMediaName === "Instagram"
                  ? `https://www.instagram.com/${value}/`
                  : `https://www.facebook.com/${value}/`
              }
            />
          </Flex>
        )}
      />
    </Flex>
  );
}
