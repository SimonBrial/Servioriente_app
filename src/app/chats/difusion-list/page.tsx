import { BtnBackSection } from "@/components/buttons/BtnBackSection";
import { DifusionListLayout } from "./DifusionListLayout";
import { AsideContainer } from "../AsideContainer";
import { ChatContainer } from "../ChatContainer";
import { DifusionListChat } from "./DifusionListChat";

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
        <DifusionListLayout />
      </AsideContainer>
      <ChatContainer>
        <DifusionListChat />
      </ChatContainer>
    </>
  );
};

export default page;
