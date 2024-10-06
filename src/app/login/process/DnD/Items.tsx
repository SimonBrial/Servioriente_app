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
  Center,
  Badge,
  Group,
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
import { processTitle } from "@/types/types";
import { RxDragHandleDots2 } from "@/icons";
import { GeneralDivider } from "@/components/GeneralDivider";
import { UniqueIdentifier } from "@dnd-kit/core";

interface CardProps {
  card: CardProcessProps;
}

export function Items({
  card: {
    phonePost,
    firstName,
    createdAt,
    instagram,
    updatedAt,
    phonePre,
    columnId,
    lastName,
    facebook,
    birthday,
    vehicle,
    carID,
    state,
    mail,
    tag,
    id,
  },
}: CardProps) {
  const { colorScheme } = useMantineColorScheme();
  const [opened, { open, close }] = useDisclosure(false);

  // Don't delete this
  const [colorDivider, setColorDivider] = useState<processTitle>(
    columnId,
  );
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
        p={6}
        h={"100%"}
        w={"100%"}
      >
        <Flex align={"center"} gap={6} style={{ height: "100%" }}>
          <Center {...listeners}>
            <RxDragHandleDots2
              className={
                colorScheme === "light"
                  ? classes.card_drag_icon
                  : classes.card_drag_icon_dark
              }
            />
          </Center>
          <GeneralDivider orientation="vertical" />
          <Stack align="start" gap={2} style={{ width: "100%" }}>
            <Flex
              align="start"
              justify={"space-between"}
              style={{ width: "100%" }}
            >
              <Title
                lineClamp={1}
                onClick={open}
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
                {firstName.length + lastName.length > 25
                  ? `${`${firstName} ${lastName}`.slice(0, 20)}...`
                  : `${firstName} ${lastName}`}
              </Title>
              <BtnCardAction idCard={id} columnId={columnId} />
            </Flex>
            <Flex
              onClick={open}
              align="start"
              justify={"space-between"}
              style={{ width: "100%" }}
            >
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
                {capitalizeFirstLetter(vehicle).length > 25
                  ? `${`${capitalizeFirstLetter(vehicle)}`.slice(0, 20)}...`
                  : `${capitalizeFirstLetter(vehicle)}`}
              </Text>
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
                {dayjs(createdAt).format("DD/MM/YYYY")}
              </Text>
            </Flex>
            <Flex
              onClick={open}
              align="start"
              justify={"space-between"}
              style={{ width: "100%" }}
            >
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
                Tarifa: {tag.CValue}$
              </Text>
              <Badge
                size="sm"
                color={underScoreColor(capitalizeFirstLetter(colorDivider))}
              >
                {colorDivider}
              </Badge>
            </Flex>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}
