/* eslint-disable object-shorthand */
"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
// Mantine
import {
  useMantineColorScheme,
  Divider,
  Avatar,
  Stack,
  Title,
  Flex,
  Text,
  Box,
  Drawer,
} from "@mantine/core";
// Others
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import classes from "@/styles/card-process.module.css";
import heightClasses from "@/styles/height-view.module.css";
import { underScoreColor } from "@/utils/underScoreColor";
import { CardProcessProps } from "@/interface/interface";
import BtnCardAction from "../buttons/BtnCardAction";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import ShowCardDescriptionLayout from "../layouts/ShowCardDescriptionLayout";
import { useDisclosure } from "@mantine/hooks";

export function Items({
  clientName,
  columnId,
  vehicle,
  date,
  tag,
  id,
}: CardProcessProps) {
  const { colorScheme } = useMantineColorScheme();
  const [opened, { open, close }] = useDisclosure(false);

  // Don't delete this
  const [colorDivider, setColorDivider] = useState<string>(columnId);
  // console.log(columnId)

  useEffect(() => {
    setColorDivider(columnId);
  }, [columnId]);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: id,
      data: {
        type: "item",
      },
    });
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        // closeOnClickOutside={false}
        position="right"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        withCloseButton={false}
        styles={{
          content: {
            backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#262749",
          },
        }}
      >
        <ShowCardDescriptionLayout rcvId={id} columnId={columnId} />
      </Drawer>
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
            color={underScoreColor(capitalizeFirstLetter(colorDivider))}
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
            <Stack align="start" gap={0} onClick={open}>
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
            {/* <Menu
            closeOnClickOutside
            withArrow
            shadow="md"
            closeOnItemClick
            zIndex={0}
          >
            <Menu.Target>
              <Center
                className={classes.verticalDots}
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
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item color="#F06418">
                <BtnEditCard editRef={editRef} key={crypto.randomUUID()} />
              </Menu.Item>
              <Menu.Item color="#F0185C">
                <BtnDeleteCard />
              </Menu.Item>
            </Menu.Dropdown>
          </Menu> */}
            <BtnCardAction idCard={id} columnId={columnId} />
            {/* <UnstyledButton className={classes.verticalDots}></UnstyledButton> */}
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
              {dayjs(date).format("DD/MM/YYYY")}
            </Text>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}
