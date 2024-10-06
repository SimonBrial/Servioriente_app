"use client";

import { Flex, ScrollArea, Stack } from "@mantine/core";
import { AvatarGroup } from "./AvatarGroup";
import TextEditor from "@/components/TextEditor";
import { ContainerInside } from "@/components/container/ContainerInside";
import heightClasses from "@/styles/height-view.module.css";
import BtnSend from "@/components/buttons/BtnSend";
import { BtnPreview } from "@/components/buttons/BtnPreview";
import { IoIosSend } from "@/icons";

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
          scrollbarSize={2}
          p={0}
          className={heightClasses.difusionList_scroll_container}
        >
          {/* <TextEditor /> */}
          prueba
        </ScrollArea>
      </ContainerInside>
      <Flex gap={6} justify={"end"}>
        <BtnPreview />
        <BtnSend
          description="El mensaje enviado a la lista de Difusion ha sido satisfactoriamente!"
          iconTag={<IoIosSend />}
          id={crypto.randomUUID()}
          title="Mensajes enviado a la lista de Difusion"
          labelBtn="Enviar Mensaje"
          close={() => console.log("FromBtnSend")}
          key={crypto.randomUUID()}
        />
      </Flex>
    </Stack>
  );
};
