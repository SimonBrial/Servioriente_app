"use client";

import { ScrollArea } from "@mantine/core";
import { CardChatContainer } from "./CardChatContainer";
import { useMediaQuery } from "@mantine/hooks";

export const CardsContainer = (): JSX.Element => {
  const matches = useMediaQuery("(max-width: 1280px)");
  return (
    <ScrollArea
      h={matches ? "83vh" : "80vh"}
      scrollbarSize={6}
      offsetScrollbars
      scrollHideDelay={100}
    >
      <CardChatContainer header="whatsapp" />
      <CardChatContainer header="instagram" />
      <CardChatContainer header="facebook" />
    </ScrollArea>
  );
};
