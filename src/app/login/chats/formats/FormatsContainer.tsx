"use client";

import { Flex, ScrollArea, Stack } from "@mantine/core";
import React from "react";
import TextEditor from "@/components/TextEditor";
import BtnSend from "@/components/buttons/BtnSend";
import { BtnPreview } from "@/components/buttons/BtnPreview";
import heightClasses from "@/styles/height-view.module.css";
import { ContainerInside } from "@/components/container/ContainerInside";

export const FormatsContainer = () => {
  return (
    <Stack gap={6}>
      <ContainerInside
        allWhite
        width="100%"
        withBorder
        key={crypto.randomUUID()}
      >
        <ScrollArea
          scrollbarSize={0}
          p={0}
          className={heightClasses.formats_scroll_container}
        >
          <TextEditor />
        </ScrollArea>
      </ContainerInside>
      <Flex gap={4} justify={"flex-end"} style={{ width: "100%" }}>
        {/* Añadirle la informacion que se va a mostrar mediante los hijos, es decir, hay que modificar el componente */}
        <BtnPreview />
        <BtnSend
          close={() => console.log("From FormatsContainer")}
          label="Crear Plantilla"
          key={crypto.randomUUID()}
        />
      </Flex>
    </Stack>
  );
};
