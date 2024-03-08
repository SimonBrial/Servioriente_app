import { BtnBackSection } from "@/components/buttons/BtnBackSection";
import { FormatsLayout } from "./FormatsLayout";
import { AsideContainer } from "../AsideContainer";
import { ChatContainer } from "../ChatContainer";
import { FormatsHeader } from "./FormatsHeader";
import { FormatsContainer } from "./FormatsContainer";
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
