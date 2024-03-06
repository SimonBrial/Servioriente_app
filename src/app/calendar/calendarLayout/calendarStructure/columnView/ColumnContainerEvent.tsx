"use client";

import {
  useMantineColorScheme,
  Container,
  Center,
  Flex,
  Text,
} from "@mantine/core";
import React from "react";
import { EventCardLayout } from "../cards/EventCardLayout";
import { EventCardData } from "@/interface/interface";
import { HiOutlineEmojiSad } from "@/icons";
import { Carousel } from "@mantine/carousel";
import { CarouselContainer } from "./CarouselContainer";
import classes from "@/styles/carousel.module.css";

export const ColumnContainerEvent = ({
  eventCardArray,
}: {
  eventCardArray: EventCardData[];
}) => {
  const { colorScheme } = useMantineColorScheme();
  const carouselItem = eventCardArray.map((eventCard: EventCardData) => {
    const { degree, desription, id, title, userToassign } = eventCard;
    return (
      <Carousel.Slide key={id} /* style={{ border: "1px solid red" }} */>
        <EventCardLayout
          userToassign={userToassign}
          desription={desription}
          date={new Date()}
          degree={degree}
          cardSize="big"
          title={title}
          key={id}
          id={id}
        />
      </Carousel.Slide>
    );
  });
  return (
    <Container
      classNames={{
        root:
          colorScheme === "light"
            ? classes.dayContainer
            : classes.dayContainer_dark,
      }}
    >
      {eventCardArray.length > 0 ? (
        <CarouselContainer>{carouselItem}</CarouselContainer>
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
      {/* <ScrollArea
        classNames={{ root: classes.carousel_container }}
        scrollbarSize={6}
        offsetScrollbars
        scrollHideDelay={0}
        p={0}
      >
      </ScrollArea> */}
    </Container>
  );
};
