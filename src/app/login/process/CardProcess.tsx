"use client";

import { HiOutlineDotsVertical } from "@/icons";
import {
  useMantineColorScheme,
  UnstyledButton,
  Divider,
  Avatar,
  Center,
  Stack,
  Title,
  Flex,
  Text,
  Box,
} from "@mantine/core";
import { TaskItemProps } from "@/interface/interface";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { underScoreColor } from "@/utils/underScoreColor";
import { useEffect, useState } from "react";
import classes from "@/styles/cardProcess.module.css";
import heightClasses from "@/styles/heightView.module.css";

export const CardProcess = ({ card }: TaskItemProps): JSX.Element => {
  const [colorDivider, setColorDivider] = useState<string>("red");
  const { colorScheme } = useMantineColorScheme();

  useEffect(() => {
    setColorDivider(card.columnId);
  }, [card.columnId]);

  /*  let data: JSX.Element | null;
  const cardContainerView = (
    arr: CardProcessItemProps[],
  ): JSX.Element | null => {
    if (arr.length > 0) {
      if (arr.length > 3) {
        data = (
          <Collapse
            p={5}
            pb={15}
            pr={12}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
            in={opened}
            transitionDuration={300}
            transitionTimingFunction="linear"
          >
            <ScrollArea h={190} offsetScrollbars scrollbarSize={6}>
              <Stack gap={5} pl={18}>
                {arr.map((item: CardProcessItemProps, index) => {
                  return (
                    <CardItemProcess
                      key={crypto.randomUUID()}
                      date={item.date}
                      direction={item.direction}
                      tag={item.tag}
                      vehicle={item.vehicle}
                    />
                  );
                })}
              </Stack>
            </ScrollArea>
          </Collapse>
        );
      } else {
        data = (
          <Collapse
            p={5}
            pb={15}
            pr={12}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
            in={opened}
            transitionDuration={300}
            transitionTimingFunction="linear"
          >
            <Stack gap={5} pl={18}>
              {arr.map((item) => {
                return (
                  <CardItemProcess
                    key={crypto.randomUUID()}
                    date={item.date}
                    direction={item.direction}
                    tag={item.tag}
                    vehicle={item.vehicle}
                  />
                );
              })}
            </Stack>
          </Collapse>
        );
      }
    } else {
      return null;
    }
    return data;
  }; */

  // console.log(card.columnId);
  return (
    <Box
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
      <Flex align={"center"} justify={"space-between"}>
        <Divider
          orientation="vertical"
          size="5px"
          color={underScoreColor(capitalizeFirstLetter(colorDivider))}
          style={{ height: "78%" }}
          classNames={{
            root:
              colorScheme === "light"
                ? `${classes.card_divider}`
                : `${classes.card_divider}`,
          }}
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
              {card.clientName}
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
                {capitalizeFirstLetter(card.vehicle)}
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
                Tarifa: {card.tag}$
              </Text>
            </Stack>
          </Stack>
        </Flex>
        <Stack justify="space-between" align="end">
          <UnstyledButton>
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
            {card.date}
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};