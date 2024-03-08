import { AsideContainer } from "./AsideContainer";
import { AsideSearch } from "./AsideSearch";
import { CardsContainer } from "./CardsContainer";
import { ChatContainer } from "./ChatContainer";
import { ChatInputText } from "./chatUserView/ChatInputText";
import { ConversationContainer } from "./chatUserView/ConversationContainer";
import { UserChatHeader } from "./chatUserView/UserChatHeader";

function page(): JSX.Element {
  return (
    <>
      <AsideContainer>
        <AsideSearch />
        <CardsContainer />
      </AsideContainer>
      <ChatContainer>
        <UserChatHeader colorUser="instagram" status={true} />
        <ConversationContainer />
        <ChatInputText />
      </ChatContainer>
    </>
  );
}

export default page;
