import { BtnBackSection } from "@/components/buttons/BtnBackSection";
import { DifusionListLayout } from "./DifusionListLayout";
import { AsideContainer } from "../AsideContainer";
import { ChatContainer } from "../ChatContainer";
import { DifusionListChat } from "./DifusionListChat";
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
        <DifusionListLayout />
      </AsideContainer>
      <ChatContainer>
        <DifusionListChat />
      </ChatContainer>
    </>
  );
};

export default page;
