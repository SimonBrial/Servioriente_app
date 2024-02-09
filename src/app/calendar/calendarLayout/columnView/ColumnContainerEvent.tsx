"use client";

import {
  useMantineColorScheme,
  ScrollArea,
  Container,
  Flex,
  Center,
  Text,
} from "@mantine/core";
import React from "react";
import { BigEventCard } from "../cardLayout/BigEventCard";
import classes from "@/styles/carousel.module.css";
import { EventCardData } from "@/interface/interface";
import { HiOutlineEmojiSad } from "@/icons";

export const ColumnContainerEvent = ({
  eventCardArray,
}: {
  eventCardArray: EventCardData[];
}) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Container
      styles={(theme) => ({
        root: {
          padding: "0.5rem 0.6rem",
          border:
            colorScheme === "light"
              ? `1px solid ${theme.colors.lightTheme[2]}`
              : `1px solid ${theme.colors.darkTheme[9]}`,
          width: "100%",
          borderRadius: "6px",
          backgroundColor:
            colorScheme === "light"
              ? "#FFFFFF"
              : `${theme.colors.darkTheme[7]}`,
        },
      })}
    >
      <ScrollArea
        classNames={{ root: classes.carousel_container }}
        scrollbarSize={6}
        offsetScrollbars
        scrollHideDelay={0}
        p={0}
      >
        <Flex gap={4}>
          {eventCardArray.length > 0 ? (
            eventCardArray.map((eventCard) => {
              const { degree, desription, id, title, userToassign } = eventCard;
              return (
                <BigEventCard
                  userToassign={userToassign}
                  desription={desription}
                  degree={degree}
                  title={title}
                  key={id}
                  admin
                />
              );
            })
          ) : (
            <Flex
              gap={6}
              align={"center"}
              styles={(theme) => ({
                root: {
                  margin: "0 auto",
                  cursor: "default",
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[3]}`
                      : `${theme.colors.darkTheme[2]}`,
                },
              })}
            >
              <Center style={{ fontSize: "2.5rem" }}>
                <HiOutlineEmojiSad />
              </Center>
              <Text style={{ fontSize: "1.5rem" }}>
                No hay tareas asignadas para este dia
              </Text>
              <Center style={{ fontSize: "2.5rem" }}>
                <HiOutlineEmojiSad />
              </Center>
            </Flex>
          )}
        </Flex>
      </ScrollArea>
    </Container>
  );
};
