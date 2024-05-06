"use client";

import AsideSearch from "../AsideSearch";
import { BtnBackSection } from "@/components/buttons/BtnBackSection";
import InsideContainer from "@/components/container/InsideContainer";
import { Flex, ScrollArea, Stack } from "@mantine/core";
import { TemplateCardLayout } from "./TemplateCardLayout";
import { BtnCreateTemplate } from "@/components/buttons/BtnCreateTemplate";
import { GeneralDivider } from "@/components/GeneralDivider";
import { useChatStore } from "@/store/chat-store";
import TitleSimpleLayout from "@/components/layout/TitleSimpleLayout";

export const FormatsLayout = (): JSX.Element => {
  const { templateArray } = useChatStore();
  return (
    <Stack gap={0}>
      <TitleSimpleLayout title="Buscar Plantilla" />
      <AsideSearch />
      <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
      <Stack gap={8} mt={8}>
        <InsideContainer
          offset={262}
          withBackground={false}
          withBorder={false}
          key={crypto.randomUUID()}
        >
          <ScrollArea h={"99%"} maw={"100%"} offsetScrollbars scrollbarSize={2}>
            <Stack gap={5} h={"50%"} p={6}>
              {templateArray.length > 0 ? (
                <>
                  {templateArray.map((template) => {
                    const { date, description, id, title, userCreator } =
                      template;
                    return (
                      <TemplateCardLayout
                        description={description}
                        userCreator={userCreator}
                        title={title}
                        date={date}
                        key={id}
                        id={id}
                      />
                    );
                  })}
                </>
              ) : (
                <>Vacio</>
              )}
            </Stack>
          </ScrollArea>
        </InsideContainer>
        <Flex style={{ width: "100%" }} gap={4}>
          <BtnBackSection label="Volver" dir="/login/chats" withStyles />
          <BtnCreateTemplate complete withStyles={false} />
        </Flex>
      </Stack>
    </Stack>
  );
};
