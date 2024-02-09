import { TitleLayout } from "@/components/layout/TitleLayout";
import { AsideSearch } from "../AsideSearch";
import { BtnBackSection } from "@/components/buttons/BtnBackSection";
import InsideContainer from "@/components/container/InsideContainer";
import { Flex, ScrollArea, Stack } from "@mantine/core";
import { TemplateCardLayout } from "./TemplateCardLayout";
import { BtnCreateTemplate } from "@/components/buttons/BtnCreateTemplate";
import { GeneralDivider } from "@/components/GeneralDivider";

export const FormatsLayout = (): JSX.Element => {
  return (
    <Stack gap={0}>
      <TitleLayout color="" icon="" onText title="Buscar Plantilla" />
      <AsideSearch />
      <GeneralDivider />
      <Stack gap={8} mt={8}>
        <InsideContainer offset={262}>
          <ScrollArea h={"98%"} maw={"100%"} offsetScrollbars scrollbarSize={2}>
            <Stack gap={5} h={"50%"} p={6}>
              <TemplateCardLayout />
              <TemplateCardLayout />
              <TemplateCardLayout />
              <TemplateCardLayout />
              <TemplateCardLayout />
              <TemplateCardLayout />
              <TemplateCardLayout />
              <TemplateCardLayout />
              <TemplateCardLayout />
              <TemplateCardLayout />
              <TemplateCardLayout />
              <TemplateCardLayout />
              <TemplateCardLayout />
              <TemplateCardLayout />
              <TemplateCardLayout />
            </Stack>
          </ScrollArea>
        </InsideContainer>
        <Flex style={{ width: "100%" }} gap={4}>
          <BtnBackSection label="Volver" dir="/chats" withStyles />
          <BtnCreateTemplate complete withStyles={false} />
        </Flex>
      </Stack>
    </Stack>
  );
};
