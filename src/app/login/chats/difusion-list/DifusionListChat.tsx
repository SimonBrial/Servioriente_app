"use client";

import { Flex, ScrollArea, Stack } from "@mantine/core";
import { AvatarGroup } from "./AvatarGroup";
import TextEditor from "@/components/TextEditor";
import { ContainerInside } from "@/components/container/ContainerInside";
import heightClasses from "@/styles/heightView.module.css";
import BtnSend from "@/components/buttons/BtnSend";
import { BtnPreview } from "@/components/buttons/BtnPreview";

export const DifusionListChat = (): JSX.Element => {
  // Se le debe suministrar un array con el nombre de los contactos a los que se les desee enviar el mensaje
  const userFakeData: string[] = [
    "Mario H.",
    "Mario H.",
    "Mario H.",
    "Mario H.",
    "Mario H.",
    "Mario H.",
    "Mario H.",
    "Mario H.",
    "Mario H.",
  ];
  return (
    <Stack gap={6}>
      <AvatarGroup usersArr={userFakeData} />
      <ContainerInside
        allWhite
        width="100%"
        withBorder
        key={crypto.randomUUID()}
      >
        <ScrollArea
          scrollbarSize={0}
          p={0}
          className={heightClasses.difusionList_scroll_container}
        >
          <TextEditor />
        </ScrollArea>
      </ContainerInside>
      <Flex gap={6} justify={"end"}>
        <BtnPreview />
        <BtnSend
          label="Enviar Mensaje"
          close={() => console.log("FromBtnSend")}
          key={crypto.randomUUID()}
        />
      </Flex>
    </Stack>
  );
};
