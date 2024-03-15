import { BtnBackSection } from "@/components/buttons/BtnBackSection";
import { FavoritiesLayout } from "./FavoritiesLayout";
import { AsideContainer } from "../AsideContainer";
import { ChatContainer } from "../ChatContainer";
import UserChatHeader from "../chatUserView/UserChatHeader";
import ConversationContainer from "../chatUserView/ConversationContainer";
import ChatInputText from "../chatUserView/ChatInputText";
import { Box } from "@mantine/core";

const page = (): JSX.Element => {
  return (
    <>
      <AsideContainer>
        <Box style={{ width: "45%", marginBottom: "-0.4rem" }}>
          <BtnBackSection
            label="Volver a Chats"
            dir="/login/chats"
            withStyles={false}
          />
        </Box>
        <FavoritiesLayout />
      </AsideContainer>
      <ChatContainer>
        <UserChatHeader colorUser="instagram" status={true} />
        <ConversationContainer />
        <ChatInputText key={crypto.randomUUID()} />
      </ChatContainer>
    </>
  );
};

export default page;
