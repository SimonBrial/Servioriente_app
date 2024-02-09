import { BtnBackSection } from "@/components/buttons/BtnBackSection";
import { FormatsLayout } from "./FormatsLayout";
import { AsideContainer } from "../AsideContainer";
import { ChatContainer } from "../ChatContainer";
import { FormatsHeader } from "./FormatsHeader";
import { FormatsContainer } from "./FormatsContainer";

const page = (): JSX.Element => {
  return (
    <>
      <AsideContainer>
        <div style={{ width: "50%", marginBottom: "-0.4rem" }}>
          <BtnBackSection
            label="Volver a Chats"
            dir="/chats"
            withStyles={false}
          />
        </div>
        <FormatsLayout />
      </AsideContainer>
      <ChatContainer>
        <FormatsHeader />
        <FormatsContainer />
      </ChatContainer>
    </>
  );
};

export default page;
