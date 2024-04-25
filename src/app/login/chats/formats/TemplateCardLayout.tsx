"use client";

import { HiOutlineDocumentText, HiOutlineDotsVertical } from "@/icons";
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
        padding: "0.3rem 0.5rem",
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
                },
              })}
            >
              {title}
            </Text>
          </Stack>
        </Flex>
        <Center
        /* styles={(theme) => ({
            root: {
              color:
                colorScheme === "light"
                  ? theme.colors.lightTheme[3]
                  : theme.colors.darkTheme[2],
              fontSize: "1.5rem",
            },
          })} */
        >
          <HiOutlineDotsVertical
            // style={{ strokeWidth: "1.5" }}
            className={
              colorScheme === "light" ? classes.btn_dots : classes.btn_dots_dark
            }
          />
        </Center>
      </Flex>
    </Container>
  );
};
