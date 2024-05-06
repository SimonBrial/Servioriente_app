"use client";

import { TbStarFilled } from "@/icons";
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
import { GeneralDivider } from "@/components/GeneralDivider";

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
      <Flex
        align={"center"}
        justify={"space-between"}
      >
        <Flex gap={8} style={{ width: "100%" }}>
          <Center>
            <Avatar color={colorScheme === "light" ? "#004EE5" : "#52A5E0"} />
          </Center>
          <Stack
            gap={0}
            style={{
              cursor: "default",
              width: "70%",
            }}
          >
            <Stack gap={0}>
              <Flex align={"center"} gap={6}>
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
                  <TbStarFilled
                    style={{
                      fontSize: "0.65rem",
                      color: colorScheme === "light" ? "#004EE5" : "#52A5E0",
                    }}
                  />
                ) : (
                  null
                )}
              </Flex>
              <GeneralDivider orientation="horizontal" />
            </Stack>
            <Text
              size="xs"
              styles={(theme) => ({
                root: {
                  paddingTop: "0.1rem",
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
