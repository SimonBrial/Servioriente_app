"use client";

import React from "react";
import MailItem from "./MailItem";
import { ScrollArea, Stack } from "@mantine/core";
import { ContainerInside } from "@/components/container/ContainerInside";
import BtnMail from "@/components/buttons/BtnMail";

export const AsideMailContainer = () => {
  return (
    <ContainerInside width="35%" allWhite={false} withBorder>
      <Stack gap={4} style={{ height: "100%" }}>
        <BtnMail />
        <ScrollArea
          h={"100%"}
          style={{ borderRadius: "6px" }}
          offsetScrollbars
          scrollbarSize={2}
        >
          <MailItem />
          <MailItem />
          <MailItem />
          <MailItem />
          <MailItem />
          <MailItem />
          <MailItem />
          <MailItem />
          <MailItem />
          <MailItem />
          <MailItem />
          <MailItem />
          <MailItem />
          <MailItem />
          <MailItem />
          <MailItem />
          <MailItem />
          <MailItem />
          <MailItem />
          <MailItem />
          <MailItem />
          <MailItem />
          <MailItem />
        </ScrollArea>
      </Stack>
    </ContainerInside>
  );
};
