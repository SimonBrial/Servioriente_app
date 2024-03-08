"use client";

import backgroundImage from "../../../../../public/backgroundChat.png";
import Image from "next/image";
import {
  useMantineColorScheme,
  ScrollArea,
  Container,
  Stack,
} from "@mantine/core";
import { CloudDialogue } from "./CloudDialogue";
import InsideContainer from "@/components/container/InsideContainer";
import classes from "@/styles/generalStyles.module.css";
import heightClasses from "@/styles/heightView.module.css"

export const ConversationContainer = (): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <InsideContainer offset={222} withBackground={false} withBorder={false}>
      <Container
        classNames={{
          root:
            colorScheme === "light"
              ? classes.conversationContainer
              : classes.conversationContainer_dark,
        }}
      >
        <Image
          alt="Mountains"
          src={backgroundImage}
          sizes="80vw"
          width={600}
          height={500}
          // Make the image display full width
          style={{
            width: "100%",
            height: "auto",
            position: "absolute",
          }}
        />
        <ScrollArea
          // h={matches ? "74vh" : "68vh"}
          className={heightClasses.chat_container}
          scrollbarSize={0}
          offsetScrollbars
          scrollHideDelay={100}
          style={{ padding: "0.6rem" }}
        >
          <Stack>
            <CloudDialogue ubication="left" />
            <CloudDialogue ubication="right" />
            <CloudDialogue ubication="left" />
            <CloudDialogue ubication="right" />
            <CloudDialogue ubication="right" />
            <CloudDialogue ubication="left" />
            <CloudDialogue ubication="right" />
            <CloudDialogue ubication="left" />
            <CloudDialogue ubication="right" />
          </Stack>
        </ScrollArea>
      </Container>
    </InsideContainer>
  );
};

/* styles={(theme) => ({
  root: {
    padding: "0.6rem",
    borderRadius: "6px",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
})} */
