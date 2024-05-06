"use client";

import { HiOutlineDocumentText } from "@/icons";
import {
  useMantineColorScheme,
  Container,
  Center,
  Title,
  Stack,
  Flex,
  Text,
} from "@mantine/core";
import React from "react";
import classes from "@/styles/general-styles.module.css";
import { FormatCardProps } from "@/interface/interface";
import BtnTemplateAction from "../buttoms/BtnTemplateAction";

export const TemplateCardLayout = ({
  userCreator,
  description,
  title,
  date,
  id,
}: FormatCardProps): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Container
      classNames={{
        root:
          colorScheme === "light"
            ? classes.UserContactContainer
            : classes.UserContactContainer_dark,
      }}
      style={{
        borderRadius: "6px",
        padding: "0.5rem",
      }}
    >
      <Flex justify={"space-between"}>
        <Flex gap={5}>
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
            <HiOutlineDocumentText
              style={{
                fontSize: "2.5rem",
                strokeWidth: "1",
              }}
            />
          </Center>
          <Stack gap={0} style={{ cursor: "default" }}>
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
              {userCreator}
            </Title>
            <Text
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[6]}`
                      : `${theme.colors.darkTheme[1]}`,
                  fontSize: "0.8rem",
                  marginTop: "-0.1rem",
                },
              })}
            >
              {title}
            </Text>
          </Stack>
        </Flex>
        <Center>
          <BtnTemplateAction
            userCreator={userCreator}
            description={description}
            date={date}
            title={title}
            id={id}
          />
        </Center>
      </Flex>
    </Container>
  );
};
