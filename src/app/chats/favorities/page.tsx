import { BtnBackSection } from "@/components/buttons/BtnBackSection";
import { FavoritiesLayout } from "./FavoritiesLayout";
import { AsideContainer } from "../AsideContainer";
import { ChatContainer } from "../ChatContainer";
import { UserChatHeader } from "../chatUserView/UserChatHeader";
import { ConversationContainer } from "../chatUserView/ConversationContainer";
import { ChatInputText } from "../chatUserView/ChatInputText";

const page = (): JSX.Element => {
  return (
    <>
      <AsideContainer>
        <div style={{ width: "50%" }}>
          <BtnBackSection
            label="Volver a Chats"
            dir="/chats"
            withStyles={false}
          />
        </div>
        <FavoritiesLayout />
      </AsideContainer>
      <ChatContainer>
        <UserChatHeader colorUser="instagram" status={true} />
        <ConversationContainer />
        <ChatInputText />
      </ChatContainer>
    </>
  );
};

export default page;
