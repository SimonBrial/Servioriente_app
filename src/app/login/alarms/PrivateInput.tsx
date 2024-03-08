/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import {
  Center,
  Checkbox,
  Flex,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { HiOutlineLockClosed, HiOutlineLockOpen } from "@/icons";
import checkboxClasses from "@/styles/sidebarSectionSelection.module.css";

export default function PrivateInput({
  userName,
  privateStatus,
}: {
  userName: string;
  privateStatus: boolean;
}): JSX.Element {
  const [checked, setChecked] = useState<boolean>(false);
  const { colorScheme } = useMantineColorScheme();
  useEffect(() => {
    setChecked(privateStatus);
  }, []);

  return (
    <Flex align={"center"} gap={5} justify={"space-between"}>
      <Title
        order={4}
        styles={(theme) => ({
          root: {
            color:
              colorScheme === "light"
                ? `${theme.colors.lightTheme[3]}`
                : `${theme.colors.darkTheme[2]}`,
          },
        })}
      >
        Privado:
      </Title>
      <Flex align={"center"} gap={5}>
        <Text
          size="1.05rem"
          styles={(theme) => ({
            root: {
              color:
                colorScheme === "light"
                  ? `${theme.colors.lightTheme[3]}`
                  : `${theme.colors.darkTheme[2]}`,
            },
          })}
        >
          {checked ? <>Simon Briceño</> : <></>}
        </Text>
        {checked ? (
          <Center
            styles={(theme) => ({
              root: {
                fontSize: "1.3rem",
                color:
                  colorScheme === "light"
                    ? `${theme.colors.lightTheme[3]}`
                    : `${theme.colors.darkTheme[2]}`,
              },
            })}
          >
            <HiOutlineLockClosed />
          </Center>
        ) : (
          <Center
            styles={(theme) => ({
              root: {
                fontSize: "1.3rem",
                color:
                  colorScheme === "light"
                    ? `${theme.colors.lightTheme[3]}`
                    : `${theme.colors.darkTheme[2]}`,
              },
            })}
          >
            <HiOutlineLockOpen />
          </Center>
        )}
        <Checkbox
          color={colorScheme === "light" ? "#115dfe" : "#52A5E0"}
          checked={checked}
          onChange={(event) => {
            setChecked(event.currentTarget.checked);
          }}
          classNames={{
            input:
              colorScheme === "light"
                ? checkboxClasses.checkbox
                : checkboxClasses.checkbox_dark,
          }}
        />
      </Flex>
    </Flex>
  );
}
