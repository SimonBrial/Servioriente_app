"use client";

import { CustomDivider } from "@/components/CustomDivider";
import { CardContainerHeader } from "@/types/types";
import {
  useMantineColorScheme,
  Divider,
  Avatar,
  Center,
  Badge,
  Stack,
  Flex,
  Text,
} from "@mantine/core";
import React from "react";
import { SearchInChat } from "./SearchInChat";
import { BtnFavorite } from "@/components/buttons/BtnFavorite";

interface UserChatHeaderProps {
  colorUser: CardContainerHeader;
  status: boolean;
}

export const UserChatHeader = ({
  colorUser,
  status,
}: UserChatHeaderProps): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex style={{ width: "100%" }} justify={"space-around"}>
      <Flex gap={8} align={"center"} style={{ width: "100%" }}>
        <CustomDivider
          colorUser={colorUser}
          dividerHeight={"3.2rem"}
          dividerWidth={"5px"}
        />
        <Center style={{ position: "relative" }}>
          <Avatar size={"lg"} />
          <Badge
            size="xs"
            color="#3ceb3f"
            style={{
              position: "absolute",
              bottom: "-0.1rem",
              right: "0.15rem",
            }}
          />
        </Center>
        <Stack gap={0}>
          <Text
            styles={(theme) => ({
              root: {
                color:
                  colorScheme === "light"
                    ? `${theme.colors.lightTheme[3]}`
                    : `${theme.colors.darkTheme[2]}`,
                fontSize: "1.2rem",
                cursor: "default",
              },
            })}
          >
            Nombre de Usuario
          </Text>
          {status ? (
            <Text
              style={{ fontSize: "0.8rem" }}
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[6]}`
                      : `${theme.colors.darkTheme[1]}`,
                  cursor: "default",
                },
              })}
            >
              En linea
            </Text>
          ) : (
            <Text
              style={{ fontSize: "0.8rem" }}
              styles={(theme) => ({
                root: { color: `${theme.colors.principalTheme[6]}` },
              })}
            >
              Desconectado
            </Text>
          )}
        </Stack>
      </Flex>
      <Flex align={"center"}>
        <BtnFavorite />
        <Divider
          orientation="vertical"
          style={{ margin: "0 0.2rem" }}
          color={colorScheme === "light" ? "#cdcdcd" : "#f8f8f8"}
        />
        <SearchInChat />
      </Flex>
    </Flex>
  );
};
