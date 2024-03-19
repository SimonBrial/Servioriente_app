"use client";

import { HiOutlineDotsVertical } from "@/icons";
import {
  useMantineColorScheme,
  Container,
  Avatar,
  Center,
  Stack,
  Flex,
  Text,
} from "@mantine/core";
import classes from "@/styles/metrics.module.css";
import { GeneralDivider } from "@/components/GeneralDivider";

export const HistoryCard = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Container
      style={{ maxWidth: "100%", width: "100%" }}
      classNames={{
        root:
          colorScheme === "light"
            ? classes.history_container_card
            : classes.history_container_card_dark,
      }}
    >
      <Flex justify={"space-between"} align={"center"}>
        <Flex gap={8} align={"center"}>
          <Avatar size={50} />
          <Stack gap={0}>
            <Text
              styles={(theme) => ({
                root: {
                  fontSize: "1.5rem",
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[3]}`
                      : `${theme.colors.darkTheme[2]}`,
                },
              })}
            >
              Mario Hurtado
            </Text>
            <Text
              styles={(theme) => ({
                root: {
                  marginTop: "-0.5rem",
                  fontSize: "1rem",
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[6]}`
                      : `${theme.colors.darkTheme[1]}`,
                },
              })}
            >
              Admin
            </Text>
          </Stack>
          <Stack gap={0}>
            <Text
              styles={(theme) => ({
                root: {
                  fontSize: "1.1rem",
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[6]}`
                      : `${theme.colors.darkTheme[2]}`,
                },
              })}
            >
              Tipo de Accion
            </Text>
            <Text
              styles={(theme) => ({
                root: {
                  fontSize: "0.8rem",
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[3]}`
                      : `${theme.colors.darkTheme[3]}`,
                },
              })}
            >
              Descripcion breve de la accion
            </Text>
          </Stack>
        </Flex>
        <Flex align={"center"} gap={6}>
          <GeneralDivider orientation="vertical" key={crypto.randomUUID()} />
          <Stack gap={0} align="center">
            <Text
              styles={(theme) => ({
                root: {
                  fontSize: "0.8rem",
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[3]}`
                      : `${theme.colors.darkTheme[2]}`,
                },
              })}
            >
              04/02/2024
            </Text>
            <Text
              styles={(theme) => ({
                root: {
                  fontSize: "0.8rem",
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[3]}`
                      : `${theme.colors.darkTheme[2]}`,
                },
              })}
            >
              05:35
            </Text>
          </Stack>
          <Center>
            <HiOutlineDotsVertical
              className={
                colorScheme === "light"
                  ? classes.btn_dots
                  : classes.btn_dots_dark
              }
            />
          </Center>
        </Flex>
      </Flex>
    </Container>
  );
};
