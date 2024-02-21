"use client";

import { Flex, Stack } from "@mantine/core";
import React from "react";
import TextEditor from "@/components/TextEditor";
import { BtnSend } from "@/components/buttons/BtnSend";
import { BtnPreview } from "@/components/buttons/BtnPreview";
import InsideContainer from "@/components/container/InsideContainer";

export const FormatsContainer = () => {
  return (
    <Stack justify="space-between" align="end">
      <InsideContainer offset={220} withBackground withBorder>
        <TextEditor />
      </InsideContainer>
      <Flex gap={4} justify={"flex-end"} style={{ width: "100%" }}>
        {/* Añadirle la informacion que se va a mostrar mediante los hijos, es decir, hay que modificar el componente */}
        <BtnSend />
        <BtnPreview />
      </Flex>
    </Stack>
  );
};
