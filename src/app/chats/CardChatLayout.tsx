"use client";

import { CustomDivider } from "@/components/CustomDivider";
import { HiHeart } from "@/icons";
import { CardContainerHeader } from "@/types/types";
import {
  useMantineColorScheme,
  Container,
  Avatar,
  Center,
  Stack,
  Title,
  Badge,
  Flex,
  Text,
} from "@mantine/core";
import React from "react";

export const CardChatLayout = ({
  colorUser,
}: {
  colorUser: CardContainerHeader;
}): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  // console.log(colorUser);
  return (
    <Container
      styles={(theme) => ({
        root: {
          border:
            colorScheme === "light"
              ? `1px solid ${theme.colors.lightTheme[3]}`
              : `1px solid ${theme.colors.darkTheme[9]}`,
          borderRadius: "6px",
          padding: "0.5rem",
          width: "100%",
          backgroundColor:
            colorScheme === "light"
              ? "#FFFFFF"
              : `${theme.colors.darkTheme[7]}`,
        },
      })}
    >
      <Flex justify={"space-between"} align={"center"}>
        <Flex gap={5} align={"center"}>
          <CustomDivider
            colorUser={colorUser}
            dividerHeight={"2.5rem"}
            dividerWidth={"5px"}
          />
          <Avatar />
          <Stack gap={0}>
            <Title
              order={6}
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[3]}`
                      : `${theme.colors.darkTheme[2]}`,
                },
              })}
            >
              Nombre del Usuario
            </Title>
            <Text
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[3]}`
                      : `${theme.colors.darkTheme[2]}`,
                  fontSize: "0.8rem",
                },
              })}
            >
              Ultimo mensaje
            </Text>
          </Stack>
        </Flex>
        <Stack align="end">
          <Flex gap={3} align={"center"}>
            <Center
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[6]}`
                      : `${theme.colors.darkTheme[1]}`,
                  fontSize: "0.8rem",
                },
              })}
            >
              <HiHeart />
            </Center>
            <Text style={{ fontSize: "0.6rem" }}>10:30 AM</Text>
          </Flex>
          <Badge
            color={colorScheme === "light" ? "#1F7BF2" : "#52A5E0"}
            radius="sm"
          >
            +1
          </Badge>
        </Stack>
      </Flex>
    </Container>
  );
};

/*
background: rgb(250,199,93);
background: linear-gradient(180deg, rgba(250,199,93,1) 0%, rgba(253,14,120,1) 50%, rgba(45,104,221,1) 100%);

*/
