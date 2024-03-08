"use client";

import { HiOutlineSearch } from "@/icons";
import {
  useMantineColorScheme,
  UnstyledButton,
  TextInput,
  Center,
  Flex,
} from "@mantine/core";
import React from "react";
import { HamburgerMenu } from "./HamburgerMenu";
import btnStyles from "@/styles/btnStyles.module.css";

export const AsideSearch = (): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex align={"center"} gap={4}>
      <UnstyledButton
        variant="transparent"
        size={"xl"}
        aria-label="Search"
        classNames={{
          root:
            colorScheme === "light"
              ? btnStyles.btnMail
              : btnStyles.btnMail_dark,
        }}
      >
        <Center
          styles={(theme) => ({
            root: {
              color:
                colorScheme === "light"
                  ? `${theme.colors.lightTheme[3]}`
                  : `${theme.colors.darkTheme[2]}`,
            },
          })}
        >
          <HiOutlineSearch style={{ fontSize: "1.5rem" }} />
        </Center>
      </UnstyledButton>
      <TextInput
        placeholder="Insertar nombre de usuario"
        w={"100%"}
        styles={(theme) => ({
          input: {
            backgroundColor:
              colorScheme === "light"
                ? "#FFFFFF"
                : `${theme.colors.darkTheme[2]}`,
            color: `${theme.colors.lightTheme[3]}`,
          },
        })}
      />
      <HamburgerMenu />
    </Flex>
  );
};
