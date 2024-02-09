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
      <InsideContainer offset={225}>
        <TextEditor />
      </InsideContainer>
      <Flex gap={4} justify={"flex-end"} style={{ width: "50%" }}>
        {/* Añadirle la informacion que se va a mostrar mediante los hijos, es decir, hya que modificar el componente */}
        <BtnSend />
        <BtnPreview />
      </Flex>
    </Stack>
  );
};
