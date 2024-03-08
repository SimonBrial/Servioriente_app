"use client";

import BtnDelete from "@/components/buttons/BtnDelete";
import BtnEdit from "@/components/buttons/BtnEdit";
import BtnSee from "@/components/buttons/BtnSee";
import { BiCrown } from "@/icons";
import {
  useMantineColorScheme,
  Container,
  Avatar,
  Center,
  Flex,
  Text,
} from "@mantine/core";
import React from "react";
import { SuperAdminUserLayout } from "./SuperAdminUserLayout";
import { SuperAdminDescription } from "./SuperAdminDescription";
import { SuperAdminDeleteLayout } from "./SuperAdminDeleteLayout";

export const SuperAdminCard = ({ admin }: { admin: boolean }) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Container
      styles={(theme) => ({
        root: {
          border:
            colorScheme === "light"
              ? `1px solid ${theme.colors.lightTheme[2]}`
              : `1px solid ${theme.colors.darkTheme[9]}`,
          backgroundColor:
            colorScheme === "light"
              ? `${theme.colors.lightTheme[0]}`
              : `${theme.colors.darkTheme[7]}`,
          borderRadius: "6px",
          padding: "0.6rem 1rem",
          width: "100%",
        },
      })}
    >
      <Flex justify={"space-between"} align={"center"}>
        <Flex align={"center"} gap={8} style={{ cursor: "default" }}>
          <Avatar style={{ fontSize: "1.1rem" }} />
          <Text
            style={{ fontSize: "1.5rem" }}
            styles={(theme) => ({
              root: {
                color:
                  colorScheme === "light"
                    ? `${theme.colors.lightTheme[3]}`
                    : `${theme.colors.darkTheme[2]}`,
              },
            })}
          >
            Simon Briceño
          </Text>
          {admin ? (
            <Center
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[8]}`
                      : `${theme.colors.darkTheme[1]}`,
                },
              })}
            >
              <BiCrown style={{ fontSize: "0.95rem" }} />
            </Center>
          ) : (
            <></>
          )}
        </Flex>
        <Flex gap={"xs"}>
          <BtnDelete>
            <SuperAdminDeleteLayout />
          </BtnDelete>
          <BtnSee>
            <SuperAdminDescription />
          </BtnSee>
          <BtnEdit buttonStyles="special">
            <SuperAdminUserLayout />
          </BtnEdit>
        </Flex>
      </Flex>
    </Container>
  );
};
