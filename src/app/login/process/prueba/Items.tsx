/* eslint-disable object-shorthand */
"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
// Mantine
import {
  useMantineColorScheme,
  UnstyledButton,
  Divider,
  Center,
  Avatar,
  Stack,
  Title,
  Flex,
  Text,
  Box,
} from "@mantine/core";
// Others
import { HiOutlineDotsVertical } from "@/icons";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import classes from "@/styles/card-process.module.css";
import heightClasses from "@/styles/height-view.module.css";
import { underScoreColor } from "@/utils/underScoreColor";
import { CardProcessProps } from "@/interface/interface";

export function Items({
  clientName,
  columnId,
  vehicle,
  date,
  tag,
  id,
}: CardProcessProps) {
  const { colorScheme } = useMantineColorScheme();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: id,
      data: {
        type: "item",
      },
    });
  return (
    <Box
      ref={setNodeRef}
      {...attributes}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      mx="auto"
      className={
        colorScheme === "light"
          ? `${classes.card_container} ${heightClasses.card_process}`
          : `${classes.card_container_dark} ${heightClasses.card_process}`
      }
      py={5}
      pl={22}
      pr={10}
    >
      <Flex align={"center"} justify={"space-between"} gap={0}>
        <Divider
          {...listeners}
          orientation="vertical"
          size="8px"
          color={underScoreColor(capitalizeFirstLetter("red"))}
          style={{ height: "78%" }}
          className={classes.card_divider}
        />
        <Flex align={"center"} justify={"center"} gap={6}>
          <Avatar
            src={null}
            alt="no image here"
            color="blue"
            size={"md"}
            style={{
              cursor: "pointer",
            }}
          />
          <Stack align="start" gap={0}>
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
              {clientName}
            </Title>
            <Stack gap={0}>
              <Text
                size={"sm"}
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? `${theme.colors.lightTheme[6]}`
                        : `${theme.colors.darkTheme[1]}`,
                    marginBottom: "-0.3rem",
                    textAlign: "start",
                  },
                })}
              >
                {capitalizeFirstLetter(vehicle)}
              </Text>
              <Text
                size={"sm"}
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? `${theme.colors.lightTheme[3]}`
                        : `${theme.colors.darkTheme[2]}`,
                  },
                })}
              >
                Tarifa: {tag}$
              </Text>
            </Stack>
          </Stack>
        </Flex>
        <Stack justify="space-between" align="end">
          <UnstyledButton className={classes.verticalDots}>
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
              <HiOutlineDotsVertical />
            </Center>
          </UnstyledButton>
          <Text
            size={"xs"}
            styles={(theme) => ({
              root: {
                color:
                  colorScheme === "light"
                    ? `${theme.colors.lightTheme[3]}`
                    : `${theme.colors.darkTheme[2]}`,
              },
            })}
          >
            {date}
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
}
