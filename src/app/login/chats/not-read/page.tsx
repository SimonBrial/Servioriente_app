import { BtnBackSection } from "@/components/buttons/BtnBackSection";
import { NotReadLayout } from "./NotReadLayout";
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
        <Box style={{ width: "45%" }}>
          <BtnBackSection
            label="Volver a Chats"
            dir="/login/chats"
            withStyles={false}
          />
        </Box>
        <NotReadLayout />
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
