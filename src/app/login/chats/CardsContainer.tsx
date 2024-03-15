import { ScrollArea } from "@mantine/core";
import { CardChatContainer } from "./CardChatContainer";
import heightClasses from "@/styles/heightView.module.css";

export default function CardsContainer (): JSX.Element {
  return (
    <ScrollArea
      className={heightClasses.chatCard_container}
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
