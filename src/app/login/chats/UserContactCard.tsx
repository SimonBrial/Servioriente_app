"use client";

import { HiHeart } from "@/icons";
import {
  useMantineColorScheme,
  Container,
  Checkbox,
  Avatar,
  Center,
  Stack,
  Title,
  Flex,
  Text,
} from "@mantine/core";
import React from "react";
import classes from "@/styles/general-styles.module.css";
import { DifusionListItemProps } from "@/interface/interface";

export const UserContactCard = ({
  contactDescription,
  favorite,
  userName,
  photo,
  id,
}: DifusionListItemProps): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Container
      classNames={{
        root:
          colorScheme === "light"
            ? classes.UserContactContainer
            : classes.UserContactContainer_dark,
      }}
    >
      <Flex align={"center"} justify={"space-between"}>
        <Flex gap={8}>
          <Center>
            <Avatar color={colorScheme === "light" ? "#004EE5" : "#52A5E0"} />
          </Center>
          <Stack gap={0} style={{ cursor: "default" }}>
            <Flex align={"center"} gap={3}>
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
                {userName}
              </Title>
              {favorite ? (
                <HiHeart
                  style={{
                    fontSize: "0.65rem",
                    color: colorScheme === "light" ? "#004EE5" : "#52A5E0",
                  }}
                />
              ) : (
                <></>
              )}
            </Flex>
            <Text
              size="sm"
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[3]}`
                      : `${theme.colors.darkTheme[2]}`,
                },
              })}
            >
              {contactDescription}
            </Text>
          </Stack>
        </Flex>
        <Checkbox
          classNames={{
            input:
              colorScheme === "light"
                ? classes.checkbox
                : classes.checkbox_dark,
          }}
        />
      </Flex>
    </Container>
  );
};
